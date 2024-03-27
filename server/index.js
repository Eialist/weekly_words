import express from "express";
import { MongoClient } from "mongodb";
import { fetchCollection } from "./src/mongodb/mongodb.js";
import dotenv from "dotenv";
import connectDB from "mongodb"
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

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

// app.get("/", async (req, res) => {
//     let my_item = req.params.my_item;
//     let item = await client.db("weekly-words")
//         .collection("year4")
//         .then(console.log("hello"));

//     return res.json(item)
// })

// client.connect(err => {
//     if (err) { console.error(err); return false; }
//     // connection to mongo is successful, listen for requests
//     app.listen(port, () => {
//         console.log("listening for requests");
//     })
// });


// app.listen(port, () => console.log("Server has started on port: " + port));

connectDB().then(() => {
    console.log("db connected");
    app.listen(port, () => {
        console.log("listening for requests");
    })
})