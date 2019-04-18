var indexActive = 0;
var maxImg = 3;
var koef = -100;
var mover = document.querySelector(".mover");
var dotAll = Array.prototype.slice.call(document.querySelectorAll(".dot"), 0);

dotAll[0].style.background = "black";

document.addEventListener("click", function(e) {
    var _this = e.target;
    
    if(_this.matches(".next")) {
        (indexActive < maxImg - 1) ? indexActive++ : indexActive = 0;
        clearDots(indexActive);

        clearInterval(clearInt);

        clearInt = setInterval(function() {
            (indexActive < maxImg - 1) ? indexActive++ : indexActive = 0;
            clearDots(indexActive);
        }, 3000);
    } else if (_this.matches(".prev")) {
        (indexActive >= 1)  ? indexActive-- :  indexActive = maxImg - 1;
        clearDots(indexActive);

        clearInterval(clearInt);

        clearInt = setInterval(function() {
            (indexActive < maxImg - 1) ? indexActive++ : indexActive = 0;
            clearDots(indexActive);
        }, 3000);
    } else if (_this.matches(".dot")) {
        indexActive = _this.getAttribute("data-id") - 1;
        clearDots(indexActive);

        clearInterval(clearInt);

        clearInt = setInterval(function() {
            (indexActive < maxImg - 1) ? indexActive++ : indexActive = 0;
            clearDots(indexActive);
        }, 3000);
    }
});

function clearDots(indexActive) {
    mover.style.marginLeft = koef * indexActive + "%";

    for (var i = 0; i < dotAll.length; i++) {
        dotAll[i].style.background = "grey";
    }

    dotAll[indexActive].style.background = "black";
}

function clearInt() {
    clearInterval(clearInt);

    clearInt = setInterval(function() {
        (indexActive < maxImg - 1) ? indexActive++ : indexActive = 0;
        clearDots(indexActive);
    }, 3000);
}

clearInt();
