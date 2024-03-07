import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AfterCreatedFalse, SubmitBrand } from "../_redux/BrandAction";

const CreateBrand = () => {
  const [brand, setBrand] = useState("");
  const isBrand = useSelector((state) => state.brandInfo.isBrand);
  const afterCreated = useSelector((state) => state.brandInfo.afterCreated);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(SubmitBrand(brand));
  };
  useEffect(() => {
    if (afterCreated) {
      setBrand("")
      dispatch(AfterCreatedFalse())
    }
  }, [afterCreated])

  return (
    <>
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <div>
            <h6 className="mb-3">Brand Name</h6>
            <input
              className="form-control"
              value={brand}
              placeholder="enter brand name"
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>

          {isBrand ? (
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

export default CreateBrand;
