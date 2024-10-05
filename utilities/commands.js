const Table = require('tty-table');
const { commandsHeader, options } = require('./tableConfig');

const listCommands = () => {
    const commands = [
        {
            'command': 'random',
            'desc': 'this command lets you to fetch any random pokemon details.'
        },
        {
            'command': '<name/id>',
            'desc': 'the pokemon data will be fetched according to the name/id value given.'
        },
        {
            'command': '-t <typeName>',
            'desc': 'the `-t` flag followed by the type name gives you the details of the specified type.'
        },
        {
            'command': '-help',
            'desc': 'this command lists all the available features and commands to use them.'
        }
    ];

    const commandsList = Table(commandsHeader, commands, options).render()
    console.log(commandsList);
};

module.exports = {listCommands};