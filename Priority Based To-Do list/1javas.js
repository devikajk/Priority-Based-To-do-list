const higharr = [];
const medarr = [];
const lowarr = [];
var u = 0;
var w = 0;
var y = 0;

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("Title1").value;
  var t = document.createTextNode(inputValue);
  var e = document.getElementById("pri");
  var p = e.value;
  var q = document.createTextNode(p);

  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("Title1").value = "";

  console.log(p);

  if (p === "High"){
    li.style.backgroundColor = "#ff1a1a";
    li.className += "high";
    higharr[u++] = inputValue;
  }else if (p === "Medium"){
    li.style.backgroundColor = "#FFBF00";
    li.className += "med";
    medarr[w++] = inputValue;
  }else{
    li.style.backgroundColor = "#48ab3b";
    li.className += "low";
    lowarr[y++] = inputValue;
  }

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  var taskp = document.createElement("SPAN");
  taskp.className = "tpri";
  taskp.appendChild(q);
  li.appendChild(taskp);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

function showH(){

  while( plist.firstChild ){
  plist.removeChild( plist.firstChild );
  }
  
  var h = document.getElementsByClassName('high');
  var a;
  for (a = 0; a < h.length; a++) {
    b = higharr[a];
    var pli = document.createElement("li");
    var valuenode = document.createTextNode(b);
    pli.appendChild(valuenode);
    document.getElementById("plist").appendChild(pli);
  }
  
  }
  
  function showM(){
  
    while( plist.firstChild ){
  plist.removeChild( plist.firstChild );
  }
  
  var h = document.getElementsByClassName('med');
  var a;
  for (a = 0; a < h.length; a++) {
    b = medarr[a];
    var pli = document.createElement("li");
    var valuenode = document.createTextNode(b);
    pli.appendChild(valuenode);
    document.getElementById("plist").appendChild(pli);
  }
  
  
  }
  
  function showL(){
  
    while( plist.firstChild ){
  plist.removeChild( plist.firstChild );
  }
  
  var h = document.getElementsByClassName('low');
  var a;
  for (a = 0; a < h.length; a++) {
    b = lowarr[a];
    var pli = document.createElement("li");
    var valuenode = document.createTextNode(b);
    pli.appendChild(valuenode);
    document.getElementById("plist").appendChild(pli);
  }
  
  
  }
  