const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

class MongoManager {
  constructor () {
  }

  getMongoUrl() {  	
    return process.env.MONGODB_URI;
  }
  
  connect () {
    return mongoose.connect(this.getMongoUrl(), { 
    	useNewUrlParser: true ,
    	keepAlive: true, 
    	keepAliveInitialDelay: 300000 ,
    	//replicaSet : "rscriteria"
    });
  }
}

const mongoManager = new MongoManager();

module.exports = { mongoManager };