const { fetchPokemon } = require('./utilities/pokemon');
const chalk = require('chalk');
const Table = require('tty-table');
const { pokemonHeader, options } = require('./utilities/tableConfig');
const { listCommands } = require('./utilities/commands');
const { showNoArgsError } = require('./errors/noargs');
// const inquirer = require('inquirer');
// import {inquirer} from 'inquirer';

const getPokemonData = async (arguments) => {
    if (arguments.length <= 2) {
        showNoArgsError();
        return;
    }

    switch (arguments[2]) {
        case '-help': listCommands();
            break;

        default: try {
            const pokemon = arguments[2];
            const pokemonData = await fetchPokemon(pokemon);
            const rows = [pokemonData];
            const out = Table(pokemonHeader, rows, options).render()
            console.log(out); //prints output
            } catch (error) {
            console.log(chalk.red(error))
            }
            break;
    }
};

getPokemonData(process.argv);
