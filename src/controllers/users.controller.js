import usersMem from '../models/usersMem.js'

export async function getHTMLOnWire(req, res) {
    const users = await usersMem.findAll()
    res.render('form', {users})
}

export async function postHTMLOnWire(req, res) {
    const user = req.body
    console.log(user)
    await usersMem.create(user)
    res.redirect('/users')
    // const users = await usersMem.findAll()
    // res.send({ users })
}