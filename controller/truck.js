const truckDal=require('../dal/truck')
const assetDal=require('../dal/asset')

const truck=require('../model/truck')
//creating asset
exports.addTruck=(req,res)=>{
  
    truck_plate=req.body.truck_plate
    asset=req.body.asset
    
    assetDal.findById(asset)
    .then(found=>{
        if(!found){
            res.json({
                message:"Truck not assigned",
                
            })
        }
        else{
            asset=found
            const data={
                truck_plate:req.body.truck_plate,
                asset:req.body.asset
            }
            truckDal.addTruck(data)
            .then(result => {
                console.log(result);
                res.status(201).json({
                  message: "Asset stored",
                  purchasedTruck: {
                    _id: result._id,
                    truck_plate: result.truck_plate,
                    asset: result.asset
                    
    
                  }
                });
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                });
              });
        
        
        
        }
    })
}
// getting asset
exports.getTruck=(req,res)=>{
    truckDal.findAll()
    .then(found=>{
        if(!found){
            res.json({
                message:"no trucks found"
            })
        }
        else{
            trucks=found
            res.json(trucks)
        }
    })
}
//deleting 
exports.deleteTruckInfo=(req,res)=>{
    truckDal.findById({_id:req.params.truckId})
    .then(found=>{
        if(!found){
            res.json({
                message:"truck doesnt exist"
            })
        }
        else{
            truckDal.removeTruck({_id:req.params.truckId})
            res.json({
                message:"truck have been deleted successfully"
            })
        }
    })
}

    //update
    exports.updateTruckInfo=(req,res)=>{

        truck.findByIdAndUpdate(req.params.truckId, {$set: req.body}, function (err, truck) {
            if (err) return next(err);
            res.send('Asset udpated.');
        });
    
        
      };
    // employe.find({salary:{$lt:2000}})