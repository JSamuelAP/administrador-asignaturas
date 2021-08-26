import Asignatura from "./Asignatura.js";
import UI from "./UI.js";

const nombreInput = document.querySelector("#nombre");
const horarioInput = document.querySelector("#horario");
const semestreInput = document.querySelector("#semestre");
const aulaInput = document.querySelector("#aula");
const reunionInput = document.querySelector("#reunion");
const docenteInput = document.querySelector("#docente");
const correoInput = document.querySelector("#correo");
const notasInput = document.querySelector("#notas");
const colorInput = document.querySelector("#color");
const formulario = document.querySelector("#formulario");
const enviarBtn = formulario.querySelector(".btn-primary");

let asignaturas = obtenerLocalStorage();
let editando = false;
let idEditando;
const ui = new UI();

export function agregarAsignatura(e) {
  e.preventDefault();

  let mensaje;

  const nombre = nombreInput.value;
  const horario = horarioInput.value;
  const semestre = semestreInput.value;
  const aula = aulaInput.value;
  const reunion = reunionInput.value;
  const docente = docenteInput.value;
  const correo = correoInput.value;
  const notas = notasInput.value;
  const color = colorInput.value;
  const id = Date.now();

  const asignatura = new Asignatura(
    nombre,
    horario,
    semestre,
    aula,
    reunion,
    docente,
    correo,
    notas,
    color,
    id
  );

  if (editando) {
    // Buscar el objeto que se esta editando y remplazarlo por el del formulario
    asignaturas = asignaturas.map((a) => (a.id == idEditando ? asignatura : a));
    editando = false;
    mensaje = "Asignatura modificada con éxito";
    enviarBtn.value = "Crear";
  } else {
    asignaturas.push(asignatura);
    mensaje = "Asignatura creada con éxito";
  }

  formulario.reset();
  agregarLocalStorage();
  ui.imprimirAsignaturas(obtenerLocalStorage());
  ui.mostrarAlerta(mensaje, "success");
}
export function borrarOEditar(e) {
  if (e.target.classList.contains("btn-danger")) {
    borrarAsignatura(e);
  } else if (e.target.classList.contains("btn-primary")) {
    editarAsigntarua(e);
  }
}
function borrarAsignatura(e) {
  const id = e.target.parentElement.parentElement.dataset.id;

  asignaturas = asignaturas.filter((a) => a.id != id);
  agregarLocalStorage();
  ui.imprimirAsignaturas(obtenerLocalStorage());
}
function editarAsigntarua(e) {
  const id = e.target.parentElement.parentElement.dataset.id;
  const asignatura = asignaturas.find((a) => a.id == id);

  cargarEdicion(asignatura);
  editando = true;
  idEditando = id;
  enviarBtn.value = "Guardar cambios";
}
function cargarEdicion(asignatura) {
  const {
    nombre,
    horario,
    semestre,
    aula,
    reunion,
    docente,
    correo,
    notas,
    color,
  } = asignatura;

  nombreInput.value = nombre;
  horarioInput.value = horario;
  semestreInput.value = semestre;
  aulaInput.value = aula;
  reunionInput.value = reunion;
  docenteInput.value = docente;
  correoInput.value = correo;
  notasInput.value = notas;
  colorInput.value = color;

  ui.mostrarAlerta("Los datos se cargaron al formulario", "info");
}

export function agregarLocalStorage() {
  localStorage.setItem("asignaturas", JSON.stringify(asignaturas));
}
export function obtenerLocalStorage() {
  return JSON.parse(localStorage.getItem("asignaturas")) || [];
}
