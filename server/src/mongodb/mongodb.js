import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

let db = undefined;
const appDbName = "weekly-words";

export function fetchCollection(name) {
    return fetchDatabase().collection(name);
}

const fetchDatabase = () => {
    if (db != undefined) {
        return db;
    }

    const uri = process.env.MONGO_URI;
    const client = new MongoClient(uri);

    db = client.db(appDbName);

    return db;
}

