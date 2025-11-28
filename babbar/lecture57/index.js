
//asyns function 

// async function getData(){


//     //get request 
//     let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

//     let data = await response.json(); // parsing 
//     console.log(data);
// }

// getData();

async function processData(){const url= 'https://jsonplaceholder.typicode.com/posts';

let response = await fetch(url);
let data = await response.json(); // parsing 
    console.log(data);}

 processData();