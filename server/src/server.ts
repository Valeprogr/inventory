import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "./api/config/config"

const app = express();
app.use(cors());

//Connection with Mongo
mongoose.connect(config.mongo.url, { retryWrites: true, w: "majority" })
    .then(() => {
        console.log('Connect to mongo');
        //Call function for start server
        StartServer();
    })
    .catch((error) => {
        console.log(error)
    })

    //Function start server

const StartServer = () => {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use((req, res, next) => {
        //Puoi fare richiesta da qualsiasi dominio
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'ORIGIN, X-Requested-With, Content-Type, Accept, Authorization');
        if (req.method === 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT,POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }
        next();
    });

    //Routes

    //HealthCheck
    app.get('/ping', (req, res, next) => {
        res.status(200).json({ message: 'pong' })
    });

    //Errors Handling
    app.use((req, res, next) => {
        const error = new Error('not found');
        return res.status(404).json({ message: error.message })
    });

    app.listen(config.server.port, ()=> console.log(`Server is running on port ${config.server.port}.`))
    }