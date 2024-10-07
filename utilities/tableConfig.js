const newHeader = [{
    value: 'attribute',
    headerColor: 'cyan',
    color:'yellow',
    width: 30,
    alias: 'ATTRIBUTE'
},
{
    value: 'value',
    headerColor: 'red',
    color:'green',
    width: 70,
    alias: 'VALUE'
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

module.exports = {newHeader, commandsHeader, options};
