const Mobile=require('../models/product-mobile');
const crudRepository=require('./crud-repository');
class mobileRepository extends crudRepository{
    constructor(){
        super(Mobile);
    }
}

module.exports=mobileRepository;