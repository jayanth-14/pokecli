
const getRandomPokemon = () => {
    const count = 10277;
    const randomId = Math.floor(Math.random() * count) + 1;
    return randomId;
};

module.exports = {getRandomPokemon};