const assetDal=require('../dal/asset')
const customerDal=require('../dal/customer')

const post=require('../model/asset')
//creating asset
exports.createAsset=(req,res)=>{
  
    asset_type=req.body.asset_type
    customer=req.body.customer
    price=req.body.price
    customerDal.findById(customer)
    .then(found=>{
        if(!found){
            res.json({
                message:"customer doesnt exist",
                
            })
        }
        else{
            customer=found
            const data={
                asset_type:req.body.asset_type,
                customer:req.body.customer,
                price:req.body.price
            }
            assetDal.createAsset(data)
            .then(result => {
                console.log(result);
                res.status(201).json({
                  message: "Asset stored",
                  createdOrder: {
                    _id: result._id,
                    asset_type: result.asset_type,
                    customer: result.customer,
                    price:result.price
                    
    
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
exports.getAssets=(req,res)=>{
    assetDal.findAll()
    .then(found=>{
        if(!found){
            res.json({
                message:"no assets found"
            })
        }
        else{
            assets=found
            res.json(assets)
        }
    })
}
//deleting 
exports.deleteAsset=(req,res)=>{
    assetDal.findById({_id:req.params.assetId})
    .then(found=>{
        if(!found){
            res.json({
                message:"asset doesnt exist"
            })
        }
        else{
            assetDal.deleteAsset({_id:req.params.assetId})
            res.json({
                message:"asset have been deleted successfully"
            })
        }
    })
}

//     //update
    exports.updateAsset=(req,res)=>{

        post.findByIdAndUpdate(req.params.assetId, {$set: req.body}, function (err, asset) {
            if (err) return next(err);
            res.send('Asset udpated.');
        });
    
        
      };
//     // employe.find({salary:{$lt:2000}})