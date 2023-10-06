module.exports = {
    mongodbMemoryServerOptions: {
      instance: {
        dbName: "apirestMuralis"
      },
      binary: {
        version: "6.0.10", // Version of MongoDB
        skipMD5: true
      },
      autoStart: false
    }
  };
  