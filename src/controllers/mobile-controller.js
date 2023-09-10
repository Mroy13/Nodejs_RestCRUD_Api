const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');
const { mobileService } = require('../services');
const Apperror = require('../utils/error/App-error');
async function createMobile(req, res) {
    try {
        const mobileData = await mobileService.createMobile({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            specifications: {
                General: {
                    INTheBox: req.body.INTheBox,
                    modelNumber: req.body.modelNumber,
                    modelName: req.body.modelName
                },
                displayFeatures: {
                    displaySize: req.body.displaySize,
                    resolution: req.body.resolution,
                    displayType: req.body.displayType
                }
            }
        });
        SuccessResponse.data = mobileData;
        return res.
                  status(StatusCodes.CREATED)
                  .json(SuccessResponse);
    } catch (error) {
        //console.log(error.explanation);
        ErrorResponse.message = error.explanation;
        return res.status(error.statusCode)
            .json({
                ErrorResponse
            })
    }
}
async function getMobile(req,res) {
    try {
        console.log(req.params.id);
        const mobileData = await mobileService.getMobile(req.params.id);
        SuccessResponse.data = mobileData;
        return res.
                  status(StatusCodes.CREATED)
                  .json(SuccessResponse);
    } catch (error) {
        //console.log(error.explanation);
        ErrorResponse.message = error.explanation;
        return res.status(error.statusCode)
            .json({
                ErrorResponse
            })
    }
}
async function getMobiles(req,res) {
    try {
        console.log(req.params.id);
        const mobileData = await mobileService.getMobiles();
        SuccessResponse.data = mobileData;
        return res.
                  status(StatusCodes.CREATED)
                  .json(SuccessResponse);
    } catch (error) {
        //console.log(error.explanation);
        ErrorResponse.message = error.explanation;
        return res.status(error.statusCode).json({
                ErrorResponse
            });
    }
}
async function destroyMobile(req,res) {
    try {
        const resp = await mobileService.destroyMobile(req.params.id);
    
        SuccessResponse.data = resp;
        
        return res.status(StatusCodes.OK)
                  .json(SuccessResponse);
    } catch (error) {
        //console.log(error);
        //console.log(error.explanation);
        ErrorResponse.message = error.explanation;
        return res.status(error.statusCode).json({
                ErrorResponse
            })
    }
}
async function updateMobile(req,res) {
    try {
       // console.log(req.params.id);
        const resp = await mobileService.updateMobile(req.params.id,{
            name:req.body.name
        });
    
        SuccessResponse.data = resp;
        
        return res.status(StatusCodes.OK)
                  .json(SuccessResponse);
    } catch (error) {
        console.log(error);
        //console.log(error.explanation);
        ErrorResponse.message = error.explanation;
        return res.status(error.statusCode).json({
                ErrorResponse
            })
    }
}

module.exports = {
    createMobile,
    getMobile,
    getMobiles,
    destroyMobile,
    updateMobile
}