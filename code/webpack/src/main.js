const {add,mul} = require("./js/mathModule.js")
console.log(add(1,2));
console.log(mul(2,3));
import {name,age} from "./js/info"
console.log(name);
console.log(age);

import {aaa} from "./js/aaa"
console.log(aaa);


require('./css/index.css')

// require('./css/aaa.less')


document.writeln('<h2>标题</h2>')



import Vue from 'vue'

// import App from './vue/app.js'

import App from './vue/App.vue'

new Vue({
    el: '#app',
    template: `<App></App>`,
    components: {
        App
    }
})


document.writeln('自动刷新，分离测试')