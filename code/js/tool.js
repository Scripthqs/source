function move(obj, at, tg, sp, cb) {

    clearInterval(obj.timer);
    var cv = parseInt(getComputedStyle(obj, null)[at]);
    if (cv > tg) {
        sp = -sp;
    }


    obj.timer = setInterval(function () {
        var ov = parseInt(getComputedStyle(obj, null)[at]);


        nv = ov + sp;

        if ((sp > 0 && nv > tg) || (sp < 0 && nv < tg)) {
            nv = tg;
        }


        obj.style[at] = nv + "px";

        if (nv === tg) {
            clearInterval(obj.timer);
            cb && cb();
        }

    }, 30);
}

function addClass(obj, cn) {
    if (!hasClass(obj, cn)) {
        obj.className += " " + cn;
    }
}
function hasClass(obj, cn) {
    // var reg = /\bb2\b/;
    var reg = new RegExp("\\b" + cn + "\\b");
    return reg.test(obj.className);
}
function removeClass(obj, cn) {
    var reg = new RegExp("\\b" + cn + "\\b");
    obj.className = obj.className.replace(reg, "")
}

function toggleClass(obj, cn) {
    if (hasClass(obj, cn)) {
        removeClass(obj, cn);
    } else {
        addClass(obj, cn);
    }
}