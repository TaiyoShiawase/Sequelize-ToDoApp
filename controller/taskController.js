const task = require('../models/task')

exports.getTasks = async (req, res) => {
    let tasks = await task.model.findAll({
        where: {
            uuid: req.session.uuid,
        },
        raw:true,
    })

    res.render('home', {task: tasks})

    console.log(tasks)
}

exports.addTask = async (req, res) => {
    req.query.status = "Pending"
    req.query.uuid = req.session.uuid

    let added_task = await task.model.create(
        req.query
    )
       
    res.redirect('/tasks')
    console.log(added_task)
}

exports.finishedTask = async (req, res) => {
    let data = await task.model.update(
        {status: 'Finished'},
        {
            where: {
                id: req.query.id
            }
        }
    )

    res.redirect('/tasks')
    console.log(data)
}

exports.deleteFinishedTask = async (req, res) => {
    let data = await task.model.destroy({
        where: {
            id: req.query.id
        }
    })

    res.redirect('/tasks')
    console.log(data)
}

