const searchForm = document.querySelector("#old-emp")
const newEmp = document.querySelector("#new-emp") 

fetch("http://localhost:3000/employee").then((res)=>{
    res.json().then((data)=>{
        console.log(data);
    })
})