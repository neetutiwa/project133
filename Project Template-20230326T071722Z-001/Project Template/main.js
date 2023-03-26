x = 0;
y = 0;

draw_apple = "";
function preload() {
  img=loadImage('apple.png');
}

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

  to_number = Number(content);
  if(Number.isInteger(to_number))

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;
 canvas = createCanvas(150,150);
}

function draw() {
  if(draw_apple == "set")
  for(var i = 1; i <= to_number; i++)
 y = Math.floor(Math.random() * 400 );
x = Math.floor(Math.random() *700);
image (apple, x, y, 50, 50);
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
