const assetController=require('../controller/asset')
const router=require('express').Router()
const checkAuth=require('../lib/check_auth')
router.post('/create',checkAuth,assetController.createAsset)
router.get('/',checkAuth,assetController.getAssets)
router.patch('/update/:assetId',checkAuth,assetController.updateAsset)
router.delete('/delete/:assetId',checkAuth,assetController.deleteAsset)
module.exports=router