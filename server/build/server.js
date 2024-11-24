"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./api/config/config");
const Item_1 = __importDefault(require("./api/routes/Item"));
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
// CORS Handling
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});
// Health Check Route
app.get("/ping", (req, res) => {
    res.status(200).json({ message: "pong" });
});
// Root Route
app.get("/", (req, res) => {
    res.status(200).send("Vercel + ts + node");
});
// Routes
app.use("/shoes", Item_1.default);
// Error Handling
app.use((req, res, next) => {
    const error = new Error("Not Found");
    res.status(404).json({ message: error.message });
});
// MongoDB Connection
const connectToMongo = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(config_1.config.mongo.url, { retryWrites: true, w: "majority" });
        console.log("Connected to MongoDB");
        startServer();
    }
    catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1); // Termina il processo in caso di errore critico
    }
});
// Start the Server
const startServer = () => {
    app.listen(config_1.config.server.port, () => {
        console.log(`Server is running on port ${config_1.config.server.port}.`);
    });
};
// Start Application
connectToMongo();
//# sourceMappingURL=server.js.map