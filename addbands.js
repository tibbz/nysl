
//var bands = document.getElementById("bands");
//var addbands = document.createElement("li");
//addbands.appendChild(document.createTextNode(bands));
//list.appendChild(addbands);
//
//addBands(["Dire Straits", "Kansas", "Steely Dan"]);
//
//console.log(addbands);


//function bandf() {
//    var newband = document.createElement("li");
//    var textnode = document.createTextNode("bandf");
//    newband.appendChild(textnode);
//
//    var list = document.getElementById("bands");
//    list.insertBefore(newItem, list.childNodes[0]);
//}
//
//bandf(["dire straits",])


function bands() {
    var node = document.createElement("li");
    var textnode = document.createTextNode("Slipknot");
    node.appendChild(textnode);
    document.getElementById("bands").appendChild(node);
}