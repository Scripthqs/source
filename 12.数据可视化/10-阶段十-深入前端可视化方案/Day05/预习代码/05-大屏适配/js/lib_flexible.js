(function flexible(window, document) {
  var docEl = document.documentElement;
  var dpr = window.devicePixelRatio || 1;

  function setBodyFontSize() {
    if (document.body) {
      // 1.body 字体大小默认为 16px
      document.body.style.fontSize = 16 * dpr + "px";
    } else {
      document.addEventListener("DOMContentLoaded", setBodyFontSize);
    }
  }
  setBodyFontSize();

  // 这里默认平均分成 10 等分(适用移动端)
  function setRemUnit() {
    // 2.这里改成了24，将网页分成 24 等份，这样每个 1rem 对应的为 80px
    // 3.为什么要分成 24份 ？ 目的是让缩放的细腻度更小，比如 0.1rem -> 8px
    var rem = docEl.clientWidth / 24;
    docEl.style.fontSize = rem + "px";
  }

  setRemUnit();

  window.addEventListener("resize", setRemUnit);
  window.addEventListener("pageshow", function (e) {
    if (e.persisted) {
      setRemUnit();
    }
  });

  if (dpr >= 2) {
    var fakeBody = document.createElement("body");
    var testElement = document.createElement("div");
    testElement.style.border = ".5px solid transparent";
    fakeBody.appendChild(testElement);
    docEl.appendChild(fakeBody);
    if (testElement.offsetHeight === 1) {
      docEl.classList.add("hairlines");
    }
    docEl.removeChild(fakeBody);
  }
})(window, document);
