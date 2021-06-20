const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    // include: {Product}
  }).then((getAllCategories) => {
    res.json(getAllCategories);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    //include: Product
  }).then((getCategoryID) => {
    res.json(getCategoryID);
  });
});

router.post('/', (req, res) => {
  // create a new category
Category.create({
  where: {
    category_nam: req.body.category_name
  }
}).then((postCategoryID) => {
  res.json(postCategoryID);
});
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
Category.update({
  where: {id: req.params.id}
}).then((updateCategoryID) => {
  res.json(updateCategoryID);
});
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {id: req.params.id}
  }).then((deleteCategoryID) => {
    res.json(deleteCategoryID);
  });
});

module.exports = router;
