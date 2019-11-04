const assetDal=require('../dal/asset')
const customerDal=require('../dal/customer')
const events = require('events');
const post=require('../model/asset')
const searchOptions = require('../lib/search_options');
var defaultFields = ['asset_type'];
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
//     
exports.searchAsset=(req, res, next)=> {
    var workflow = new events.EventEmitter();
  
    // Set default search parameter options
    req.query.filter = searchOptions.getFilter(req);
    req.query.fields = searchOptions.getFields(req, defaultFields);
    req.query.page = searchOptions.getPage(req);
    req.query.limit = searchOptions.getLimit(req);
    req.query.sort = searchOptions.getSort(req);
  
    workflow.on('validateSearchQuery', function validateSearchQuery() {
        // Validate search parameters
  
        req.checkQuery('filter', 'Filter is empty!')
            .notEmpty();
        req.checkQuery('page', 'Page should be a number!')
            .isInt();
        req.checkQuery('limit', 'Limit should be a number!')
            .isInt();
        req.checkQuery('sort', 'Sort field is empty!')
            .notEmpty();
  
        var validationErrors = req.validationErrors();
  
        if (validationErrors) {
            res.status(400);
            res.json(validationErrors);
        } else {
            // On Success emit search Posts event
            workflow.emit('searchAsset');
        }
    });
  
    workflow.on('searchAsset', function searchAsset() {
        var opts = {
            filter: req.query.filter,
            fields: req.query.fields,
            sort: req.query.sort,
            limit: req.query.limit,
            page: req.query.page
        };
  
        customerDal.search(opts, function (err, assets) {
            if (err) {
                // handle error
                return next(err);
            }
  
            workflow.emit('respond', opts, assets);
        });
    });
  
    workflow.on('respond', function respond(opts, assets) {
        res.status(200);
        res.json({
            "options": opts,
            "result": assets
        });
    });
  
    workflow.emit('validateSearchQuery');
  };