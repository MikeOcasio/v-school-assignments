
var firstEmployee = new Employee("Mike", "Forlklift Technician", "3/hr");

var secondEmployee = new Employee("Ruth", "Telemarketer", "60/hr");

var thirdEmployee = new Employee("Bob", "V School Instructor", "10/hr");


function Employee (name, jobTitle, salary, status){

    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = "Full-Time"
    
    function printEmployeeForm () {
        console.log(this.firstEmployee, this.secondEmployee, this.thirdEmployee)
    }

    printEmployeeForm()

};




thirdEmployee.status = "Contract"

console.log(thirdEmployee)