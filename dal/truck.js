const Truck=require('../model/truck')


exports.findById=query=>Truck.findById(query).exec()
exports.addTruck=data=>new Truck(data).save()
exports.findAll=query=>Truck.find(query).exec()
exports.update=(Truck,data)=>{
    Object.assign(data)
    return Truck.save(data)
}
exports.removeTruck=query=>Truck.deleteMany(query).exec()
