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
