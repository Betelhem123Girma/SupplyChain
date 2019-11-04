const truckController=require('../controller/truck')
const router=require('express').Router()
const checkAuth=require('../lib/check_auth')
router.post('/add',checkAuth,truckController.addTruck)
router.get('/',checkAuth,truckController.getTruck)
router.patch('/update/:truckId',checkAuth,truckController.updateTruckInfo)
router.delete('/delete/:truckId',checkAuth,truckController.deleteTruckInfo)
module.exports=router