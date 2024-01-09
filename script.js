document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formulario");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombreInput = document.getElementById("nombre").value;
    const numeroInput = document.getElementById("numero").value;
    const fechaMesInput = document.getElementById("expiracion_month").value;
    const fechaAñoInput = document.getElementById("expiracion_year").value;
    const codigoInput = document.getElementById("cvc").value;

    const nombre = document.getElementById("name_card");
    const numero = document.getElementById("number_card");
    const fechaMes = document.getElementById("date_card_mes");
    const fechaAño = document.getElementById("date_card_año");
    const codigo = document.getElementById("cvc_card");

    const form = document.querySelector(".body_form");
    const sectionGracias = document.querySelector(".section_gracias");

    nombre.innerHTML = nombreInput;
    numero.innerHTML = numeroInput;
    fechaMes.innerHTML = fechaMesInput;
    fechaAño.innerHTML = fechaAñoInput;
    codigo.innerHTML = codigoInput;

    form.style.display = "none";
    sectionGracias.style.display = "flex";

    console.log(
      nombreInput,
      numeroInput,
      fechaMesInput,
      fechaAñoInput,
      codigoInput
    );
  });
});

const agregarEspacio = (e) =>
  Array.from(e).reduce((acc, t, i) => {
    if (i > 0 && i % 4 == 0) acc += " ";
    acc += t;
    return acc;
  });

const espacio = (_) =>
  (event.target.value = agregarEspacio(event.target.value.replaceAll(" ", "")));
