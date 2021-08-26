export default class Asignatura {
  constructor(
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
  ) {
    this.nombre = nombre;
    this.horario = horario;
    this.semestre = semestre;
    this.aula = aula;
    this.reunion = reunion;
    this.docente = docente;
    this.correo = correo;
    this.notas = notas;
    this.color = color;
    this.id = id;
  }
}
