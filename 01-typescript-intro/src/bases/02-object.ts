export const pokemonIds=[1,20,30,34,66]
//pokemonIds.push('leonnnn');
//console.log(pokemonIds)

//export const pokemon={
  // id: number,
   //name: 'Bulbasar'   ///OBJETO LITERAL 

   
//}

interface Pokemon{
   id: number;
   name:string;
   age?:number;

}
/// cuando la clase que se esta importando no deja instanciarlas  const charmander=new Pokemon

export const bulbasaur:Pokemon={
     id: 1,
     name: 'Bulbasar'   ///OBJETO LITERAL 
     

   
}
export const charmander:Pokemon={
     id: 1,
     name: 'Charmanderr' 

}


export const pokemons:Pokemon[]= [];
//pokemons.push(1,'string', charmander)
pokemons.push(charmander, bulbasaur)
console.log(pokemons)