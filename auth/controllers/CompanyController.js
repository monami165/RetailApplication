const Company = require('../models/Company.js');


exports.findAll = (req, res) => {
    Company.find()
        .then(products => {
            res.send(products);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

exports.findById = (req, res) => {
    Company.findById(req.params.id, (err, company) => {
        if (err) throw err;
        res.send(company);
    })
};

exports.addCompany = (req, res) => {
    let company = new Company({
        _id:req.body._id,
        cname:req.body.cname
    })

    company.save((err,result) => {
        if (err) {
            // throw err;
            res.json({"msg":"Id must be unique"});
        } else {
            //res.send("record stored successfully");
            res.json({"msg":"record stored successfully"});
        }
    })
    
};

exports.removeById = (req, res) => {
    var deleteId = req.params.id;
    Company.deleteOne({_id:deleteId},(err,result) => {
        if (err) throw err;
        // res.send("record deleted"+result.deleteCount);
        if (result.deletedCount > 0) {
            // res.send(result.deletedCount + "record(s) deleted successfully")
            res.json({"msg":"record deleted successfully"});
        } else {
            // res.send("no records effected")
            res.json({"msg":"record not present"})
        }
    })

}

exports.updateById = (req, res) => {
    Company.findByIdAndUpdate(req.params.id, req.body, (err, company) => {
        if (err) throw err;
        res.send(company);
    })
}