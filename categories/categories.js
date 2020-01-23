'use strict';

const DataModel = require('../memory-data-model.js');

class Categories extends DataModel {
  constructor() {
    this.model = Model;
    super();
    this.schema = {
      id: { type:'string', required: true },
      name: { type: 'number', required: true },
      price: {  type: 'number',required: true},
      weight: {  type: 'number',required: true },
      quantity_in_stock: { required: true }
    };
  }


get(id){
  let response = id ? this.database.filter((record) => record.id === id) : this.database;
  return Promise.resolve(response);
}

create(record) {
  let item = new this.model(record);

  if (item) {
    this.database.push(item);
    return Promise.resolve(item);
  } else {
    return Promise.reject('invalid record');
  }
}
delete(id) {
  this.database= this.database.filter(record => record.id === id);
  Promise.resolve();
}
}



module.exports = Categories;