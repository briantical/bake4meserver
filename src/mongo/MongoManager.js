const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

class MongoManager {
  constructor () {
  }

  getMongoUrl() {  	
    return process.env.MONGODB_URI;
  }
  
  connect () {
    mongoose.connect(this.getMongoUrl(), { 
    	useNewUrlParser: true ,
    	keepAlive: true, 
      keepAliveInitialDelay: 300000 ,
    })
      .then(() => {
        console.log('Connection to database established.');
        return mongoose.connection.db
      })
      .catch(err => {
        setTimeout(() => {
          console.log('Attempting to connect ...');
          this.connect();
        }, 2000);
      });
  }
}

const mongoManager = new MongoManager();

module.exports = { mongoManager };