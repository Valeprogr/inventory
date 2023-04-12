import dotenv from "dotenv";

dotenv.config();

const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.yqq5fxl.mongodb.net/inventory?retryWrites=true&w=majority`;

const PORT = process.env.PORT;

export const config = {
    mongo: {
        url: MONGO_URL
    },
    server: {
        port: PORT
    }
};