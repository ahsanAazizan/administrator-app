// All the render 'res.render' functions
const axios = require('axios')
require('dotenv').config()
const port = process.env.PORT


const home = (req, res) => {
    axios.get(`http://localhost:${port}/api/users`)
    .then(function (response) {
        res.render('index', {users: response.data})
    })
    .catch(error => res.send(error.message))
}

const add = (req, res) => {
    res.render('add')
}

const edit = (req, res) => {
    axios.get(`http://localhost:${port}/api/users`, { params : { id : req.query.id }})
    .then(function(response) {
        res.render('edit', {user: response.data})
    }).catch(error => res.send(error.message))
}

module.exports = {
    home,
    add,
    edit,
}