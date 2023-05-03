function addItem() {
    var input = document.getElementById("input");
    var item = input.value;
    var list = document.getElementById("list");
    var li = document.createElement("li");
    li.setAttribute("class","mydyn");
    li.setAttribute("onClick","removeLi");
    li.appendChild(document.createTextNode(item));
    list.appendChild(li);
    input.value = "";
  }
  
  function removeItem() {
    var list = document.getElementById("list");
    list.removeChild(list.lastChild);
  }
  function removeLi()
  {
    var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "mydyn";
  }
}
  }


  