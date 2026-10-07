//function

/*function ahmd(sakir) {
    console.log(`~welcome to my world~ ${sakir}`);
}

ahmd("ahmd sakir");*/

function myFunction(name1, name2) {
    console.log(`Hello, ${name1}  ${name2}!`);
}

myFunction("Alice", "Boba");

function kuttal(num1, num2) {
    return num1 + num2;
}

let result = kuttal(50, 60);
console.log(result); // 110

let visitadlist =['sakir', 'ahmd', 'kuttal', 'ahmd sakir'];
visitadlist.forEach(function(value) {
    console.log(`${value} , `);
}
);