const axios = require('axios');
const {memoize} = require('./memoizeFunction');

const url = 'https://rickandmortyapi.com/api/character/'

const dataFetch = memoize(
    async function data(id){
        const {data} = await axios.get(url + id)
        return await data
    }
)

module.exports = {dataFetch}

