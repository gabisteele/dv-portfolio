var table;
var minVal = 1000;
var maxVal = 1000;
var names;


function preload() {

  table = loadTable("data.csv", "csv", "header");

}


function setup() {
  createCanvas(640, 480);
  background(255);
  print(table.getRowCount() + " total rows in table");
  print(table.getColumnCount() + " total columns in table");

  print(table.getColumn("location_name"));

  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);

  greeting = createElement('h2', 'where would you like to reserve space?');
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);
  // names = getColumn(“location_name”);
}

function draw() {
 
}

function greet() {
  var name = input.value();
  greeting.html('hello '+name+'!');
  input.value('');

}
