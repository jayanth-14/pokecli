const { default: axios, get } = require('axios');

const getRandomPokemon = async () => {
    const count = await axios.get('https://pokeapi.co/api/v2/pokemon/')
                            .then((response) => {return response.data})
                            .then((response) => {return response.count});
    const randomId = Math.floor(Math.random(1)*count);
    return randomId;
};

module.exports = {getRandomPokemon};