//se recuperan los datos que el usuario ingrese en los input
//setItem nguarda los datos
function saveData(){
	var name = document.getElementById("name").value;
	var clave = document.getElementById("clave").value;
	sessionStorage.setItem(name,clave);
}
