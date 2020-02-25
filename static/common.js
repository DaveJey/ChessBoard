let flipped = false;
let color1 = "white";
let color2 = "black";

function flipFunction(){
    changeColors(color1, color2);
}

function randColors(){
    $.ajax({
        url: "/rand",
        type: "POST",
        contentType: "application/json;charset=UTF-8",
        success: function(response){
            color1 = response["color1"]
            color2 = response["color2"]
            changeColors(color1, color2);
        },
        error: error
    });
}

function changeColors(color1, color2){
    for(let i = 0; i < document.getElementsByClassName("box").length / 2; i++){
        if(flipped){
            document.getElementsByClassName("odd").item(i).style.backgroundColor = color1;
            document.getElementsByClassName("even").item(i).style.backgroundColor = color2;
        }else{
            document.getElementsByClassName("odd").item(i).style.backgroundColor = color2;
            document.getElementsByClassName("even").item(i).style.backgroundColor = color1;
        }
    }
    flipped = !flipped;
}

function error(data){
    alert(JSON.stringify(data));
}

window.onload = function(){
    document.getElementById("flipButton").onclick = flipFunction;
    document.getElementById("randButton").onclick = randColors;
}