var computer_img = document.querySelector('.computer-img');
var user_img = document.querySelector('.img');
var snake = document.querySelector('.snake');
var water = document.querySelector('.water');
var gun = document.querySelector('.gun');
var point = document.querySelector('.point');
var h1 = document.querySelector('.h1');
var h2 = document.querySelector('.h2');
var h3 = document.querySelector('.h3');
var main = document.querySelector('.main')
var button = document.querySelector('.button')
var game_over = document.querySelector('.game-over')
window.addEventListener('load', () => {
    h1.style.visibility = "visible"
    h2.style.visibility = "visible"
    h3.style.visibility = "visible"
})
var random;
setInterval(() => {
    random = Math.random() * 3;
}, 100);
var snake = () => {
    if (h1.style.visibility == "hidden" && h2.style.visibility == "hidden" && h3.style.visibility == "hidden") {
        main.style.display = "none"
        button.style.display = "none"
        point.style.display = "none"
        game_over.innerHTML = "Game Over"
    }
    user_img.src = "img/snake-png.webp"
    user_img.style.visibility = "visible"
    if (random <= 1) {
        computer_img.src = "img/snake-png.webp"
        computer_img.style.visibility = "visible"
        if (user_img.src == computer_img.src) {
            point.innerHTML = "Tie"
        }
    }
    else if (random <= 2 && random > 1) {
        computer_img.src = "img/waters.png"
        computer_img.style.visibility = "visible"
        if (user_img.src != computer_img.src) {
            point.innerHTML = "You Win"

        }

    }
    else if (random > 2) {
        computer_img.src = "img/gun-png-4.png"
        computer_img.style.visibility = "visible"
        if (user_img.src != computer_img.src) {
            point.innerHTML = "You Lose"
            if (h3.style.visibility == "visible" && h2.style.visibility == "visible" && h1.style.visibility == "visible") {
                h3.style.visibility = "hidden";
            }
            else if (h2.style.visibility == "visible" && h1.style.visibility == "visible") {
                h2.style.visibility = "hidden"
            }
            else if (h1.style.visibility = "visible") {
                h1.style.visibility = "hidden"
            }
        }

    }
}
var water = () => {
    if (h1.style.visibility == "hidden" && h2.style.visibility == "hidden" && h3.style.visibility == "hidden") {
        main.style.display = "none"
        button.style.display = "none"
        point.style.display = "none"
        game_over.innerHTML = "Game Over"
    }
    user_img.src = "img/waters.png"
    user_img.style.visibility = "visible"
    if (random <= 1) {
        computer_img.src = "img/snake-png.webp"
        computer_img.style.visibility = "visible"

        if (user_img.src != computer_img.src) {
            point.innerHTML = "You Lose"
            if (h3.style.visibility == "visible" && h2.style.visibility == "visible" && h1.style.visibility == "visible") {
                h3.style.visibility = "hidden";
            }
            else if (h2.style.visibility == "visible" && h1.style.visibility == "visible") {
                h2.style.visibility = "hidden"
            }
            else {
                h1.style.visibility = "hidden"
            }
        }

    }
    else if (random <= 2 && random > 1) {
        computer_img.src = "img/waters.png"
        computer_img.style.visibility = "visible"
        if (user_img.src == computer_img.src) {
            point.innerHTML = "Tie"
        }

    }
    else {
        computer_img.src = "img/gun-png-4.png"
        computer_img.style.visibility = "visible"
        if (user_img.src != computer_img.src) {
            point.innerHTML = "You Win"
        }

    }
}
var gun = () => {
    if (h1.style.visibility == "hidden" && h2.style.visibility == "hidden" && h3.style.visibility == "hidden") {
        main.style.display = "none"
        button.style.display = "none"
        point.style.display = "none"
        game_over.innerHTML = "Game Over"
    }
    user_img.src = "img/gun-png-4.png"
    user_img.style.visibility = "visible"
    if (random <= 1) {
        computer_img.src = "img/snake-png.webp"
        computer_img.style.visibility = "visible"
        if (user_img.src != computer_img.src) {
            point.innerHTML = "You Win"
        }

    }
    else if (random <= 2 && random > 1) {
        computer_img.src = "img/waters.png"
        computer_img.style.visibility = "visible"

        if (user_img.src != computer_img.src) {
            point.innerHTML = "You Lose"
            if (h3.style.visibility == "visible" && h2.style.visibility == "visible" && h1.style.visibility == "visible") {
                h3.style.visibility = "hidden";
            }
            else if (h2.style.visibility == "visible" && h1.style.visibility == "visible") {
                h2.style.visibility = "hidden"
            }
            else {
                h1.style.visibility = "hidden"
            }
        }
        if (h1.style.visibility == "hidden" && h2.style.visibility == "hidden" && h3.style.visibility == "hidden") {
            point.innerHTML = "all lives end"
        }

    }
    else {
        computer_img.src = "img/gun-png-4.png"
        computer_img.style.visibility = "visible"
        if (user_img.src == computer_img.src) {
            point.innerHTML = "Tie"
        }

    }
}

