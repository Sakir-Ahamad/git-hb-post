const errorHandler = (err, req, res, next) => {
    console.log("error:" , err.message);
    res.status(500).json(
        {
            message:err.message || "Internal Server error"
        }
    );
}

export default errorHandler;