import express from "express";
import morgan from "morgan";
import errorHandler from "./middleware/errormiddleware.js";
import studentRoutes from "./routes/studentRoutes.js";


const app = express();
app.set("view engine", "ejs");

// Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(errorHandler);

// Custom middleware
/*const myMiddleware = (req, res, next) => {
    console.log("hidden middleware working");
    next();
};*/

const requestLogger = (req, res, next) => {
    console.log("request method:", req.method);
    console.log("request url:", req.url);
    console.log("request time:", new Date().toLocaleString()); // இது தேதி மற்றும் நேரத்தைக் காட்டும்
    next();
};

app.use(requestLogger);

//app.use(myMiddleware);

// Student API routes
app.use("/api/students", studentRoutes);

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to Student API");
});

// ejs route
app.get("/welcome", (req, res) => {
    res.render("welcome", 
        {name: "SKR_AHMD",
            course: "IT",
            age: "22"
        }
    );
});

// student info
app.get("/skr", (req, res) => {
    res.render("studentinfo",
        {name: "Sanha ",
        course: "software engineering",
        age: "16"
    }
    );
});

// localhost port
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
