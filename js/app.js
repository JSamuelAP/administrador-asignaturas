import {
  agregarAsignatura,
  borrarOEditar,
  obtenerLocalStorage,
} from "./funciones.js";
import UI from "./UI.js";

(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI();
    ui.imprimirAsignaturas(obtenerLocalStorage());

    const formulario = document.querySelector("#formulario");
    formulario.addEventListener("submit", agregarAsignatura);

    const listado = document.querySelector("#lista-asignaturas");
    listado.addEventListener("click", borrarOEditar);
  });
})();
