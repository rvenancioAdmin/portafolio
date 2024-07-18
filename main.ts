import {Aprendiz,NivelEducativo} from './aprendiz.js';
import { Curso,Institucion } from './curso.js';


let cursos=[
    new Curso("Curso de programación en SQL",20,false,new Date("2022-10-02"),Institucion.TEKPROVIDER)]

export const ap= new Aprendiz("Ricardo","Venancio Flores","perfil.jpg",39,NivelEducativo.UNIVERSITARIO,cursos);

let aprendizTable:HTMLElement=document.getElementById("aprendiz")!;
let estadisticasTable:HTMLElement=document.getElementById("estadisticas")!;
let cursosTable:HTMLElement=document.getElementById("cursos")!;
let btnFiltro:HTMLElement=document.getElementById("boton-filtro")!;
let textoBusqueda:HTMLInputElement=<HTMLInputElement>document.getElementById("texto-busqueda")!;

btnFiltro.onclick=filtrarPorNombre;

mostrarDatosAprendiz(ap);
mostrarDatosEstadisicas(ap);
mostrarDatosCursosAprendiz(ap.cursos);

function filtrarPorNombre():void{
    let text:string=textoBusqueda.value;
    text=(text==null)?"":text;
    cursosTable.getElementsByTagName("tbody")[0].remove();
    let cursosFiltrados:Curso[]=ap.cursos.filter(function(c){return c.nombre.match(text);})
    mostrarDatosCursosAprendiz(cursosFiltrados);
}

function mostrarDatosAprendiz(aprendiz:Aprendiz):void{
    let tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML=`
        <tr><td colspan=2><img src="./${aprendiz.avatar}" height="100"></td></tr>
        <tr><td>Nombres</td><td>${aprendiz.nombres}</td></tr>
        <tr><td>Apellidos</td><td>${aprendiz.apellidos}</td></tr>
        <tr><td>Nivel Educativo</td><td>${aprendiz.nivelEducativo}</td></tr>
        <tr><td>Edad</td><td>${aprendiz.edad}</td></tr>`;
        aprendizTable.appendChild(tbodyAprendiz);
};

function mostrarDatosEstadisicas(aprendiz:Aprendiz):void{
    let numeroCertificados:number=aprendiz.darCursosCertificados();
    let trElement:HTMLElement=document.createElement("tr");
    trElement.innerHTML=`<td>Cursos Certificados: </td><td>${numeroCertificados}</td>`    
    estadisticasTable.appendChild(trElement);
}


function mostrarDatosCursosAprendiz(cursos:Curso[]):void{
    let tbodyCursos = document.createElement("tbody");
    for(let curso of cursos)
        {
            let trElement:HTMLElement=document.createElement("tr");
            trElement.innerHTML=`
            <td>${curso.nombre}</td>
            <td>${curso.horas}</td>
            <td>${curso.institucion}</td>
            <td>${curso.certificado}</td>
            <td>${curso.Fecha}</td>`
            tbodyCursos.appendChild(trElement);
        }
        cursosTable.appendChild(tbodyCursos);
}
