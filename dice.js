var z=document.querySelector("button");
var h=document.querySelector("h1");
var i1=document.querySelector(".img1");
var i2=document.querySelector(".img2");
var source=["res/1.png","res/2.png","res/3.png","res/4.png","res/5.png","res/6.png"];
var a=new Audio("res/click.mp3");
var x,y;

function roll(){
    z.classList.add("select");
    setTimeout(function(){z.classList.remove("select");},100);
    x=Math.floor(Math.random()*6);
    y=Math.floor(Math.random()*6);
    a.play();
    i1.setAttribute("src",source[x]);
    i2.setAttribute("src",source[y]);

    if(x>y) h.innerHTML="Player 1 Wins";
    else if(x<y) h.innerHTML="Player 2 Wins";
    else h.innerHTML="Dice Tie";
}

z.addEventListener("click",roll);
document.addEventListener("keypress",function(k){
    if((k.key)==='r' || (k.key)==='R') roll();
});

// var button = document.querySelector("button");
//         // Get the result elements
//         var h = document.querySelector("h1");
//         var i1 = document.querySelector(".img1");
//         var i2 = document.querySelector(".img2");

//         // Add a click event listener to the button
//         button.addEventListener("click", function () {
//             var source = ["res/1.png", "res/2.png", "res/3.png", "res/4.png", "res/5.png", "res/6.png"];
            
//             // Generate random numbers for dice rolls
//             var x = Math.floor(Math.random() * 6);
//             var y = Math.floor(Math.random() * 6);

//             // Set the dice images based on the random numbers
//             i1.setAttribute("src", source[x]);
//             i2.setAttribute("src", source[y]);

//             // Check the results and display the winner
//             if (x > y) {
//                 h.innerHTML = "Player 1 Wins";
//             } else if (x < y) {
//                 h.innerHTML = "Player 2 Wins";
//             } else {
//                 h.innerHTML = "Dice Tie";
//             }
//         });