
function multiply(x, y) {
    return x * y;
}
let result = multiply(5, 10);   
console.log(result);
let num1=prompt("Enter the first number:");
let num2=prompt("Enter the second number:");
let product = multiply(num1, num2);
console.log("The product of " + num1 + " and " + num2 + " is: " + product);
let studentName = prompt("Enter student name:");
let studentRollNo = prompt("Enter student roll number:");
console.log("Student Name: " + studentName);
console.log("Student Roll Number: " + studentRollNo);
const student = {
    name: studentName,
    rollNo: studentRollNo
};
console.log("Student Object:", student);
