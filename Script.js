var a, b, c;open;

function IngresarVariables() {
  a = prompt("Ingrese el 1er valor 'a':");
  b = prompt("Ingrese el 2do valor 'b':"); 
}

function SumarVariables() {
  c = parseFloat(a) + parseFloat(b);
  ope=" + ";
}

function RestarVariables() {
  c = parseFloat(a) - parseFloat(b);
  ope=" - ";
}

function MultiplicarVariables() {
  c = parseFloat(a) * parseFloat(b);
  ope=" * ";
}

function DividirVariables() {
  if (parseFloat(b) !== 0) {
    c = parseFloat(a) / parseFloat(b);
    ope=" / ";
  } else {
    alert("Error: No se puede dividir entre cero.");
    ope=" Error ";
  }
}

function VerDatosIniciales() {
  document.getElementById("resultado").innerHTML = "Datos iniciales: a = " + a + ", b = " + b;
}

function VerOperacion() {
  document.getElementById("resultado").innerHTML += "<br>Operación: " + a + ope + b;
}

function VerResultado() {
  document.getElementById("resultado").innerHTML += "<br>Resultado: " + c;
}

function Impresion() {
  VerDatosIniciales();
  VerOperacion();
  VerResultado();
}