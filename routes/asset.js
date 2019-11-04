const assetController=require('../controller/asset')
const router=require('express').Router()
const checkAuth=require('../lib/check_auth')

/**
 * @api {post} /asset/create  Create Asset
 * @apiName CreateAsset
 * @apiGroup Asset
 * @apiVersion 0.0.1
 * */
router.post('/create',checkAuth,assetController.createAsset)

/**
 * @api {get} /  Get Asset
 * @apiName getAssets
 * @apiGroup Asset
 * @apiVersion 0.0.1
 * */
router.get('/',checkAuth,assetController.getAssets)

/**
 * @api {patch} /update/:assetId  Update Asset
 * @apiName CreateUser
 * @apiGroup Asset
 * @apiVersion 0.0.1
 * */

router.patch('/update/:assetId',checkAuth,assetController.updateAsset)

/**
 * @api {delete} /delete/:Id  Delete Asset
 * @apiName DeleteUser
 * @apiGroup Asset
 * @apiVersion 0.0.1*/

router.delete('/delete/:assetId',checkAuth,assetController.deleteAsset)
/**
 * @api {get} costumer/search/ search asset
 * @apiName SearchAsset
 * @apiGroup User
 *
 * 
 *
 
 */
router.get('/search',checkAuth,assetController.searchAsset)
module.exports=router