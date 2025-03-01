// console.log("babbar");

let obj={
    age:12,
    wt:29,
    ht:89
}

let dest= Object.assign({},obj);
console.log(dest);
// console.log(obj);
// obj.color= "white";
// console.log(obj);

// let des={...obj};

for(let key in obj){
    let newKey=key;
    let newValue=obj(key);
    dest[key]=obj(key);
}
console.log(dest);
