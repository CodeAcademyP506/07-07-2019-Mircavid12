$(".correct").hide();
$(".wrong").hide();
$("img").hide();

var mydrop = document.getElementsByClassName('mydrop');

var flags = [
    { az: ["blue", "red", "green"] },
    { alman: ["black", "red", "yellow"] },
    { holland: ["firebrick","white","rgb(1, 1, 56)"] },
    { rus: ["white","blue","red"]},
    { tur: ["red","red","red"] }
]

var colors = document.getElementsByClassName("colors");

for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener("dragstart", myDragStart)
}

var dropZones = document.querySelectorAll(".dragDiv div");

for (let i = 0; i < dropZones.length; i++) {
    dropZones[i].addEventListener("dragenter", myDragEnter);
    dropZones[i].addEventListener("dragleave", myDragleave);
    dropZones[i].addEventListener("dragover", myDragOver);
    dropZones[i].addEventListener("drop", myDragDrop);
    
    
}


function myDragEnter(e) {
    e.preventDefault()
}

function myDragleave(e) {
    e.preventDefault()
}

function myDragOver(e) {
    e.preventDefault()
}


function myDragStart(e) {
    e.dataTransfer.setData("c", e.target.style.backgroundColor);
}

var count = 0;
var aze = 0;
var rus = 0;
var holland = 0;
var alman = 0;
var turk = 0;
function myDragDrop(e) {
    e.target.style.backgroundColor = e.dataTransfer.getData("c");

    if(mydrop[0].style.backgroundColor == flags[4].tur[0]  &&  mydrop[1].style.backgroundColor == flags[4].tur[1]  &&  mydrop[2].style.backgroundColor == flags[4].tur[2]){
        $(".tur").css("text-decoration","line-through");
        $(".correct").show();
        setTimeout(function(){ $(".correct").hide(); }, 2500);
        turk+=1;
        count++;
    }

    if(mydrop[0].style.backgroundColor == flags[3].rus[0]  &&  mydrop[1].style.backgroundColor == flags[3].rus[1]  &&  mydrop[2].style.backgroundColor == flags[3].rus[2]){
        $(".rus").css("text-decoration","line-through");
        $(".correct").show();
        setTimeout(function(){ $(".correct").hide(); }, 2500);
        count++;
        rus+=1;
    }

    if(mydrop[0].style.backgroundColor == flags[2].holland[0]  &&  mydrop[1].style.backgroundColor == flags[2].holland[1]  &&  mydrop[2].style.backgroundColor == flags[2].holland[2]){
        $(".holland").css("text-decoration","line-through");
        $(".correct").show();
        setTimeout(function(){ $(".correct").hide(); }, 2500);
        count++;
        holland+=1;
    }

    if(mydrop[0].style.backgroundColor == flags[1].alman[0]  &&  mydrop[1].style.backgroundColor == flags[1].alman[1]  &&  mydrop[2].style.backgroundColor == flags[1].alman[2]){
        $(".alman").css("text-decoration","line-through");
        $(".correct").show();
        setTimeout(function(){ $(".correct").hide(); }, 2500);
        count++;
        alman+=1;
    }

    if(mydrop[0].style.backgroundColor == flags[0].az[0]  &&  mydrop[1].style.backgroundColor == flags[0].az[1]  &&  mydrop[2].style.backgroundColor == flags[0].az[2]){
        $(".az").css("text-decoration","line-through");
        $(".correct").show();
        setTimeout(function(){ $(".correct").hide(); }, 2500);
        count++;
        aze+=1;
    }

    if(count==5 && aze==1 && rus==1 && turk==1 && alman==1 && holland==1){
        $("img").show();
    }
}
