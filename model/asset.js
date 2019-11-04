const mongoose = require('mongoose');


const AssetSchema = mongoose.Schema({
  asset_type:{type:String,required:true},
  customer:{type:mongoose.SchemaTypes.ObjectId,required:true,ref:"Customer"},
  price:  {type: Number, required: true},
  date_created: {type: Date, required: true,  default: new Date()},
  date_modified: {type: Date, required: true, default: new Date()}
});


module.exports = mongoose.model('Asset', AssetSchema);