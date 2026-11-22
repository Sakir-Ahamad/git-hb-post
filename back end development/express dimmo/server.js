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
app.use(express.urlencoded({extended:true}));

//Temporary Student Data pages
let students = 
[
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
    /*const students =[
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
    ];*/
    res.render("student-page", {title: "student page", students: students });
});

// student info
app.get("/skr", (req, res) => {
    res.render("studentinfo",
        {title:"Student Information",
         name: "Sanha ",
        course: "software engineering",
        age: "16"
    });
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

//Contact Page
app.get("/contact", (req, res) =>
{
    res.render("contact",
    {
        title: "Contact"
    }
   );
}  
);

//registration form
app.get("/register", (req, res) =>
{
    res.render("register",
        {
            title: "Student Register form"
        }

    );
}
);

//student handle route
app.post("/register", (req, res) =>
 {
    const {name,age,course} =req.body;

    //server-side valitation
    const parsedAge=Number(age);

    if(
        typeof name !== "string" || name.trim() === "" ||
        !Number.isInteger(parsedAge) ||parsedAge <-0 ||
        typeof course !=="string" || !["software enginearing", "cyber Security Researher","full Stack Developer"].includes(course)
     )

    {
        return res.status(400).send("invalid student details")
    }

    const newstudent =
    {
       id: Math.max(0, ...students.map((s) => s.id)) + 1,
        name:name.trim(),
        age:parsedAge,
        course:course
    };
    students.push(newstudent);
    res.redirect("/student-page");
 }
);

// localhost port
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
