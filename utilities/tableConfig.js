const pokemonHeader = [{
    value: "name",
    headerColor: "cyan",
    color: "white",
    width: 20
},
{
    value: "id",
    color: "red",
    width: 10,
},
{
    value: "types",
    color: "yellow",
    width: 10,
}];

const commandsHeader = [{
    value: "command",
    headerColor: "cyan",
    color: "yellow",
    width: 20,
    alias: 'Command'
},
{
    value: "desc",
    headerColor: "cyan",
    color: "green",
    width: 40,
    alias: 'Description'
}];

const options = {
    borderStyle: "solid",
    borderColor: "red",
    headerAlign: "center",
    align: "center",
    color: "white",
    width: "90%"
}

module.exports = {pokemonHeader, commandsHeader, options};
