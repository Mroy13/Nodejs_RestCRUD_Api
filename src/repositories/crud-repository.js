const StatusCode = require('http-status-codes');
const Apperror = require('../utils/error/App-error');
class crudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        const response = await this.model.create(data);
        return response;
        
    }
}
module.exports = crudRepository