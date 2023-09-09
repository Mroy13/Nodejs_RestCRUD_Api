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

module.exports = {
    createMobile,
}