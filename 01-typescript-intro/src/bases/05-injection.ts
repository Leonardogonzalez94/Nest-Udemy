import axios from 'axios';  //axios permite crear las peticiones
import { HttpAdapter, PokeApiAdapter, PokeApiFetchAdapter } from '../api/pokeApi.adapter';
import {Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';

export class Pokemon{

    get imageUrl(): string{
      return `https://pokemons.com/${this.id}.jpg`;   //this apunta a la instancia de la clase
 
    }
     constructor( ///METODO QUE SE UTILIZA CUANDO SE INSTANCIA UNA CLASE
         public readonly id:number,  //readonly no deja cambiar el id del atributo
         public name:string,
          ///inyeccion de dependencias
         private readonly http: HttpAdapter   ///una clase añadirle una dependencia (INYECTAR)
         ){} 
     
 
      scream(){
         console.log(`${this.name.toUpperCase()}!!!`);
      }
     speak(){       //nivel de acceso Private solo deja utilizar ese metodo dentro de esa misma clase
         console.log(`${this. name}, ${this.name}`)
      }

      async getMoves(): Promise<Move[]>{  //retorna una promesa de valor Move
       const data =await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
      console.log(data.moves)
       return data.moves;
    
      }
     
 }
 const pokeApiAxios=new PokeApiAdapter();
 const pokeApiFetch  = new PokeApiAdapter();
 export const charmander = new Pokemon( 4, 'Charmander', pokeApiAxios)
 charmander.getMoves();