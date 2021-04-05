
document.addEventListener('readystatechange', event => { 

  if (event.target.readyState === "complete") {
  // !Starta funktionen när sidan startar

  write();
  console.log("Start");
}
});

var text = new Array("welcome back, we missed you,");
var i = 0;
var arrayLength = text[0].length;
var position = 0;
randomnumber = Math.floor(Math.random() * (200 - 500 + 1)) + 500;

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
   setTimeout("write()", randomnumber);
 }
 console.log(randomnumber);
}