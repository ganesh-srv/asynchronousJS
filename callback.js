function getData(cb){
    setTimeout(function(){
      let a  ="Executed!!"
      cb(a)

    },1000)
}

function cb(msg){
console.log(msg)
}

getData(cb)

function addition(a, b){
    return a+b
}
function subtraction(a, b){
    return a-b
}


function A(cb){
setTimeout(function(){
    console.log(cb(1000111023434330,7182927289891717))

}, 500)
}

function B(cb){
    setTimeout(function(){
        console.log(cb(1000111023434330,7182927289891717))
    }, 1500)

}

A(addition)
B(subtraction)








