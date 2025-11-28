


// code 1
let t1=performance.now();
for (let i=0; i<=100; i++){
    let para = document .createElement('p');
    para.textContent="This is para: "+i;
    document.body.appendChild(para);
}
let t2=performance.now();
console.log("code 1 time :", (t2-t1));


// code 2
let t3=performance.now();
let myDiv = document.createElement('div');
for(let i=0; i<=100;i++){
    let para = document .createElement('p');
    para.textContent="This is para: "+i;
    myDiv.appendChild(para);
}
document.body.appendChild(myDiv);
let t4=performance.now();
console.log("code 2 time :", (t4-t3));