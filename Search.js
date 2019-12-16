var i=0;
var mapss = [];
function addParagraph(){
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var li = document.createElement("li");
    var btn = document.createElement("BUTTON");
    var t = document.createTextNode("Delete");
    li.setAttribute('id',i+i);
    mapss[i] = candidate.value;
    console.log(mapss[i]);
    li.appendChild(document.createTextNode(candidate.value));
    btn.setAttribute("style","color:red;font-size:10px");
    btn.appendChild(t);
    btn.onclick  = function(){removeItem(i+i)};
    li.appendChild(btn);
    ul.appendChild(li);
    candidate.value = '';
    i++;
}
function removeItem(i){
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var item = document.getElementById(i+i);
    ul.removeChild(item);
}
