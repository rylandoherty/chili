
var listItem = ["Media","Upload"];
document.getElementById("listitem0").innerHTML = getListItem(0);
document.getElementById("listitem1").innerHTML = getListItem(1);
function list() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
	
}
function getListItem(num){
	
	return listItem[num];
}