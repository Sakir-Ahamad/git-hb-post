const validateStudent = (req, res, next) =>
     {
        const { name, age, course }= req.body;
        if (!name || !age || !course) 
        {
            return res.status(400).json
            (
                {
                    message: "All fields are required"
                }
            );
        }


        if (typeof name !== "string" || name.trim()==="")
        {
            return res.status(400).json
    (
              
            {
                message: "name must be a non-empty string"
            }
    );
           
        }

        if (!Number.isInteger(age) || age < 0)
        {
            return res.status(400).json
            (
                {
                    message: "age must be a positive number"
                }
            );
        }

        if (typeof course !== "string" || course.trim() === "")
        {
            return res.status(400).json
            (
                {
                    message: "course must be a non-empty string"
                }
            );
        }
     }

     export default validateStudent;
     
