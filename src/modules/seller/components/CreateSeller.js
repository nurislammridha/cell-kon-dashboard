import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AfterCreatedFalse, GetSellerInput, SubmitSeller } from "../_redux/SellerAction";

const CreateSeller = () => {
  const sellerInput = useSelector((state) => state.sellerInfo.sellerInput);
  const isSeller = useSelector((state) => state.sellerInfo.isSeller);
  const dispatch = useDispatch();
  const handleChange = (name, value) => {
    dispatch(GetSellerInput(name, value));
  };
  const handleSubmit = () => {
    dispatch(SubmitSeller(sellerInput));
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <div>
            <h6 className="mb-3">Seller Name</h6>
            <input
              className="form-control"
              value={sellerInput.sellerName}
              type="text"
              placeholder="enter seller name"
              onChange={(e) => handleChange("sellerName", e.target.value)}
            />
          </div>
          <div className="mt-3">
            <h6 className="mb-3">Seller Address</h6>
            <input
              className="form-control"
              value={sellerInput.sellerAddress}
              type="text"
              placeholder="enter seller address"
              onChange={(e) => handleChange("sellerAddress", e.target.value)}
            />
          </div>
          <div className="mt-3">
            <h6 className="mb-3">Shop Name</h6>
            <input
              className="form-control"
              value={sellerInput.shopName}
              type="text"
              placeholder="enter shop name"
              onChange={(e) => handleChange("shopName", e.target.value)}
            />
          </div>
          <div className="mt-3">
            <h6 className="mb-3">Delivery Period</h6>
            <input
              className="form-control"
              value={sellerInput.shopName + " Days"}
              type="number"
              placeholder="enter delivery periods in days"
              onChange={(e) => handleChange("deliveryPeriod", e.target.value)}
            />
          </div>
          <div className="mt-3">
            <h6 className="mb-3">Seller Phone</h6>
            <input
              className="form-control"
              value={sellerInput.sellerPhone}
              type="text"
              placeholder="01XXXXXXXXX"
              onChange={(e) => handleChange("sellerPhone", e.target.value)}
            />
          </div>
          <div className="mt-3">
            <h6 className="mb-3">Seller Email</h6>
            <input
              className="form-control"
              value={sellerInput.sellerPhone}
              type="text"
              placeholder="01XXXXXXXXX"
              onChange={(e) => handleChange("sellerPhone", e.target.value)}
            />
          </div>

          {isSeller ? (
            <a className="btn btn-success btn-sm mt-3 text-light">
              {" "}
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            </a>
          ) : (
            <a
              className="btn btn-success btn-sm mt-3 text-light"
              onClick={() => handleSubmit()}
            >
              SUBMIT
            </a>
          )}
        </div>
        <div className="col-sm-2"></div>
      </div>
    </>
  );
};

export default CreateSeller;
