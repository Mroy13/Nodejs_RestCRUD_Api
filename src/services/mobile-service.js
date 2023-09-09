const StatusCode=require('http-status-codes');
const {mobileRepository}=require('../repositories');
const Apperror=require('../utils/error/App-error');
const MobileRepo=new mobileRepository();
async function createMobile(data){
try {
    const res=await MobileRepo.create(data);
    return res;
} catch (error) {
    //console.log(error);
    if(error.name=="MongoServerError"){
       // console.log(typeof(error.message));
       // throw new Apperror(error.message,StatusCode.BAD_REQUEST);
        throw new Apperror("E11000 duplicate key error",StatusCode.BAD_REQUEST);
    }


    if(error.name=="ValidationError"){
        console.log(error.message);
        let errorMessage=[];
        const keys = Object.keys(error.errors);
        keys.forEach((key)=>{
           // console.log(error.errors[key]);
            errorMessage.push(error.errors[key].message);
        })
        //console.log(errorMessage);
       // throw new Apperror(error.message,StatusCode.BAD_REQUEST);
        throw new Apperror(errorMessage,StatusCode.BAD_REQUEST);
       
       // console.log(error.properties);
    }

    else{
    throw new Apperror("server side probelem",StatusCode.INTERNAL_SERVER_ERROR);
    }
}
}

module.exports={
   createMobile,
}