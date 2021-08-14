/*
  Grupo 3 – Formularios: API Forms
	El gran libro de HTML, CSS3 y JavaScript: Cap. 6.4.
	Ejemplo de Formulario y Validación en tiempo real con la mayor cantidad de tipos de elementos input posibles.
  Pregunta para Cuestionario.
  

*/
function validar() {
  var ok = true;

  if (
    document.getElementById("txt1").value === "" ||
    document.getElementById("txt2").value === ""
  ) {
    alert("Introduzca todos los datos");
    ok = false;
  }

  return ok;
}

function comprobarSeleccionado() {
  var aRadios = document.getElementsByName("grupo1");
  var radioActivo = null;

  for (var contador = 0; contador < aRadios.length; contador++) {
    if (aRadios[contador].checked === true)
      radioActivo = aRadios[contador].value;
  }

  if (radioActivo == null) alert("Selecciona un radio button");
  else alert("radio: " + radioActivo);
}
