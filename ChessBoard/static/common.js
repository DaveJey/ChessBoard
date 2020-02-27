let flipped = false;
let color1 = "white";
let color2 = "black";


// Flips the colors of the alternating table tiles
function flipFunction() {
    changeColors(color1, color2);
}


// Calls the rand def in views.py to randomize the colors of the table tiles
function randColors() {
    $.ajax({
        url: "/rand",
        type: "POST",
        contentType: "application/json;charset=UTF-8",
        success: function (response) {
            color1 = response["color1"];
            color2 = response["color2"];
            changeColors(color1, color2);
        },
        error: error
    });
}


// Sets the colors of all the tiles in the table
function changeColors(color1, color2) {
    for (let i = 0; i < document.getElementsByClassName("box").length / 2; i++) {
        let odd = $(".odd");
        let even = $(".even");

        if (flipped) {
            odd[i].style.backgroundColor = color1;
            even[i].style.backgroundColor = color2;
        } else {
            odd[i].style.backgroundColor = color2;
            even[i].style.backgroundColor = color1;
        }
    }
    flipped = !flipped;
}


// Error function to determine source of errors
function error(data) {
    let e = document.getElementById("error");
    e.innerHTML = "";
    e.innerHTML = JSON.stringify(data);
}


window.onload = function () {
    document.getElementById("flipButton").onclick = flipFunction;
    document.getElementById("randButton").onclick = randColors;
}