const {fetchPokemon} = require('./singlePokemon');
const getDetails = async (arguments) => {
    const pokemon = arguments[2];
    const pokemonData = await fetchPokemon(pokemon);
    const details = [
        { attribute: 'name', value: pokemonData.name },
        { attribute: 'id', value: pokemonData.id }
    ];
    if (arguments[3] !== '--l') {
        return details;
    }
    details.push(
    { attribute: 'types', value: pokemonData.types },
    { attribute: 'height', value: pokemonData.height },
    { attribute: 'weight', value: pokemonData.weight },
    { attribute: 'stats', value: pokemonData.stats },
    { attribute: 'moves', value: pokemonData.moves },
    { attribute: 'abilities', value: pokemonData.abilities },
    { attribute: 'weakness', value: pokemonData.weakness });
    return details;
};

module.exports = {getDetails};
