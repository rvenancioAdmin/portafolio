export var Institucion;
(function (Institucion) {
    Institucion["UDEMY"] = "Udemy";
    Institucion["LINKEDIN"] = "LinkedIn";
    Institucion["COURSERA"] = "Coursera";
    Institucion["TEKPROVIDER"] = "Tek-provider";
})(Institucion || (Institucion = {}));
var Curso = /** @class */ (function () {
    function Curso(nombre, horas, certificado, Fecha, institucion) {
        this.nombre = nombre;
        this.horas = horas;
        this.certificado = certificado;
        this.Fecha = Fecha;
        this.institucion = institucion;
    }
    return Curso;
}());
export { Curso };
