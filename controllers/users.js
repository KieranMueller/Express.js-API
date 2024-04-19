import { v4 as uuid } from 'uuid'

let users = [
    {
        id: '1',
        firstName: 'Jasper',
        lastName: 'Mueller',
        age: 4,
    },
    {
        id: '2',
        firstName: 'Belfry',
        lastName: 'Mueller',
        age: 16,
    },
]

export const getAllUsers = (req, res) => {
    res.send(users)
}

export const getUserById = (req, res) => {
    const { id } = req.params
    const user = users.find(user => user.id === id)
    res.send(user ? user : 'unable to find user with id ' + id)
}

export const createUser = (req, res) => {
    const user = req.body
    users.push({ ...user, id: uuid() })
    res.send(users[users.length - 1])
}

export const updateUser = (req, res) => {
    const { id } = req.params
    const { firstName, lastName, age } = req.body
    const user = users.find(user => user.id === id)
    if (firstName) user.firstName = firstName
    if (lastName) user.lastName = lastName
    if (age) user.age = age
    res.send(user)
}

export const deleteUserById = (req, res) => {
    const { id } = req.params
    let userToDelete
    users.forEach(user => {
        if (user.id === id) userToDelete = user
    })
    users = users.filter(user => user.id !== id)
    res.send(userToDelete)
}
