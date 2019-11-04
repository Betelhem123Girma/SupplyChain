const mongoose = require('mongoose');


const CustomerSchema = mongoose.Schema({
  first_name:{type: String, required: true},
  last_name:{type: String, required: true},
  email: {type: String, required: true, unique: true},
//   asset:{type:mongoose.SchemaTypes.ObjectId,required:true,ref:"Asset"},
  password:  {type: String, required: true},
  date_created: {type: Date, required: true,  default: new Date()},
  date_modified: {type: Date, required: true, default: new Date()}
});


module.exports = mongoose.model('Customer', CustomerSchema);