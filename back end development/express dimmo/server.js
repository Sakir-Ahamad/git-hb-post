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
app.use(express.static("public"));

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

        {   title:"welcome",
            name: "SKR_AHMD",
            course: "IT",
            age: "22"
        }
    );
});

// student page route
app.get("/student-page", (req, res) => {
    const students =[
    {
        id: 1,
        name: "Sanha",
        course: "software enginearing",
        age: 16,
        //status: "active"
    },

    {
        id: 2,
        name: "Sanjana",
        course: "cyber Security Researher",
        age: 18,
        //status: "active"
    },

    {
        id: 3,
        name: "Sanjay",
        course: "full Stack Developer",
        age: 20,
        //status: "active"
    }
    ];
    res.render("student-page", {title: "student page", students: students });
});

// student info
app.get("/skr", (req, res) => {
    res.render("studentinfo",
        {title:"Student Information",
         name: "Sanha ",
        course: "software engineering",
        age: "16"
    }
    );
});

//about page 
app.get("/about", (req, res) =>
{
    res.render("about",
        {
            title: "About Us"
        }
    );
});

// localhost port
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
