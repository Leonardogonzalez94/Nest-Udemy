function imprimirConsola(constructorClase: Function){

     console.log(constructorClase);
}


@imprimirConsola   //DECORADORES, añadir funcionalidades a la clase-
export class Xmen{          ///export para utilizar Xmen en otro segmento
   constructor(

    public nombre: string,
    public clave: string

  

   ){}

    imprimir(){
        console.log(`${ this.nombre } - ${ this.clave}`);
    }

   

}