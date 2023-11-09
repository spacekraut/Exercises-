Exercise 2

const planet = earth

let userName = {
    Name: 'john',
    LastName: 'kane',
};

Exercise 3

let phrase = "Hello"

if (true) {
  let user = "John";
  function sayHi() {
    alert(`${phrase}, ${user}`)
  }
}

sayHi()   
Hello John

Exercise 4

const user = {}
user.name = 'John';
user.surname = 'Smith'
user.name = 'Pete'
delete user.name

Exercise 5

Yes because it's in the block.

const user = {
    name: "John"
  }
  
  // does it work?
  user.name = "Pete"

Exercise 6




let salaries = {
    Fred: 100,
    Ted: 160,
    Ghaith: 130
  }

let sum = 0

for(let employee in salaries){
    sum += salaries[employee]
}

console.log(sum);



----------------------------

Exercise 7


if (a + b < 4) {
    result = 'Below';
  } else {
    result = 'Over';
  }

1. write first condition and use ? syntax as if 
2. write second condition and use : as else 
3. add variables for a and b and clg results 

a = 1
b = 1

  a + b < 4 ? result = 'Below' : result = 'Over';
  
  console.log(result);


Exercise 8

1. return message 
2. declare comditions
3.clg message


let login = 'Employee';

let message = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings' : (login =='') ? 'No login' : '';

console.log(message);














