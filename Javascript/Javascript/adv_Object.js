//oops concept...
class student{
 constructor(name,age){
 this.sname=name;
 this.age=age;
     console.log("this is a default constructor");
 }
 hello(){
     console.log(`Hello  ${this.sname}
      age ${this.age}`);
 }
 message(para){
     console.log("this is function");
      return(para+2);
 }
 static msg(){
     console.log("this is static method");
 }
}
student.msg();
var obj= new student("suneel",28);
console.log(obj.message(2));
obj.hello();

///inheritance.......
class employee{
    constructor(name,age,salary){
        this.name=name;
        this.age=age;
        this.salary=salary;
        console.log("this is emp1 constructor")
    }
    myfun(){
        // console.log(`Name1: ${this.name} Age:${this.age} Salary:${this.salary}`);
        document.write(`<h3>Employee class</h3>
                        Name: ${this.name} <br>
                        Age: ${this.age} <br>
                        Salary: ${this.salary} <br>`);
    }
}
class manager extends employee{
    
   
    myfun(){
        let ta=2000;
        let pa=3000;
        let totalSalary=ta+pa+this.salary;
        // super.myfun();
        document.write(`<h3>Manager class</h3>
                        Name: ${this.name} <br>
                        Age: ${this.age} <br>
                        Salary: ${totalSalary} <br>`);
    }
}
let a= new manager("Ram", 28, 30000);
let b= new employee("Shyam", 25, 30000);

a.myfun();
b.myfun();