import axios from 'axios';  //axios permite crear las peticiones
import {Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';

export class Pokemon{

    // public id: number;
     //public name: string;
    get imageUrl(): string{
      return `https://pokemons.com/${this.id}.jpg`;   //this apunta a la instancia de la clase
 
    }
     constructor(
         public readonly id:number,  //readonly no deja cambiar el id del atributo
         public name:string,
      //   public imagenUrl:string,
         ){} //metodo para crear instancias se inicializan valores
       //  this.id=id;
        // this.name=name;
          //  console.log('constructor llamado')
 
      scream(){
         console.log(`${this.name.toUpperCase()}!!!`);
      }
     speak(){       //nivel de acceso Private solo deja utilizar ese metodo dentro de esa misma clase
         console.log(`${this. name}, ${this.name}`)
      }

      async getMoves(): Promise<Move[]>{  //retorna una promesa de valor Move
       const { data} =await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
      console.log(data.moves)
       return data.moves;
    
      }
     
 }
 
 export const charmander = new Pokemon( 4, 'Charmander')
 //charmander.id=10;
 //charmander.name= 'Mew';
 //console.log(charmander)
 //charmander.scream()
 //charmander.speak()
 charmander.getMoves();
