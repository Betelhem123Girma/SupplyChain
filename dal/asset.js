const Asset=require('../model/asset')


exports.findById=query=>Asset.findById(query).exec()
exports.createAsset=data=>new Asset(data).save()
exports.findAll=query=>Asset.find(query).exec()
exports.update=(Asset,data)=>{
    Object.assign(data)
    return Asset.save(data)
}
exports.deleteAsset=query=>Asset.deleteMany(query).exec()
