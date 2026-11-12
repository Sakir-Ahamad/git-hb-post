import express from "express";

import studentRoutes from "./routes/studentRoutes.js";

const app = express();

// Middleware
app.use(express.json());

// Custom middleware
const myMiddleware = (req, res, next) => {
    console.log("hidden middleware working");
    next();
};

app.use(myMiddleware);

// Student API routes
app.use("/api/students", studentRoutes);

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to Student API");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
