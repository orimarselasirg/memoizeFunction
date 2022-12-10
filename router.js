const {Router} = require('express')
const router = Router()
const {apiResponse} = require('./controller')

router.get('/', apiResponse)

module.exports = router