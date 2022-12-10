const {dataFetch} = require('./fetchData')

const apiResponse = async (req, res) => {
    const {id} = req.query

    try {
        if(id){
            return res.status(200).send(await dataFetch(id))
        } else {
            return res.status(404).send({
                message : 'ID was not send'
            })
        }
    } catch (error) {
        console.log({
            name : error.name,
            message : error.message,
            path: error.path
        });
    }
}

module.exports = {apiResponse}

