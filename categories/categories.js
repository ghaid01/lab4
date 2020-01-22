'use strict';

const DataModel = require('../memory-data-model.js');

class Categories extends DataModel {
  constructor() {
    super();
    this.schema = {
      id: { type:'string', required: true },
      name: { type: 'number', required: true },
      price: {  type: 'number',required: true},
      weight: {  type: 'number',required: true },
      quantity_in_stock: { required: true }
    };
  }
}

module.exports = Categories;