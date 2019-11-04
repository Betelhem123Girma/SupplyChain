const express = require('express');

// Get Users controller
const customerController = require('../controller/customer');
const checkAuth=require('../lib/check_auth')
// Create a router
const router = express.Router();

/**
 * @api {post} /users/createAccount  Create User
 * @apiName CreateUser
 * @apiGroup User
 * @apiVersion 0.0.1
 *
 * @apiParam {String} email The email of the User.
 * @apiParam {String} password The password of the User.
 *
 * @apiParamExample {json} Request-Example:
 * 	 {
 * 		"email": "john.doe@example.com",
 * 		"password": "plain-text-password",
 * 	 }
 *
 * @apiSuccess {String} _id  The ID of the newly created User.
 * @apiSuccess {String} email The email of the User.
 * @apiSuccess {String} password The hashed password of the User.
 * @apiSuccess {Date} date_created The date on which the User entry was created.
 * @apiSuccess {Date} date_modified The date on which the User entry was last updated.
 *
 * @apiSuccessExample {json} Success-Response:
 * 	 HTTP/1.1 201 Created
 * 	 {
 * 		 _id: '58a1ea8b36dfb71d975384af',
 * 		email: "john.doe@example.com",
 *  	password: "$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy",
 * 		date_created: 2017-02-13T17:19:08.404Z,
 * 		date_modified: 2017-02-13T17:19:08.404Z,
 * 	 }
 *
 */
router.post('/createAccount', customerController.createAccount);

/**
 * @api {user} /users/login  Login User
 * @apiName LoginUser
 * @apiGroup User
 * @apiVersion 0.0.1
 *
 * @apiParam {String} email The email of the User.
 * @apiParam {String} password The password of the User.
 *
 * @apiParamExample {json} Request-Example:
 * 	 {
 * 		"email": "john.doe@example.com",
 * 		"password": "plain-text-password",
 * 	 }
 *
 * @apiSuccess {String} message  Message confirming success of Authentication.
 * @apiSuccess {String} token The JWT token for the logged in user.
 *
 * @apiSuccessExample {json} Success-Response:
 * 	 HTTP/1.1 201 Created
 * 	 {
 * 		 message: 'Auth Successful',
 *  	 token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJ1c2VySWQiOiI1YmQ2ZjRjZTFlMWZmOTUwNzg2Y2Y4MmEiLCJpYXQiOjE1NDA4MTc1MzcsImV4cCI6MTU0MDgyMTEzN30"
 * 	 }
 *
 */
router.post('/login', customerController.login);
/**
 * @api {get} costumer/search/ search user
 * @apiName SearchUser
 * @apiGroup User
 *
 * @apiParam {name} name of user
 *
 
 */
router.get('/search',customerController.searchCustomer)
/**
 * @api {delete} constumer/search/:id delete user
 * @apiName DeleteUser
 * @apiGroup User
 *

 */
router.delete('/delete/:customerId',customerController.deleteCustomer)
/**
 * @api {get} costumer/delete/:id update User information
 * @apiName DeleteUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 
 */
router.patch('/update/:customerId',customerController.updateCustomerInfo)
/**
 * @api {get} /customer/ all user
 * @apiName GetUser
 * @apiGroup User
 *

 *
 * @apiSuccess {Array} customer
 
 */
router.get('/',customerController.getUsers)

module.exports = router;
