x = 0;
y = 0;
screenWidth = 0;
screenHeight = 0;
drawApple = "";
speakData = "";
toNumber = "";
apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 
 to_number = Number(content);
 if(Number.isInteger(to_number)){
  document.getElementById("status").innerHTML = "A maça começou a ser desenhada";
  drawApple = "set";
 }else{
  document.getElementById("status").innerHTML = "O número não foi reconhecido";
 }
 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "A fala foi reconhecida: " + content; 

}

function setup() {
  creen_Width = window.innerWidth;
  screen_Height = window.innerHeight;
    createCanvas(150, 150)
    canvas.position(150, 150)
  
}

function draw() {
  if(drawApple == "set")
  {
    document.getElementById("status").innerHTML = toNumber + " maçãs desenhadas";
    drawApple = "";
  }
  for(var i = 1; i<= to_number; i++){
    x = Math.floor(Math.random() * 700);
    y = Math.floor(Math.random() * 400);
    image(apple, x, y, 50, 50);
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);

    speakData = "";
}
function preload(){
  loadImage("apple");
}

