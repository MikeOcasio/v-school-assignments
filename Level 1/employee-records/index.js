var firstEmployee = new Employee("Mike", "Forlklift Technician", "3/hr");

var secondEmployee = new Employee("Ruth", "Telemarketer", "60/hr");

var thirdEmployee = new Employee("Bob", "V School Instructor", "10/hr");

const arrayOFAll = [firstEmployee, secondEmployee, thirdEmployee];

console.log(arrayOFAll);

thirdEmployee.status = "Contract";

console.log(firstEmployee);

function Employee(name, jobTitle, salary, status = "Full time") {
  this.name = name;
  this.jobTitle = jobTitle;
  this.salary = salary;
  this.status = status;

  function printEmployeeForm() {
    console.log(name, jobTitle, salary, status);
  }

  printEmployeeForm();
}

// class Employee {
//     constructor(name, jobTitle, salary, status = "Full Time" ){
//         this.name = name
//         this.jobTitle = jobTitle
//         this.salary = salary
//         this.status = status

//     }
//     get printEmployeeForm () {
//         console.log(firstEmployee, secondEmployee, thirdEmployee)
//     }
//     // printEmployeeForm()
// }
