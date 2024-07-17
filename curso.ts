export enum Institucion{
    UDEMY="Udemy",
    LINKEDIN="LinkedIn",
    COURSERA="Coursera",
    TEKPROVIDER="Tek-provider"
}

export class Curso{
    constructor(
        public nombre: string,
        public horas: number,
        public certificado:boolean,
        public Fecha:Date,
        public institucion:Institucion
    ){

    }
}