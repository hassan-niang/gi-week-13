const path = require("path")
import express from "express";
import employeeData from "./employee.json" 


const filePath = path
const app = express();


app.get("", (req, res) => {
    res.send('Up and Going')
})

app.get('/employee', (req, res) => {
    res.send(employeeData);
  });

// console.log(findEmployeeByID(782699));
app.get("/employee", (req, res) => {
    res.send(employeeData)
})

// const employee = req.query.employee
app.get(`/employee/:employeeID`, (req, res) => {
    const employeeID = req.params.empID;

    // Find the employee with the specified ID
    const employee = employeeData.find(
        (employee) => employee.empID === empID
    );

    // If employee is found, send their data; otherwise, send an error message
    if (employee) {
        res.json(employee);
    } else {
        res.status(404).json({ error: 'Employee not found' });
    }
})
app.listen(4500, () => {
    console.log('Server is up and running ');
})