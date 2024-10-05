const axios = require('axios');
const { error } = require('console');

const fetchPokemon = async (value = 1) => {
    let pokemonData = {};
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`);
        const newData = response.data;
        pokemonData.name = newData.name;
        pokemonData.id = newData.id;
        pokemonData.types = newData.types.map((typeObject) => { return typeObject.type.name });
        return pokemonData;
    }
    catch {
        return error;
    }
};

exports.fetchPokemon = fetchPokemon;