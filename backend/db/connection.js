import mongoose from 'mongoose';

const connection = (userName,passward) => {
    const URL = `mongodb+srv://${userName}:${passward}@managedatabase.abqbrst.mongodb.net/?retryWrites=true&w=majority`
    mongoose.set({strictQuery:true});
    // console.log("rohit")
    mongoose.connect(URL,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(
        console.log('Mongodb connected')
    ).catch(error=>{
        console.log('error',error)
    })

}

export default connection;