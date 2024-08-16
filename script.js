const btn = document.getElementById("btn");

const colors = ["red", "white", "green", "blue", "yellow", "purple", "orange"]

let currentIndex = 0;
function generateColor() {
    document.body.style.backgroundColor = colors[currentIndex];
    currentIndex++

    if(currentIndex >= colors.length){
        currentIndex = 0;
    }
}

btn.addEventListener("click", generateColor);
