const { validationResult } = require('express-validator')
const validatorResult = require('express-validator')
exports.createBlogPost = (req, res, next) => {
    const title = req.body.title
    const image = req.body.image
    const body = req.body.body

    const errors = validationResult

    if (errors.isEmpty()) {
        const err = new Error('Invalid Value')
        err.errorStatus = 400
        err.data = errors.array
        throw err
    }

    const result = {
        message: 'Create Blog Post Success',
        data: {
            post_id: 1,
            title: "Title blog",
            image: "Image blog",
            description: "Description blog",
            created_at: "25/05/2021",
            author: {
                uid: 1,
                name: "Testing"
            }
        }
    }
    res.status(201).json()
}