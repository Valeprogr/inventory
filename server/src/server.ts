import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "./api/config/config";
import itemRoutes from "./api/routes/Item";

const app = express();

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// CORS Handling
app.use((req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

// Health Check Route
app.get("/ping", (req: Request, res: Response) => {
    res.status(200).json({ message: "pong" });
});

// Root Route
app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Vercel + ts + node");
});

// Routes
app.use("/shoes", itemRoutes);

// Error Handling
app.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error("Not Found");
    res.status(404).json({ message: error.message });
});

// MongoDB Connection
const connectToMongo = async () => {
    try {
        await mongoose.connect(config.mongo.url, { retryWrites: true, w: "majority" });
        console.log("Connected to MongoDB");
        startServer();
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1); // Termina il processo in caso di errore critico
    }
};

// Start the Server
const startServer = () => {
    app.listen(config.server.port, () => {
        console.log(`Server is running on port ${config.server.port}.`);
    });
};

// Start Application
connectToMongo();
