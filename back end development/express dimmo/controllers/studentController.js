let students = [
    { id: 1, name: "Raja", age: 20, course: "SE" },
    { id: 2, name: "Kumar", age: 22, course: "IT" },
    { id: 3, name: "Kamal", age: 22, course: "IT" }
];

// GET all students
export const getStudents = (req, res) => {
    res.status(200).json(students);
};

// GET student by ID
export const getStudentById = (req, res) => {
    const id = Number(req.params.id);

    const student = students.find((s) => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.status(200).json(student);
};

// POST new student
export const createStudent = (req, res) => {
    const newStudent = req.body;

    students.push(newStudent);

    res.status(201).json({
        message: "Student added successfully",
        student: newStudent
    });
};

// PATCH student
export const updateStudent = (req, res) => {
    const id = Number(req.params.id);

    const student = students.find((s) => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    Object.assign(student, req.body);

    res.status(200).json({
        message: "Student updated successfully",
        student
    });
};

// DELETE student
export const deleteStudent = (req, res) => {
    const id = Number(req.params.id);

    const index = students.findIndex((s) => s.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    students.splice(index, 1);

    res.status(200).json({
        message: "Student deleted successfully"
    });
};