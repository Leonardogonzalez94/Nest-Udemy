class NewPokemon{
    constructor(
        public readonly id: number,
        public name: string,
  
      ){}
      scream(){
        console.log(`NO QUIERO!!`)
  
      }
  
      talk(){
       console.log(`NO QUIERO HABLAR`)
  
      }
  


}

const MyDecorator = () =>{   //DECORADOR DE CLASE --->es una funcion 
    return (target: Function) =>{  ///target leer clase
       // console.log(target)
       return NewPokemon;
    }
}

@MyDecorator()
export class Pokemon{
    constructor(
      public readonly id: number,
      public name: string,

    ){}

    //METODOS
    scream(){
      console.log(`${this.name.toUpperCase()}!!`)

    }

    talk(){
     console.log(`${this.name}, ${this.name}!!`)

    }

}
export const charmander = new Pokemon(4, 'Charmander')   //instancia
charmander.scream();
charmander.talk();