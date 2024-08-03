const router = require('express').Router();
const { Article } = require('../models')

router.get('/', async(req, res) => {
    try {
        const userArticles = await Article.findAll({
            where: {
                userId: req.session.user_id
            }
        })

        const articles = userArticles.map((article) => article.get({plain: true}))
        res.render('dashboard', {articles})
    } catch (error) {
       console.error(error)
       res.status(500).json() 
    }
})

router.get('/newarticle', async(req, res) => {
    try {
        res.render('newarticle')
    } catch (error) {
        console.error(error)
        res.status(500).json() 
    }
})

module.exports = router