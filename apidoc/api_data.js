define({ "api": [
  {
    "type": "post",
    "url": "/asset/create",
    "title": "Create Asset",
    "name": "CreateAsset",
    "group": "Asset",
    "version": "0.0.1",
    "filename": "routes/asset.js",
    "groupTitle": "Asset"
  },
  {
    "type": "patch",
    "url": "/update/:assetId",
    "title": "Update Asset",
    "name": "CreateUser",
    "group": "Asset",
    "version": "0.0.1",
    "filename": "routes/asset.js",
    "groupTitle": "Asset"
  },
  {
    "type": "delete",
    "url": "/delete/:Id",
    "title": "Delete Asset",
    "name": "DeleteUser",
    "group": "Asset",
    "version": "0.0.1",
    "filename": "routes/asset.js",
    "groupTitle": "Asset"
  },
  {
    "type": "get",
    "url": "/",
    "title": "Get Asset",
    "name": "getAssets",
    "group": "Asset",
    "version": "0.0.1",
    "filename": "routes/asset.js",
    "groupTitle": "Asset"
  },
  {
    "type": "post",
    "url": "/users/createAccount",
    "title": "Create User",
    "name": "CreateUser",
    "group": "User",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n\t\"email\": \"john.doe@example.com\",\n\t\"password\": \"plain-text-password\",\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The ID of the newly created User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The hashed password of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_created",
            "description": "<p>The date on which the User entry was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_modified",
            "description": "<p>The date on which the User entry was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\t HTTP/1.1 201 Created\n\t {\n\t\t _id: '58a1ea8b36dfb71d975384af',\n\t\temail: \"john.doe@example.com\",\n \tpassword: \"$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy\",\n\t\tdate_created: 2017-02-13T17:19:08.404Z,\n\t\tdate_modified: 2017-02-13T17:19:08.404Z,\n\t }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/customer.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "constumer/search/:id",
    "title": "delete user",
    "name": "DeleteUser",
    "group": "User",
    "version": "0.0.0",
    "filename": "routes/customer.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "costumer/delete/:id",
    "title": "update User information",
    "name": "DeleteUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/customer.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/customer/",
    "title": "all user",
    "name": "GetUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "customer",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/customer.js",
    "groupTitle": "User"
  },
  {
    "type": "user",
    "url": "/users/login",
    "title": "Login User",
    "name": "LoginUser",
    "group": "User",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n\t\"email\": \"john.doe@example.com\",\n\t\"password\": \"plain-text-password\",\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message confirming success of Authentication.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The JWT token for the logged in user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\t HTTP/1.1 201 Created\n\t {\n\t\t message: 'Auth Successful',\n \t token: \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJ1c2VySWQiOiI1YmQ2ZjRjZTFlMWZmOTUwNzg2Y2Y4MmEiLCJpYXQiOjE1NDA4MTc1MzcsImV4cCI6MTU0MDgyMTEzN30\"\n\t }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/customer.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "costumer/search/:id",
    "title": "search user",
    "name": "SearchUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "name",
            "optional": false,
            "field": "name",
            "description": "<p>of user</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/customer.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/delete/:Id",
    "title": "Delete truck",
    "name": "DeleteTruck",
    "group": "truck",
    "version": "0.0.1",
    "filename": "routes/truck.js",
    "groupTitle": "truck"
  },
  {
    "type": "post",
    "url": "/truck/add",
    "title": "Add truck",
    "name": "addTruck",
    "group": "truck",
    "version": "0.0.1",
    "filename": "routes/truck.js",
    "groupTitle": "truck"
  },
  {
    "type": "get",
    "url": "/",
    "title": "Get truck",
    "name": "getTruck",
    "group": "truck",
    "version": "0.0.1",
    "filename": "routes/truck.js",
    "groupTitle": "truck"
  },
  {
    "type": "patch",
    "url": "/update/:Id",
    "title": "Update truck information",
    "name": "updateTruckInfo",
    "group": "truck",
    "version": "0.0.1",
    "filename": "routes/truck.js",
    "groupTitle": "truck"
  }
] });
