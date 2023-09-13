var integer = 10;
var decimal = 0.5;
var string = "Ivan";
var boolean = false;

console.log(typeof integer);
console.log(typeof decimal);
console.log(typeof string);
console.log(typeof boolean);

var godis = ["bilar", "kexchoklad", "marabou", "daim"];
console.log(godis);
console.log(godis[3]);
console.log(godis[godis.length - 1]);

function marabouIsBest() {
  alert(godis[2] + " Is the best candy");
}

document.querySelector(".myBtn").addEventListener("click", marabouIsBest);

function showUserName() {
  var name = prompt("Write me your name");

  document.querySelector(".text").innerHTML = "ditt namn är " + name;

  console.log(name);
}

document.querySelector(".nameBtn").addEventListener("click", showUserName);
