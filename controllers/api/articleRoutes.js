const router = require('express').Router();
const Article = require('../../models/Article');

router.get('/', async (req, res) => {
  const articleData = await Article.findAll();

  return res.json(articleData);
});

router.post('/', async (req, res) => {
  try {
    const articleData = await Article.create(req.body);

  return res.json(articleData);
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
  
});

router.get('/:id', async (req, res) => {
  const articleData = await Article.findByPk(req.params.id);

  return res.json(articleData);
});

router.put('/:id', async (req, res) => {
  const articleData = await Article.update(
    {
      title: req.body.title,
      author: req.body.author,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  return res.json(articleData);
});

router.delete('/:id', async (req, res) => {
  const articleData = await Article.destroy({
    where: {
      id: req.params.id,
    },
  });

  return res.json(articleData);
});

module.exports = router;