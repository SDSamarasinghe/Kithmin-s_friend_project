import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import swal from "sweetalert";

const StoreAddProductForm = () => {
  const [EmployeeID, setEmployeeID] = useState("");
  const [FullName, setFullName] = useState("");
  const [NICNumber, setNICNo] = useState("");
  const [Address, setAddress] = useState("");
  const [PhoneNumber, setPhone] = useState("");
  const [EmailAddress, setEmail] = useState("");
  const [DateOfBirth, setBirthday] = useState("");
  const [RegisteredDate, setRegisteredDate] = useState("");
  const [Department, setDepartment] = useState("");
  const [Image, setImage] = useState("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");

  const saveProduct = async (e) => {
    e.preventDefault();
    const product = {
      EmployeeID,
      FullName,
      NICNumber,
      Address,
      PhoneNumber,
      EmailAddress,
      DateOfBirth,
      RegisteredDate,
      Department,
      Image: img,

    };

    if (
      product.EmployeeID.length <= 0 ||
      product.FullName.length <= 0 ||
      product.NICNumber.length <= 0 ||
      product.PhoneNumber.length <= 0 ||
      product.EmailAddress.length <= 0 ||
      product.DateOfBirth.length <= 0 ||
      product.RegisteredDate.length <= 0 ||
      product.Department.length <= 0 ||
      product.Image.length <= 0 
   
    ) {
      setErrors(true);
      return;
    }
//must check endpoint
    axios
      .post("http://florage-api.pasinduprabhashitha.com/api/inventory/products", product)
      .then((response) => {
        swal({
          title: "User Added Successfully!",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#12af39",
          className: "store-swal-button",
        }).then(() => {
          navigate(`/store/store-admin-products`);
        });
      });
  };

  

  return (
    <div className="store-add-product py-4 d-flex align-items-center flex-column justify-content-center">
      <div className=" store-form-outer-layer">
        <h2 className="display-6"> User Registration </h2>
        <small id="emailHelp" className="form-text text-muted">
          Enter the details of the new product
        </small>

        {errors && (
          <div className="text-danger mt-4 text-center">
            All the fields are required! Please fillout all the fields to add
            product to the store
          </div>
        )}

        <div className="store-add-product-form-inner  py-4">
          <form>
            <div id="store-form-group" className="form-group mt-2">
              <label className="my-1">Employee ID</label>
              <input
                type="email"
                class={`form-control ${errors.nameError && "is-invalid"}`}
                aria-describedby="emailHelp"
                placeholder="Name"
                value={EmployeeID}
                onChange={(e) => {
                  setEmployeeID(e.target.value);
                }}
              />
            </div>
            <div id="store-form-group" className="form-group mt-2">
              <label className="my-1">FullName</label>
              <input
                type="text"
                class={`form-control ${errors.nameError && "is-invalid"}`}
                aria-describedby="emailHelp"
                placeholder="Full Name"
                value={FullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />
            </div>

             <div className="form-group my-4">
              <label className="my-1">NIC</label>
              <input
                type="text"
                className="form-control"
                placeholder="NIC"
                value={NICNumber}
                onChange={(e) => {
                  setNICNo(e.target.value);
                }}
              />
            </div>

            <div className="form-group my-4">
              <label className="my-1">Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Unit Price"
                value={Address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
           

            <div className="form-group my-4">
              <label className="my-1">PhoneNumber</label>
              <input
                type="phone"
                className="form-control"
                placeholder="Unit Price"
                value={PhoneNumber}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>

            <div className="form-group my-4">
              <label className="my-1">EmailAddress</label>
              <input
                type="email"
                className="form-control"
                placeholder="Unit Price"
                value={EmailAddress}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="form-group my-4">
              <label className="my-1">DateOfBirth</label>
              <input
                type="date"
                className="form-control"
                placeholder="Unit Price"
                value={DateOfBirth}
                onChange={(e) => {
                  setBirthday(e.target.value);
                }}
              />
            </div>

            <div className="form-group mt-4">
              <label className="my-1">RegisteredDate</label>
              <input
                type="date"
                className="form-control mb-2"
                value={RegisteredDate}
                onChange={(e) => {
                  setRegisteredDate(e.target.value);
                }}
                placeholder="Category"
              />
            </div>

            <div className="form-group mt-4">
              <label className="my-1">Department</label>
              <input
                type="text"
                className="form-control mb-2"
                value={Department}
                onChange={(e) => {
                  setDepartment(e.target.value);
                }}
                placeholder="Department"
              />
            </div>

            <div className="form-group mt-4">
              <label className="my-1">Image</label>
              <input
                type="text"
                className="form-control mb-2"
                value={Image}
                onChange={(e) => {
                  setImage(e.target.value);
                }}
                placeholder="Department"
              />
            </div>

            
            <button
              type="submit"
              id="product-details-buy-now"
              className="btn product-details-buy-now w-100"
              onClick={saveProduct}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StoreAddProductForm;
