const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');
const Apperror = require('../utils/error/App-error');
 function validateCreateRequest(req,res,next){
    if(!req.body.name){
        const message="something went wrong while creating mobile";
        ErrorResponse.message=message;
        ErrorResponse.error=new Apperror(["product name not present"],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.price){
        const message="something went wrong while creating mobile";
        ErrorResponse.message=message;
        ErrorResponse.error=new Apperror(["product price not present"],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.description){
        const message="something went wrong while creating mobile";
        ErrorResponse.message=message;
        ErrorResponse.error=new Apperror(["product desvription not present"],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
 }

 

 module.exports={
   validateCreateRequest,
 }