export enum NivelEducativo{
    BACHILLERATO="Bachillerato",
    UNIVERSITARIO="Universitario",
    POSGRADO="Posgrado"
}


export class Aprendiz{
   //Metodo constructor de la clase
   constructor(public nombres:string,public apellidos:string,public avatar:string,public edad:number,public nivelEducativo:NivelEducativo)
   {
     
   }
}