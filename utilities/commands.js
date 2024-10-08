const Table = require('tty-table');
const { commandsHeader, options } = require('./tableConfig');

const listCommands = () => {
    const commands = [
        {
            'command': '--random',
            'desc': 'this command lets you to fetch any random pokemon details.'
        },
        {
            'command': '--random --l',
            'desc': 'this command lets you to fetch any random pokemon details in the long format.'
        },
        {
            'command': '<name/id>',
            'desc': 'the pokemon data will be fetched in short format with only minor details according to the name/id value given.'
        },
        {
            'command': '<name/id> --l',
            'desc': 'the pokemon data will be fetched in long format with all the details according to the name/id value given.'
        },
        {
            'command': '--t <typeName>',
            'desc': 'the `--t` flag followed by the type name gives you the details of the specified type.'
        },
        {
            'command': '--help',
            'desc': 'this command lists all the available features and commands to use them.'
        }
    ];

    const commandsList = Table(commandsHeader, commands, options).render()
    console.log(commandsList);
};

module.exports = { listCommands };