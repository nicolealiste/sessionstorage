//se recuperan los datos que el usuario ingrese en los input
//setItem nguarda los datos
function saveData(){
	var name = document.getElementById("name").value;
	var clave = document.getElementById("clave").value;
	sessionStorage.setItem(name,clave);
}
// en la siguiente función un for recorre sessionStorage donde getItem recupera los datos guardados anteriormente
function recoverData(){
	for(var i = 0; i < sessionStorage.length; i++){
		var name = sessionStorage.key(i);
		var clave = sessionStorage.getItem(name);
		document.getElementById("data").innerHTML = "<div> Nombre : " + name + "<br/> Clave : " + clave + "</div>";
	}
}

function cleanData(){
	document.getElementById("data").innerHTML = "Limpiada vista. Los datos permanecen";	
}
function borrarTodo(){sessionStorage.clear(); recoverData();}
