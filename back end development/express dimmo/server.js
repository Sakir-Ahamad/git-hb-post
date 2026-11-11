

/*import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("AHMD SNH");
});

app.get("/Contact", (req, res) => {
    res.send("Contact Page to WelCome")
});

app.get("/about", (req, res) => {
    res.send("About Page to WelCome")
});

app.get("/Email", (req, res) => {
    res.send("Email deeeee Page to WelCome")
});

/*app.get("/api/student", (req, res) => 
{
    res.json({
        message: "Welcome to the API",
        student:[
            {id: 1215, name: "ahmed", age: 20},
            {id: 1216, name: "sakir", age: 22}
        ]
    });
});*/

/*let student = [
    {id:1, name: "samhan", age: 19, course: "MERNSTACK DEVELOPER"},
    {id:2, name: "ahamed", age: 20, course: "CYBER SECURITY RESERCHER"},
];

//GET ALL STUDENT 
app.get("/api/student/dimmo", (req, res) =>
{
    res.status(200).json(student);
 });

 app.get("/api/students/express/:id", (req,res) =>
 {
    const id = Number (req.params.id);
    const student=students.find((s)=> s.id ===id);

  if (!student)
  {return res.status(404).json({
    message:"Student not found"

    });

  }
  

  res.status(200).json(student);

});*/

/*app.post("/api/student/express/dimmo", (req, res) =>
     {
   const newStudent =req.body;
   student.push(newstudent);
   res.student(201).json(
    {message:"Student added successfully",}
   );

});*/

/*app.listen(3000, () => {
    console.log("server running");

});*/



import express from "express";
const app = express(); // Idhu thaan eppozhum first irukkanum
app.use(express.json());// idhu body parser nu solranga, post method ku use aagum


app.get("/", (req, res) => {
    res.send("AHMD SNH");
});

app.get("/Contact", (req, res) => {
    res.send("Contact Page to WelCome")
});

app.get("/about", (req, res) => {
    res.send("About Page to WelCome")
});

app.get("/Email", (req, res) => {
    res.send("Email deeeee Page to WelCome")
});

// Students array-ai inga podunga (app initialize pannunathukku apparam)
let students = [
    {id: 1, name: "samhan", age: 19, course: "MERNSTACK DEVELOPER"},
    {id: 2, name: "ahamed", age: 20, course: "CYBER SECURITY RESERCHER"},
];

// GET ALL STUDENT 
app.get("/api/student/dimmo", (req, res) => {
    res.status(200).json(students);
});

app.get("/api/students/express/:id", (req, res) => {
    const id = Number(req.params.id);
    const student = students.find((s) => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.status(200).json(student);
});

// post consapte

app.post("/api/student/express/dimmo", (req, res) =>
     {
   const newStudent =req.body;
   students.push(newStudent);

   res.status(201).json(
    {message:"Student added successfully",

    student: newStudent
    }
   );

});

// PUT method to update a student by ID

app.put("/api/student/express/dimmo/:id", (req, res) => 
{
    const id = Number(req.params.id);
    const index= students.findIndex((s) => s.id === id);

   //student illa enpathai kattal
    if (index === -1) {
        return res.status(404).json(
        {
            message: "Student not found"
        });
    }

    students[index] = { ...students[index], ...req.body };
    res.status(200).json({
        message: "Student updated successfully",
        student: students[index]
    });
});

//delete method to delete a student by ID
app.delete("/api/student/express/:id", (req, res) => {
    const id = Number(req.params.id);//url la id a number a convert pannirukom
    const index = students.findIndex((s) => s.id === id);

    if (index === -1) 
        {
          return res.status(404).json(
            {
                message: "Student not found"
            }
          );

          students.splice(index, 1);
          res.status(200).json(
            {
                message: "Student deleted successfully"

            }
          );
        }
    });


app.listen(3000, () => {
    console.log("server running");
});