setInterval(current_time, 1000);

function current_time()
{
const date = new Date();
const time = date.toLocaleTimeString();
document.getElementById("time").innerHTML=time;
}
 const clickme=()=>{
const player1 = Math.floor((Math.random()*6)+1);
const playerdise=`image/dise${player1}.jpg`
document.querySelector('#image1').setAttribute("src", playerdise);

const player2 = Math.floor((Math.random()*6)+1);
const playerdise1=`image/dise${player2}.jpg`
document.querySelector('#image2').setAttribute("src", playerdise1);

if (player1>player2) {
    document.querySelector('#result').innerHTML="JINTUN is the winner!"
    
} else if(player1<player2){
    document.querySelector('#result').innerHTML="Hridoy is the Winner!"
}else{
    document.querySelector('#result').innerHTML="Match DRAW!"
}

}