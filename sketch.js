const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;

var arrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
  playerArcher = new PlayerArcher(
    340,
    playerBase.body.position.y - 180,
    120,
    120
  );

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArcher(
    width - 340,
    computerBase.body.position.y - 180,
    120,
    120
  );
  
  arrow = new PlayerArrow(playerArcher.body.position.x, playerArcher.body.position.y, 100, 10);
  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Título
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display()
  
  // if(keyCode === 32){
    // arrow.display()
     //arrow.shoot(playerArcher);
    //}

   // if(keyCode === 32){
     //arrow.shoot(playerArcher.body.angle);
   //}

   //essa ea função correta mas não a como atirar flechas então logo abaixo criei uma função que atira flechas com os mesmo valores essa
  // if(keyCode === 32){
    // arrow.display()
     //arrow.shoot(playerArcher.body.angle);
    //}

    //Professora eu não entendi o que o valor 32 fazia então acabei perdendo a paciencia  resolvi fazer eu mesmo a função
    if(keyCode == RIGHT_ARROW){
      arrow.display()
      arrow.shoot(playerArcher.body.angle);
     }




}



