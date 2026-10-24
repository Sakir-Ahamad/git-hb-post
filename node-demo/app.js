 /* console.log("hello node.js!");
console.log ("well come to marstech");

*/

/*const fs=require("fs");
fs.writeFileSync("student.text" , "name:ahamad");
fs.writeFileSync("student.text" , "name:sakir")
console.log("file created sucessfully");
*/

/*const fs=require("fs");
const data =fs.readFileSync("student.text" ,"utf8");
console.log(data);
*/

/*const fs =require("fs");
fs.appendFileSync("student.text ","\n course:mern stack ");
console.log("data added sucessfully");
*/

/*const fs =require ("fs");
fs.unlinkSync("student.text");
console.log("delete file successfully");
*/

const fs=require ("fs");
const data =fs.readFileSync("student.text" ,"utf8");

console.log (data);
console.log ("next operation");


