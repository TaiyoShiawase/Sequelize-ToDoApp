const user = require('../models/user')

exports.createUserAccount = async (req, res) => {
    let data = await user.model.create(
        req.query
    )

    console.log(data)
}

exports.getUserAccount = async (req, res) => {
    let data = await user.model.findByPk(
        req.query.id,
        {raw: true}
    )

    console.log(data)
}

exports.updateUserAccount = async (req, res) => {
    let data = await user.model.update(
        {password: 'password'},
        {
            where: {
                id: req.query.id
            }
        }
    )

    console.log(data)
}

exports.deleteUserAccount = async (req, res) => {
    let data = await user.model.destroy({
        where: {
            id: req.query.id
        }
    })

    console.log(data)
}

exports.login = async (req, res) => {
    let data = await user.model.findOne({
        where: {
            username: req.query.username,
        },
        raw:true
    })

    console.log(data)
}