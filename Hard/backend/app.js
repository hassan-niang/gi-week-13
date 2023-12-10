const path = require("path")
const express = require("express")
const employeeData =  require("./employee.json")


const filePath = path
const app = express();


app.get("", (req, res) => {
    res.send('Up and Going')
})

app.get('/employee', (req, res) => {
    res.json(employeeData);
  });

// console.log(findEmployeeByID(782699));
// app.get("/employee", (req, res) => {
//     res.send(employeeData)
// })

// const employee = req.query.employee
app.get(`/employee/:empID`, (req, res) => {
    const empID = Number(req.params.empID);

    const employee = employeeData.find(
        (emp) => emp.empID === empID
    );

    if (employee) {
        res.json(employee);
    } else {
        res.status(404).json({ error: 'Employee not found' });
    }
})
app.listen(4500, () => {
    console.log('Server is up and running ');
})