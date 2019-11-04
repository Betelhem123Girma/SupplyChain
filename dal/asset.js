const Asset=require('../model/asset')


exports.findById=query=>Asset.findById(query).exec()
exports.createAsset=data=>new Asset(data).save()
exports.findAll=query=>Asset.find(query).exec()
exports.update=(Asset,data)=>{
    Object.assign(data)
    return Asset.save(data)
}
exports.deleteAsset=query=>Asset.deleteMany(query).exec()
exports.search = function search(options, cb){
    console.log('Searching a collection of Assets');
  
   asset.find(options.filter, options.fields) 
        .sort(options.sort)
        .limit(options.limit)
        .skip(options.limit * (options.page - 1))
        .exec(function searchasset(err, assets) {
            if(err) {
                return cb(err);
            }
            return cb(null, assets);
        })
  }