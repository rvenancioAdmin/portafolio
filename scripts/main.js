import { Aprendiz, NivelEducativo } from './aprendiz.js';
import { Curso, Institucion } from './curso.js';
var cursos = [
    new Curso("Diseño de páginas web con Bootstrap 4", 4, true, new Date("2024-07-17"), Institucion.COURSERA),
    new Curso("Fundamentos de TypeScript", 3, true, new Date("2024-07-17"), Institucion.COURSERA),
    new Curso("Fundamentos de la programación: Más allá de lo básico", 3, true, new Date("2024-02-24"), Institucion.LINKEDIN),
    new Curso("Fundamentos profesionales del desarrollo de software, por Microsoft y LinkedIn", 7, true, new Date("2024-02-24"), Institucion.LINKEDIN),
    new Curso("Introducción a las habilidades profesionales en el desarrollo de software", 2, true, new Date("2024-02-23"), Institucion.LINKEDIN),
    new Curso("Fundamentos esenciales de la programación", 3, true, new Date("2024-02-23"), Institucion.LINKEDIN),
    new Curso("Power BI para principiantes: Análisis de datos", 1, true, new Date("2024-01-18"), Institucion.LINKEDIN),
    new Curso("Power Query: Técnicas de tratamiento de datos esencial", 2, true, new Date("2024-01-18"), Institucion.LINKEDIN),
    new Curso("SQL Server para desarrollo y programación esencial", 3, true, new Date("2023-11-09"), Institucion.LINKEDIN),
    new Curso("Scrum: Antipatrones", 2, true, new Date("2023-11-07"), Institucion.LINKEDIN),
    new Curso("Scrum avanzado", 1, true, new Date("2023-11-07"), Institucion.LINKEDIN),
    new Curso("Domina JavaScript", 1, true, new Date("2023-10-25"), Institucion.LINKEDIN),
    new Curso("SQL Server para programación avanzado", 2, true, new Date("2023-02-18"), Institucion.LINKEDIN),
    new Curso("Fundamentos de la programación: Algoritmos", 3, true, new Date("2023-02-06"), Institucion.LINKEDIN),
    new Curso("C# esencial", 3, true, new Date("2023-01-13"), Institucion.LINKEDIN),
    new Curso("Pensamiento estratégico", 1, true, new Date("2023-01-08"), Institucion.LINKEDIN),
    new Curso("Desafío de programación: JavaScript básico", 2, true, new Date("2023-01-06"), Institucion.LINKEDIN),
    new Curso("C#: LINQ con C#", 2, true, new Date("2023-01-02"), Institucion.LINKEDIN),
    new Curso("Desarrollo de Base de datos SQL Server", 20, true, new Date("2022-12-26"), Institucion.TEKPROVIDER),
    new Curso("Consultas SQL Server", 20, true, new Date("2022-10-27"), Institucion.TEKPROVIDER)
];
export var ap = new Aprendiz("Ricardo", "Venancio Flores", "perfil.jpg", 38, NivelEducativo.UNIVERSITARIO, cursos);
var aprendizTable = document.getElementById("aprendiz");
var estadisticasTable = document.getElementById("estadisticas");
var cursosTable = document.getElementById("cursos");
var btnFiltro = document.getElementById("boton-filtro");
var textoBusqueda = document.getElementById("texto-busqueda");
btnFiltro.onclick = filtrarPorNombre;
mostrarDatosAprendiz(ap);
mostrarDatosEstadisicas(ap);
mostrarDatosCursosAprendiz(ap.cursos);
function filtrarPorNombre() {
    var text = textoBusqueda.value;
    text = (text == null) ? "" : text;
    cursosTable.getElementsByTagName("tbody")[0].remove();
    var cursosFiltrados = ap.cursos.filter(function (c) { return c.nombre.match(text); });
    mostrarDatosCursosAprendiz(cursosFiltrados);
}
function mostrarDatosAprendiz(aprendiz) {
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "\n        <tr><td colspan=2><img src=\"./".concat(aprendiz.avatar, "\" height=\"100\"></td></tr>\n        <tr><td>Nombres</td><td>").concat(aprendiz.nombres, "</td></tr>\n        <tr><td>Apellidos</td><td>").concat(aprendiz.apellidos, "</td></tr>\n        <tr><td>Nivel Educativo</td><td>").concat(aprendiz.nivelEducativo, "</td></tr>\n        <tr><td>Edad</td><td>").concat(aprendiz.edad, "</td></tr>");
    aprendizTable.appendChild(tbodyAprendiz);
}
;
function mostrarDatosEstadisicas(aprendiz) {
    var numeroCertificados = aprendiz.darCursosCertificados();
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td>Cursos Certificados: </td><td>".concat(numeroCertificados, "</td>");
    estadisticasTable.appendChild(trElement);
}
;
function mostrarDatosCursosAprendiz(cursos) {
    var tbodyCursos = document.createElement("tbody");
    for (var _i = 0, cursos_1 = cursos; _i < cursos_1.length; _i++) {
        var curso = cursos_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n            <td>".concat(curso.nombre, "</td>\n            <td>").concat(curso.horas, "</td>\n            <td>").concat(curso.institucion, "</td>\n            <td>").concat(curso.certificado ? 'si' : 'no', "</td>\n            <td>").concat(curso.Fecha.toDateString(), "</td>");
        tbodyCursos.appendChild(trElement);
    }
    cursosTable.appendChild(tbodyCursos);
}
;
