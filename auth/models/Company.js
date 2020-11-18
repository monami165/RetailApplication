const mongoose = require('mongoose'), Schema = mongoose.Schema;

const CompanySchema = mongoose.Schema({
    _id:Number,
    cname:String
});

module.exports = mongoose.model('Company', CompanySchema);