const express=require('express');
const { infoController} = require('../../controllers');
const mobileRoutes=require('./mobile-routes');
const router=express.Router();
router.use('/mobiles',mobileRoutes);
router.get('/info',infoController.info);
module.exports=router;
