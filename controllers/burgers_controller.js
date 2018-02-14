var express = require('express');
var router = express.Router();


var burger = require('../models/burger.js');

db.sequelize.sync();

  router.get("/", function(req, res){

    db.burgers.findAll({}).then(function(data){
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  
  router.post("/burgers", function(req, res){
    db.burgers.create({
      burger_name: req.body.burger_name,
      devoured: false
    }).then(function(data){
      res.redirect("/");
    });
  });

 
  router.delete("/burgers/:id", function(req, res) {
    db.burgers.destroy({
      where: {id: req.params.id}
    }).then(function(data){
      res.redirect("/");
    });
  });

  
  router.put("/burgers/:id", function(req, res){
    db.burgers.update(
    {devoured: true},
      {where: {id: req.params.id}
    }).then(function(data){
      res.redirect("/");
    });
  });

  



module.exports = router;
