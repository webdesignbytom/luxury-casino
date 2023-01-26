const express = require('express')

const router = express.Router();
const {
    getAllUsers,
    registerNewUser,
    deleteUser
} = require('../controllers/users')

router.get('/', getAllUsers)
router.post('/register', registerNewUser)
router.delete('/:id', deleteUser)

module.exports = router