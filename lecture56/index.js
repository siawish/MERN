let promise1= new Promise( (resolve, reject)=>{
    let success= false;
    if (success){
        resolve("Promise Fulfilled");
    }
    else{
        reject("Promise Rejected");
    }
});

promise1.then((message)=>{
    console.log("then ka message is: ", message);

}).catch((error)=>{
    console.log("Catch ka error is: ", error);
})