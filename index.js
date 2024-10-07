const chalk = require('chalk');
const Table = require('tty-table');
const { newHeader, options } = require('./utilities/tableConfig');
const { listCommands } = require('./utilities/commands');
const { showNoArgsError } = require('./errors/noargs');
const { getDetails } = require('./utilities/getDetails');
const { getRandomPokemon } = require('./utilities/random');

const getPokemonData = async (arguments) => {
    if (arguments.length <= 2) {
        showNoArgsError();
        return;
    }

    switch (arguments[2]) {
        case '--help': listCommands();
            break;
        case '--random': try {
            const pokemonId = await getRandomPokemon();
            const details = await getDetails(arguments, pokemonId);
            const out = Table(newHeader, details, options).render()
            console.log(out);
        } catch (error) {
            console.log(chalk.red(error));
        }
            break;
        default: try {
            const details = await getDetails(arguments);
            const out = Table(newHeader, details, options).render()
            console.log(out);
        } catch (error) {
            console.log(chalk.green(error))
        }
            break;
    }
};

getPokemonData(process.argv);
