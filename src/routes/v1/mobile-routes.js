const express=require('express');
const {mobileController}=require ('../../controllers');
const { mobileMiddleware}=require('../../middlewares');
const router=express.Router();
router.post('/',mobileMiddleware.validateCreateRequest, mobileController.createMobile);
router.get('/:id',mobileController.getMobile);
router.get('/',mobileController.getMobiles);
router.delete('/:id',mobileController.destroyMobile);
router.patch('/:id',mobileController.updateMobile);
module.exports=router