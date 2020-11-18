var express = require("express");
var router = express.Router();

var CompanyController = require("../controllers/CompanyController.js")

router.get('/api/companies', CompanyController.findAll);
router.get('/api/companies/:id', CompanyController.findById);
router.post('/api/companies', CompanyController.addCompany);
router.put('/api/companies/:id', CompanyController.updateById);
router.delete('/api/companies/:id', CompanyController.removeById);

module.exports = router;
