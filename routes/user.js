const express = require('express')
const Post = require('../models/Post')
const router = express.Router()
const postUser = require('../models/Post')

// get all user
router.get('/', async (req, res) => {
    try {
        const posts = await postUser.find()
        res.json(posts)
    } catch (err) {
        res.json({ message: err })
    }
})

// add new user
router.post('/', async (req, res) => {
    console.log(req.body);
    const post = new postUser({
        name: req.body.name,
        address: req.body.address,
        country: req.body.country,
        phone_number: req.body.phone_number,
        job_title: req.body.job_title,
        status: req.body.status
    });

    try {
        const newUser = await post.save()
        res.json(newUser);
    } catch (err) {
        res.json({ message: err });
    }

})


//find, edit, delete
router
    .route('/:id')
    .get(async (req, res) => {
        try {
            const userById = await postUser.findById(req.params.id);
            res.json(userById)
        } catch (err) {
            res.json({ message: err })
        }
    })
    .patch(async (req, res) => {
        try {
            const updatedPost = await postUser.updateOne({ _id: req.params.id }, {
                $set: {
                    name: req.body.name,
                    address: req.body.address,
                    country: req.body.country,
                    phone_number: req.body.phone_number,
                    job_title: req.body.job_title,
                    status: req.body.status
                }
            });
            res.json(updatedPost)
        } catch (err) {
            res.json({ message: err })
        }
    })
    .delete(async (req, res) => {
        try {
            const removeUser = await postUser.deleteOne({ _id: req.params.id });
            res.json(removeUser)
        } catch (err) {
            res.json({ message: err })
        }
    })

module.exports = router