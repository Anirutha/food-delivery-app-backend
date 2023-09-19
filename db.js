const mongoose = require('mongoose')
// const mongoDbClient = require("mongodb").MongoClient
const mongoURI = 'mongodb://gofood:Mahathi03@ac-troy327-shard-00-00.ejt0ana.mongodb.net:27017,ac-troy327-shard-00-01.ejt0ana.mongodb.net:27017,ac-troy327-shard-00-02.ejt0ana.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-11ta98-shard-0&authSource=admin&retryWrites=true&w=majority'
//'mongodb+srv://gofood:Mahathi03@cluster0.ejt0ana.mongodb.net/gofoodmern?retryWrites=true&w=majority'
//'mongodb://gofood:Mahathi03@ac-troy327-shard-00-00.ejt0ana.mongodb.net:27017,ac-troy327-shard-00-01.ejt0ana.mongodb.net:27017,ac-troy327-shard-00-02.ejt0ana.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-11ta98-shard-0&authSource=admin&retryWrites=true&w=majority'
 // Customer change url to your db you created in atlas
// mongodb://<username>:<password>@merncluster-shard-00-00.d1d4z.mongodb.net:27017,merncluster-shard-00-01.d1d4z.mongodb.net:27017,merncluster-shard-00-02.d1d4z.mongodb.net:27017/?ssl=true&replicaSet=atlas-eusy5p-shard-0&authSource=admin&retryWrites=true&w=majority
async function dbConnection(){
  await mongoose.connect(mongoURI,{useNewUrlParser:true});
   try{
    console.log("connected");
    const fetched_data=await mongoose.connection.db.collection("food_items");
    const data =await  fetched_data.find({}, {projection: {}}).toArray();
    global.foodData=data;
    const fetched_data1=await mongoose.connection.db.collection("foodCategory");
    const data1 =await  fetched_data1.find({}, {projection: {}}).toArray();
    global.foodCategory=data1;
    //console.log(global.foodCategory);
    }
   catch(error){
    console.log("---",error);
   }
    
   }
module.exports=dbConnection;
       
              
            
        
        
    
