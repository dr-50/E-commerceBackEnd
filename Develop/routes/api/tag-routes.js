const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [
      {
        model: Product,
        attributes: ['product_name','price','stock']
      }
    ]
  }).then((getAllTags) => {
    res.json(getAllTags);
});
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findAll({
    where: {id:req.params.id},
    include: [
      {
        model: Product,
        attributes: ['product_name','price','stock']
      }
    ]
  }).then((getTagID) => {
    res.json(getTagID);
});
});

router.post('/postTest', (req, res) => {

  Tag.create({
    tag_name: req.body.tag_name
  }).then((postTags) => {
    res.json(postTags);
  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({
    tag_name: req.body.tag_name,
    where: {id:req.params.id}
  })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {id:req.params.id}
  }).then((deleteTag) => {
   res.json({message: "tag deleted"});
  })
});

module.exports = router;
