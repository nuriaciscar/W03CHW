class PokemonService {
  urlAPI = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";

  constructor(urlApi) {
    this.urlAPI = urlApi;
  }
  async getPokemons() {
    const response = await fetch(this.urlAPI);
    const pokemons = await response.json();
    return pokemons;
  }
}

export default PokemonService;

//   async createPokemons(pokemon) {
//     const response = await fetch(this.urlAPI, {
//       method: "POST",
//       body: JSON.stringify(gentleman),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const newGentleman = await response.json();
//     return newGentleman;
//   }

//   updatePokemons(id, gentleman) {
//     //A una pai tengo que pasarle un string
//     fetch(`${this.urlAPI}${id}`, {
//       method: "PUT",
//       body: JSON.stringify(gentleman),
//       headers: {
//         "Content-Type": "application/json", //Lo que le mando es json
//       },
//     });
//   }

//   deletePokemons(id) {
//     const response = await fetch(`${this.urlAPI}${id}`, {
//       method: "DELETE",
//     });
//     if (response.ok) {
//       return true;
//     }
//     throw new Error("Can't delete this gentleman");
//   }
// }
