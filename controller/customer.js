// Load Module Dependencies
const events = require('events');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const result = require('../util/res');
const searchOptions = require('../lib/search_options');
var defaultFields = ['email', 'asset'];
// Get User DAL
const customerDal = require('../dal/customer');
const customer=require('../model/customer')
const helper=require('../util/helper')
// Get Config file
const config = require('../config');
const validator=require('../validator/user-validator')
/*
* Create User
*
*  1. Create User
*  2. Respond
*/
exports.createAccount = function createAccount(req, res, next) {
  let workflow = new events.EventEmitter();

  workflow.on('validateData', function validateData() {
    // Validate User Data
    req.checkBody({
      email: {
        notEmpty: true,
        errorMessage: 'Invalid email'
      },
      password: {
        notEmpty: true,
        errorMessage: 'Invalid password'
      },
    });

    let validationErrors = req.validationErrors();

    if(validationErrors) {
      res.status(400);
      res.json(validationErrors);
    } else {
      // On success emit the createUser event
      workflow.emit('createUser');
    }
  });

  workflow.on('createUser', function createUser() {
    customerDal.create(req.body, function callback(err, user) {
      if (err) {
        return next(err);
      }

      // On Success respond with new user
      workflow.emit('respond', user);
    });
  });

  workflow.on('respond', function respond(user) {
    res.status(201);
    res.json(user);
  });

  workflow.emit('validateData');
};
exports.login = (req, res) => {
  let email, password, user;
  validator.hasLoginFields(req)
      .then(body => {
          email = body.email;
          password = body.password;
          return customerDal.findOne({email});
      })
      .then(found => {
          if (!found) {
              return Promise.reject(
                  result.reject(`Invalid username or password`)
              );
          } else {
              user = found;
              return bcrypt.compare(password, user.password);
          }
      })
      .then(valid => {
          if (valid) {
            const token = jwt.sign(
                    {
                      email: user.email,
                      userId: user._id
                    },
                    config.JWT_KEY,
                    {
                      expiresIn: "1h"
                    }
                  );
                  return token
          } else {
              return Promise.reject(
                  result.reject(`Invalid username or password`)
              );
          }
      })
      .then(token => {
          result.data({token, user}, res);
      })
      .catch(reject => result.errorReject(reject, res));
};

//search for customers
exports.searchCustomer=(req, res, next)=> {
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
          workflow.emit('searchCustomer');
      }
  });

  workflow.on('searchCustomer', function searchCustomer() {
      var opts = {
          filter: req.query.filter,
          fields: req.query.fields,
          sort: req.query.sort,
          limit: req.query.limit,
          page: req.query.page
      };

      customerDal.search(opts, function (err, customers) {
          if (err) {
              // handle error
              return next(err);
          }

          workflow.emit('respond', opts, customers);
      });
  });

  workflow.on('respond', function respond(opts, customers) {
      res.status(200);
      res.json({
          "options": opts,
          "result": customers
      });
  });

  workflow.emit('validateSearchQuery');
};
//deleting 
exports.deleteCustomer=(req,res)=>{
  customerDal.findById({_id:req.params.customerId})
  .then(found=>{
      if(!found){
          res.json({
              message:"customer doesnt exist"
          })
      }
      else{
          customerDal.deleteCustomer({_id:req.params.customerId})
          res.json({
              message:"customer have been deleted successfully"
          })
      }
  })
}

    //update
  exports.updateCustomerInfo=(req,res)=>{

      customer.findByIdAndUpdate(req.params.customerId, {$set: req.body}, function (err, customer) {
          if (err) return next(err);
          res.send('Customer info udpated.');
        
      });
  
      
    };
exports.getUsers=(req,res)=>{
  customer.find()
  .then(found=>{
    if(!found){
      res.json({
        message:"no customers"
      })
    }
    else{
      user=found
      res.json(user)
    }
  })
}