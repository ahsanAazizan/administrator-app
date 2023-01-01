const express = require('express')
const {
    home,
    add,
    edit,
} = require('../services/render')
const {
    createUser,
    getUser,
    updateUser,
    deleteUser,
} = require('../controllers/controller')

const router = express.Router()

/** 
* @description Root
* @method GET /
*/ 
router.route('/').get(home)

/** 
* @description Create new user
* @method GET /add-user
*/ 
router.route('/add-user').get(add)

/** 
* @description Edit an existing user
* @method GET /edit-user
*/ 
router.route('/edit-user').get(edit)

// http requests
router.route('/api/users').get(getUser).post(createUser)
router.route('/api/users/:id').put(updateUser).delete(deleteUser)

module.exports = router