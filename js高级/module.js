// function hqs(){
//     var msg ='abcdeXYZ'
//     function fn1() {
//         console.log(msg.toUpperCase());
//     }
//     function fn2() {
//         console.log(msg.toLowerCase());
//     }
//     return {
//         fn1:fn1,
//         fn2:fn2
//     }
// }



(function(){
    var msg ='abcdeXYZ'
    function fn1() {
        console.log(msg.toUpperCase());
    }
    function fn2() {
        console.log(msg.toLowerCase());
    }
    window.hqs = {
        fn1:fn1,
        fn2:fn2
    }
})()