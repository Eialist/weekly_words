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

    const url = "mongodb+srv://learnica:weeklywords900110@weekly-words.ntcwupi.mongodb.net/?retryWrites=true&w=majority&appName=weekly-words";
    const client = new MongoClient(url);

    db = client.db(appDbName);

    return db;
}

