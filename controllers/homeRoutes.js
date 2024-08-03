const router = require('express').Router();
const { User, Article } = require('../models')

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  const allArticles = await Article.findAll({
    include: [ User ]
  })
  const articleArray = allArticles.map((article) => article.get({plain: true}));
  res.render('homepage', { articleArray });
});

router.get( '/signup', async (req, res) => {
  try {
    res.render('signUp')
  } catch (error) {
    console.error(error)
    res.status(500).json()
  }
})

router.get( '/login', async (req, res) => {
  try {
    res.render('logIn')
  } catch (error) {
    console.error(error)
    res.status(500).json()
  }
})

module.exports = router;