module.exports = {
    // HTTP PORT
    HTTP_PORT: process.env.PORT || 3000,
    // MongoDB URL
    MONGODB_URL:"mongodb://localhost/supplyChain",
    //"mongodb+srv://user:root@cluster0-wijwl.mongodb.net/test?retryWrites=true&w=majority",mongodb+srv://admin:bety1997@cluster0-odwq2.mongodb.net/test?retryWrites=true&w=majority
    
    // Maximum Page Size 
    MAX_PAGE_SIZE: 100,
    // DEFAULT SORT FIELD,
    DEFAULT_SORT: "date_updated",
    // JWT Key
    JWT_KEY: "s0m3thin1Zn33d3d"
  };
  // mongodb+srv://admin:bety1997@cluster0-odwq2.mongodb.net/test?retryWrites=true&w=majority