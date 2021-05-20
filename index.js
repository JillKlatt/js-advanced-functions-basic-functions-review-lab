// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(symbol = "*") {

    return function(arg = "special") {
        return `You are ${symbol}${arg}${symbol}!`
    }
} 

const Calculator = {
    add: function(a,b){
        return a + b
    },
    subtract: function(a,b){
        return a-b
    },
    multiply: function(a,b){
        return a * b
    },
    divide: function(a,b){
        return a / b
    }
}

function actionApplyer(integer, ray){
    let a = integer
    
    for (let i = 0; i < ray.length; i++){
        a = ray[i](a)
    }
    return a
}