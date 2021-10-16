class PokemonService {
  urlAPI = "https://pokeapi.co/api/v2/pokemon?offset=151&limit=151";

  async getPokemons() {
    //devuelve una promesa aque resuelve a un array de objetos
    const response = await fetch(this.urlAPI); //Para conectarme a la variable
    const gentlemen = await response.json();
    return gentlemen;
  }

  async creatGentleman(gentleman) {
    const response = await fetch(this.urlAPI, {
      method: "POST",
      body: JSON.stringify(gentleman),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newGentleman = await response.json();
    return newGentleman;
  }

  updateGentleman(id, gentleman) {
    //A una pai tengo que pasarle un string
    fetch(`${this.urlAPI}${id}`, {
      method: "PUT",
      body: JSON.stringify(gentleman),
      headers: {
        "Content-Type": "application/json", //Lo que le mando es json
      },
    });
  }

  deleteGentleman(id) {
    const response = await fetch(`${this.urlAPI}${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      return true;
    }
    throw new Error("Can't delete this gentleman");
  }
}
