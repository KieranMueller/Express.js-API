import express from 'express'
import {
    createUser,
    deleteUserById,
    getAllUsers,
    getUserById,
    updateUser,
} from '../controllers/users.js'

const router = express.Router()

router.get('/', getAllUsers)

router.get('/:id', getUserById)

router.post('/', createUser)

router.patch('/:id', updateUser)

router.delete('/:id', deleteUserById)

export default router
