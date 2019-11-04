// Load Modules
const bcrypt = require("bcrypt");

// Get Customer model
const Customer = require("../model/customer");

/**
 * create a new Customer.
 *
 * @desc  creates a new Customer and saves it in the database
 *
 * @param {Object}   CustomerData  Data for the Customer to create
 * @param {Function} cb     Callback for once saving is complete
 */
exports.create = function create(CustomerData, cb) {
  console.log("creating a new Customer");

  // Hash Password
  bcrypt.hash(CustomerData.password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({
        error: err
      });
    } else {
      // Create Customer
      let now = new Date();

      CustomerData.date_created = now.toISOString();
      CustomerData.date_modified = now.toISOString();
      CustomerData.password = hash;

      let CustomerModel = new Customer(CustomerData);
      
      CustomerModel.save(function saveCustomer(err, data) {
        if (err) {
          return cb(err);
        }
        exports.get({ _id: data._id }, function(err, Customer) {
          if (err) {
            return cb(err);
          }
          cb(null, Customer);
        });
      });
    }
  });
};

/**
 * get a Customer.
 *
 * @desc get a Customer with the given query from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.get = function get(query, cb) {
  console.log("getting Customer ", query);

  Customer.findOne(query).exec(function(err, Customer) {
    if (err) {
      return cb(err);
    }
    cb(null, Customer || {});
  });
};
exports.findById=query=>Customer.findById(query);
exports.find = query => Customer.find(query).exec();
exports.findOne = query => Customer.findOne(query).exec();
exports.search = function search(options, cb){
  console.log('Searching a collection of foodItems');

 Customer.find(options.filter, options.fields) 
      .sort(options.sort)
      .limit(options.limit)
      .skip(options.limit * (options.page - 1))
      .exec(function searchfoodItem(err, foods) {
          if(err) {
              return cb(err);
          }
          return cb(null, foods);
      })
}