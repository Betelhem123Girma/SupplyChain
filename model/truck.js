const mongoose = require('mongoose');


const TruckSchema = mongoose.Schema({
  truck_plate:{type: String, required: true},
  asset:{type:mongoose.SchemaTypes.ObjectId,required:true,ref:"Asset"},
  date_created: {type: Date, required: true,  default: new Date()},
  date_modified: {type: Date, required: true, default: new Date()}
});


module.exports = mongoose.model('Truck', TruckSchema);