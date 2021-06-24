const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name:{
      type:String,
      required:true,
      unique:true,
  }
},{timestamps:true});

module.exports =mongodb.model('Category',CategorySchema)