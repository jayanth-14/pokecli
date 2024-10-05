const { fetchPokemon } = require('./pokemon');
const chalk = require('chalk');
const { pokemonHeader, options } = require('./tableConfig');
const Table = require('tty-table');

const displayPokemon = async(arguments) => {
    try {
        const pokemon = arguments[2];
        const pokemonData = await fetchPokemon(pokemon);
        const rows = [{name: pokemonData.name},{id: pokemonData.id}];
        const out = Table(pokemonHeader, rows, options).render();
        console.log(out); //prints output
        } catch (error) {
            console.log(chalk.red(error))
        }
}

module.exports = {displayPokemon};