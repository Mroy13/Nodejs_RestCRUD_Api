const express=require('express');
const {mobileController}=require ('../../controllers');
const { mobileMiddleware}=require('../../middlewares');
const router=express.Router();
router.post('/',mobileMiddleware.validateInput, mobileController.createMobile);
// router.get('/',Controller.get);
// router.get('/:id',Controller.get);
module.exports=router