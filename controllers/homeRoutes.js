const router = require('express').Router();

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('homepage');
});

router.get( '/signup', async (req, res) => {
  try {
    res.render('signUp')
  } catch (error) {
    console.error(error)
    res.status(500).json()
  }
})

module.exports = router;