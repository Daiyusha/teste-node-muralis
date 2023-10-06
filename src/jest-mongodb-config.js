module.exports = {
    mongodbMemoryServerOptions: {
      instance: {
        dbName: "####" //Add your own Database name
      },
      binary: {
        version: "6.0.10", // Version of MongoDB
        skipMD5: true
      },
      autoStart: false
    }
  };
  
