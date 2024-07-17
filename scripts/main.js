import { Aprendiz, NivelEducativo } from './aprendiz.js';
import { Curso, Institucion } from './curso.js';
var cursos = [
    new Curso("Curso de programación en SQL", 20, false, new Date("2022-10-02"), Institucion.TEKPROVIDER)
];
export var ap = new Aprendiz("Ricardo", "Venancio Flores", "perfil.jpg", 39, NivelEducativo.UNIVERSITARIO, cursos);
var aprendizTable = document.getElementById("aprendiz");
var estadisticasTable = document.getElementById("estadisticas");
var cursosTable = document.getElementById("cursos");
mostrarDatosAprendiz(ap);
mostrarDatosEstadisicas(ap);
mostrarDatosCursosAprendiz(ap);
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
function mostrarDatosCursosAprendiz(aprendiz) {
    var tbodyCursos = document.createElement("tbody");
    for (var _i = 0, _a = aprendiz.cursos; _i < _a.length; _i++) {
        var curso = _a[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n            <td>".concat(curso.nombre, "</td>\n            <td>").concat(curso.horas, "</td\n            <td>").concat(curso.institucion, "</td>\n            <td>").concat(curso.certificado, "</td>\n            <td>").concat(curso.Fecha, "</td>");
        tbodyCursos.appendChild(trElement);
    }
    cursosTable.appendChild(tbodyCursos);
}
