let n = 0
const div = document.querySelector("div"),
    one = document.querySelector("img:nth-last-child(1)"),
    two = document.querySelector("img:nth-last-child(2)"),
    three = document.querySelector("img:nth-last-child(3)"),
    four = document.querySelector("img:nth-last-child(4)"),
    five = document.querySelector("img:nth-last-child(5)")


setInterval(function(){
    n++
    if(n == 1) {
        one.style.display = "block"
        two.style.display = "none"
        three.style.display = "none"
        four.style.display = "none"
        five.style.display = "none"
    } else if(n == 2) {
        one.style.display = "none"
        two.style.display = "block"
        three.style.display = "none"
        four.style.display = "none"
        five.style.display = "none"
    }else if(n == 3) {
        one.style.display = "none"
        two.style.display = "none"
        three.style.display = "block"
        four.style.display = "none"
        five.style.display = "none"
    }else if(n == 4) {
        one.style.display = "none"
        two.style.display = "none"
        three.style.display = "none"
        four.style.display = "block"
        five.style.display = "none"
    }else if(n == 5) {
        one.style.display = "none"
        two.style.display = "none"
        three.style.display = "none"
        four.style.display = "none"
        five.style.display = "block"
        n = 0
    }else {
        n = 0
    }
},800)

