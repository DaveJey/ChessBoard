let flipped = false;
let size = 8;
let color1 = "white";
let color2 = "black";

function populateTable(){
    let table = document.getElementById("chesstable");
    table.innerHTML = "";
    let row = true;
    let inner = "";

    for(let i = 0; i < size; i++){
        inner += "<tr>";
        for(let i = 0; i < size; i++){
            if(row) inner += "<td class=\"odd\"></td> \n";
            else inner += "<td class=\"even\"></td> \n";
            row = !row
        }
        inner += "</tr>";
        row = !row
    }
    table.innerHTML = inner;
}

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
    if(flipped){
        for(let i = 0; i < document.getElementsByClassName("odd").length;i++)
            document.getElementsByClassName("odd").item(i).style.backgroundColor = color1;
        for(let i = 0; i < document.getElementsByClassName("even").length;i++)
            document.getElementsByClassName("even").item(i).style.backgroundColor = color2;
        flipped = false;
    }else{
        for(let i = 0; i < document.getElementsByClassName("odd").length;i++)
            document.getElementsByClassName("odd").item(i).style.backgroundColor = color2;
        for(let i = 0; i < document.getElementsByClassName("even").length;i++)
            document.getElementsByClassName("even").item(i).style.backgroundColor = color1;
        flipped = true;
    }
}

function error(data){
    alert(JSON.stringify(data));
}

window.onload = function(){
    populateTable();
    document.getElementById("flipButton").onclick = flipFunction;
    document.getElementById("randButton").onclick = randColors;
}