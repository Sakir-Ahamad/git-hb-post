

import express from "express";
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
    res.send("Email  Page to WelCome")
});

app.listen(4000, () => {
    console.log("server running");

});

