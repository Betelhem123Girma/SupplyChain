const truckController=require('../controller/truck')
const router=require('express').Router()
const checkAuth=require('../lib/check_auth')
/**
 * @api {post} /truck/add  Add truck
 * @apiName addTruck
 * @apiGroup truck
 * @apiVersion 0.0.1
 * */
router.post('/add',checkAuth,truckController.addTruck)

/**
 * @api {get} /  Get truck
 * @apiName getTruck
 * @apiGroup truck
 * @apiVersion 0.0.1
 * */
router.get('/',checkAuth,truckController.getTruck)
/**
 * @api {patch} /update/:Id  Update truck information
 * @apiName updateTruckInfo
 * @apiGroup truck
 * @apiVersion 0.0.1
 * */
router.patch('/update/:truckId',checkAuth,truckController.updateTruckInfo)
/**
 * @api {delete} /delete/:Id  Delete truck
 * @apiName DeleteTruck
 * @apiGroup truck
 * @apiVersion 0.0.1*/

router.delete('/delete/:truckId',checkAuth,truckController.deleteTruckInfo)
module.exports=router