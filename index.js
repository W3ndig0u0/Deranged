var audio = new Audio("Sounds/Breathing.mp3");
var text = new Array("welcome back, we missed you");
var i = 0;
var arrayLength = text[0].length;
var position = 0;
var loader = document.querySelector(".loader");

// !random hastighet
var randomnumber = Math.floor(Math.random() * (200 - 500 + 1)) + 500;

document.addEventListener('readystatechange', event => { 

  if (event.target.readyState === "complete") {
  // !starta när allt är redo

  write();
  loader.className += " hidden";
  console.log("Start");
}
});

function write()
{
 var sContents =  ' ';
 var destination = document.getElementById("title");
 destination.innerHTML = sContents + text[i].substring(0, position) + ",,,";
 if ( position++ == arrayLength ) {
  position = 0;
  i++;

  if ( i != text.length ) {
   arrayLength = text[i].length;
  }
} else {
  // !hastighet
   setTimeout("write()", randomnumber);
 }
 console.log(randomnumber);
}

function play()
{
  audio.loop = true;
  audio.play();
  if (audio.loop) {
    console.log("play loop");
  }
  else{
    console.log("no loop");
  }
}