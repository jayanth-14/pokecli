const { fetchPokemon } = require('./utilities/pokemon');
const chalk = require('chalk');
const Table = require('tty-table');
const {header, options} = require('./utilities/tableConfig');

const getPokemonData = async (arguments) => {
    if (arguments.length <= 2) {
        console.log(chalk.bgRed('No arguments passed. please pass all the required arguments.'));
        return;
    }
    try {
        const pokemon = arguments[2];
        const pokemonData = await fetchPokemon(pokemon);
        console.log(pokemonData);
        const rows = [pokemonData];
        const out = Table(header, rows, options).render()
        console.log(out); //prints output
    } catch (error) {
        console.log(chalk.red(error))
    }
};
getPokemonData(process.argv);
