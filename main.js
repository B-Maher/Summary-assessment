function addElement(){
	var value = document.getElementById("color").value.toLowerCase();
	var test =  value === "red" || value === "yellow" || value === "blue";
	if(test){
		document.getElementsByTagName("ul")[0].innerHTML += "<li class =" + value + ">" + document.getElementById("text").value + "</li>";
	}
}