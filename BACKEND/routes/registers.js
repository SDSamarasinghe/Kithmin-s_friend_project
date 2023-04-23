const router = require("express").Router();
const register = require("../models/register");
// Register Router

router.route("/add").post((req, res) => {
  console.log(req.body);

  const FullName = req.body.FullName;
  const NICNumber = req.body.NICNumber;
  const Address = req.body.Address;
  const PhoneNumber = req.body.PhoneNumber;
  const EmailAddress = req.body.EmailAddress;
  const DateOfBirth = req.body.DateOfBirth;
  const RegisteredDate = req.body.RegisteredDate;
  const EmployeeID = req.body.EmployeeID;
  const Department = req.body.Department;

  const newRegister = new register({
    FullName,
    NICNumber,
    Address,
    PhoneNumber,
    EmailAddress,
    DateOfBirth,
    RegisteredDate,
    EmployeeID,
    Department,
  });

  newRegister
    .save()
    .then(() => {
      res.json("Registration Success");
    })
    .catch((err) => {
      console.log(err);
    });
});

// Display Registered Employee  ##############################

router.route("/").get((req, res) => {
  register
    .find()
    .then((employee) => {
      console.log(employee);
      res.json(employee);
    })
    .catch((err) => {
      console.log(err);
    });
});

// Update

router.route("/update/:id").put(async (req, res) => {
  let id = req.params.id;
  console.log(id);
  const {
    FullName,
    NICNumber,
    Address,
    PhoneNumber,
    EmailAddress,
    DateOfBirth,
    RegisteredDate,
    Department,
  } = req.body;
  const updateRegister = {
    FullName,
    NICNumber,
    Address,
    PhoneNumber,
    EmailAddress,
    DateOfBirth,
    RegisteredDate,
    Department,
  };
  const update = await register
    .findByIdAndUpdate(id, updateRegister)
    .then(() => {
      res.status(200).send({ status: "Successfully Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error Updating data!", error: err.message });
    });
});

// Delete

router.route("/delete/:id").delete(async (req, res) => {
  let EmpID = req.params.id;

  await register
    .findByIdAndDelete(EmpID)
    .then(() => {
      res.status(200).send({ status: "Epmloyee Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error Deleting Employee!", error: err.message });
    });
});

// Get User details By Id

router.route("/get/:id").get(async (req, res) => {
  id = req.params.Emp_ID;

  const Employee = await register
    .findOne(id)
    .then(() => {
      res.status(200).send({ status: "User Fetched", Employee: Employee });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error to Find Employee ", error: err.message });
    });
});

module.exports = router;
