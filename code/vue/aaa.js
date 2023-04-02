// var obj = {}
// var name = 'hahah'
// var age = 19
// function sum(a,b){
//     return a+b
// }
// var f = true
// if(f){
//     console.log(sum(1,2));
// }

// module.exports = {
//     flag,sum,name,age
// }


let name = 'aaa'
let age = 18
let f = true
function fun(a,b){
    return a+b
}
if(f){
    console.log(fun(1,2));
}
export {
    name,age,f,fun
}

export let n1 = 1000;
export let obj = {}
export function fn1 (x,y){
    return x-y
}
export class Person{
    run(){
        console.log('jkasdfjkdjks');
    }
}

export default function(argument){
    console.log('default fun');
    console.log(argument);
}