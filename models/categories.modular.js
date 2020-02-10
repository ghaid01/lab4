'use strict';

const Collection = require('../collection.js');
const CategoriesModel = require('./categories.model.js');

class Categories extends Collection{
  constructor(){
    super(CategoriesModel);
  }
}
module.exports = Categories;