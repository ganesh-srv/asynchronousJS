function delay(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, ms)
        doSomething()
        // setTimeout(resolve,ms-500)
    })
}

function doSomething() {
    console.log("*******************")
}

function PromisePrint() {
    return delay(1000).then(() => {
        return 'B'
    })
        .then(resultB => {
            console.log(resultB);
            return delay(200).then(() => {
                return 123
            })
        })
        .then(resultNumber => {
            console.log(resultNumber)
        })
}



function fetchCatFacts() {
    return fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // return data;  // Optionally, you can return the data if needed for further processing
        });
}

//  fetchCatFacts();



const fs = require('fs');
function readFile(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf-8', (err, data)=>{
            if(data){
                resolve(data)
            } else  {
                reject(err)
            }

        })
    })
}

function start() {
    return readFile('file1.txt')
    .then((data)=>{
        console.log(data)
        return readFile('file3.txt')
    })
    .then((data)=>{
        console.log(data)
    })
    .catch((error)=>{
        console.log(error)
    })

}

// start()



