// let {flag,sum} = require('aaa.js')

// //等同于

// let aaa = require('aaa.js')
// let flag = aaa.flag
// let sum = aaa.sum
import * as aaa from "./aaa.js"
console.log(aaa.f);
import {f,fun,n1,obj,fn1,Person} from "./aaa.js"
console.log(f);
console.log(fun(2,4));
console.log(n1);
console.log(obj);
console.log(fn1);
console.log(Person);
const p = new Person()
p.run()
console.log(p);
import hqs from './aaa.js'
console.log(hqs);
hqs()






