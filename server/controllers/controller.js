const User = require('../models/User')

function checkBody(req, res) {
    if (!req.body) {
        res.status(500).send({msg: "Request's body cant be empty"})
        return true
    }
}

// Create
const createUser = (req, res) => {
    // check request's body
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({msg: "Body cant be empty"})
        return
    }      

    // New user model
    const user = new User({
        username: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        active: req.body.active,
    })

    user.save(user)
    .then(msg => res.redirect('/'))
    .catch(error => res.status(500).send({msg: error.message || 'error ocurred while creating a user'}))

} 

// Read
const getUser = (req, res) => {
    if (req.query.id) {
        const id = req.query.id
        User.findById(id).then(msg => {
            if (msg) {
                res.send(msg)
            } else {
                res.status(404).send({ msg: `User with id ${id} not found`})
            }
        }).catch(error => res.status(500).send({msg: `error ocurred when getting user`}))
    } else {
        User.find()
        .then(users => res.send(users))
        .catch(error => res.status(500).send({msg: error.message || "error ocurred while getting users / a user"}))
    }
}

// Update
const updateUser = (req, res) => {
    // check request's body
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({msg: "Body cant be empty"})
        return
    }

    const id = req.params.id
    User.findByIdAndUpdate(id, req.body, {
        useFindAndModify: false
    })
    .then(msg => {
        if (!msg) {
            res.status(404).send({msg: `Cant update a user with id ${id}`})   
        }
    })
    .catch(error => res.status(500).send({msg: error.message || "error ocurred when updating a user"}))
}

// Delete
const deleteUser = (req, res) => {
    const id = req.params.id
    User.findByIdAndDelete(id).then(msg => {
        if (msg) {
            res.send({msg: "Deleted a user successfully"})
        } else {
            res.status(404).send({msg: `Cant delete a user with id ${id}`})
        }
    }).catch(error => res.status(500).send({msg: error.message || "error ocurred when deleting a user"}))
}

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser,
}