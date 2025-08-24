/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
   let developer = arr.filter(kamgar => kamgar.profession === "developer");
   let developername = developer.map(developer => developer.name);
   console.log(developername); 
}


function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  
  arr.forEach(employee => {
      if (employee.profession === "developer") {
          console.log(employee);
      }
  });
}

function addData() {
  //Write your code here, just console.log
 let newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log("Added employee:", newEmployee);
}



function removeAdmin() {
  //Write your code here, just console.log
  let filteredEmployees = arr.filter(employee => employee.profession !== "admin");
  console.log("Employees after removing admins:", filteredEmployees);
}

function concatenateArray() {
  //Write your code here, just console.log

      let newArray = [
    { id: 5, name: "Akshay", age: "22", profession: "developer" },
    { id: 6, name: "Sharukh", age: "25", profession: "designer" },
    { id: 7, name: "Virat", age: "21", profession: "developer" }
];
const concatenatedArray = arr.concat(newArray);
console.log("Concatenated array:", concatenatedArray);

  
}


