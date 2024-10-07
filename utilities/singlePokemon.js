const axios = require('axios');
const { error } = require('console');
const {getWeakness}  = require('./weakness.js');

const fetchPokemon = async (value = 1) => {
    let pokemonData = {};
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`);
        const newData = response.data;
        pokemonData.name = newData.name;
        pokemonData.id = newData.id;
        pokemonData.types = newData.types.map((typeObject) => { return typeObject.type.name });
        pokemonData.moves = newData.moves.map((moveObject) => { return moveObject.move.name });
        pokemonData.abilities = newData.abilities.map((abilityObject) => { return abilityObject.ability.name });
        pokemonData.height = newData.height;
        pokemonData.weight = newData.weight;
        pokemonData.stats = newData.stats.map((statObject) => { return `${statObject.stat.name} : ${statObject.base_stat}`});
        pokemonData.weakness = await getWeakness([...pokemonData.types]);
        return pokemonData;
    }
    catch {
        return error;
    }
};

exports.fetchPokemon = fetchPokemon;