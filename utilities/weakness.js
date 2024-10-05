const { default: axios } = require("axios");

const getWeakness = async (types) => {
    const weakTypes = [];
    for (const typeName of types) {
        await axios.get(`https://pokeapi.co/api/v2/type/${typeName}/`)
            .then((response) => { return response.json() })
            .then((response) => {
                for (const type of response.damage_relations.double_damage_from) {
                    weakTypes.push(type.name);
                }
            })
    }
    return weakTypes;
};

module.exports = {getWeakness};