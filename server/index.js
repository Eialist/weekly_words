import express from "express";
import { fetchCollection } from "./src/mongodb/mongodb.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
    res.send("Server is working");
});

const fetchWords = () => {
    return fetchCollection("year4").find().toArray();

}

app.get("/api/year4/", async (req, res) => {
    fetchWords().then((data) => {
        console.log(data);
        res.send(data);
    })
})

app.post("/api/addWord/", async (req, res) => {
    const AddWord = (req, res) => {
        const { sv, en, week } = req.body;
        console.log(req.body);

        if (sv == undefined || en == undefined) {
            return res.status(403).send({ error: "Missing sv or en word" });
        }
        try {
            const filter = { name: week }
            const updateDocument = { $push: { ["words"]: { sv: sv, en: en } } };
            console.log(filter);
            return fetchCollection("year4").updateOne(filter, updateDocument, { upsert: true });
        }
        catch (error) {
            return res.status(403).send({ error: error.message });
        }

    }
    AddWord(req, res);
    res.status(200).send({ msg: 'Nytt ord tillagt' });
})


app.listen(port, () => console.log("Server has started on port: " + port));