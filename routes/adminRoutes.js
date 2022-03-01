const express = require("express");
const router = express.Router();
require("dotenv").config();

//importing models
const User= require("../models/userModel")
const Guard= require("../models/guardModel")
const Trainer= require("../models/trainerModel")
const Manager= require("../models/managerModel")

/*---Get count of participants---*/

router.route("/count").get(async (req, res) => {
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  let count4 = 0;
  //Customers
  count1 = await User.countDocuments();
  //Trainers
  count2 = await Trainer.countDocuments({});
  //Guards
  count3 = await Guard.countDocuments({});
  //Managers
  count4 = await Manager.countDocuments({});
  res.json({ customers: count1, trainers: count2,guards: count3, managers:count4 });
});

// //to get the name of instructor using username

// router.route("/instructor").get((req, res) => {
//   const name = req.body.username;
//   Instructor.findOne({ username: name })
//     .then((foundUser) => {
//       res.json(foundUser);
//     })
//     .catch((err) => {
//       res.status(400);
//     });
// });


//to get list of customers

router.route("/customers").get((req, res) => {
  
  User.find().then((foundDocs) =>
    res.json(foundDocs)
  );
});

//to get list of guards

router.route("/guards").get((req, res) => {
  
    Guard.find().then((foundDocs) =>
      res.json(foundDocs)
    );
  });

  //to get list of managers

router.route("/managers").get((req, res) => {
  
    Manager.find().then((foundDocs) =>
      res.json(foundDocs)
    );
  });

//to get list of trainers
router.route("/trainers").get((req, res) => {
  
    Trainer.find().then((foundDocs) =>
      res.json(foundDocs)
    );
  });



module.exports = router;
