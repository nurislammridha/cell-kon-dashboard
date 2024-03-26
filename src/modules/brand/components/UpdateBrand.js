import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AfterCreatedFalse, AfterUpdatedFalse, UpdateBrandData } from "../_redux/BrandAction";
import { useHistory, useLocation, useParams } from "react-router-dom";

const UpdateBrand = () => {
  const [brand, setBrand] = useState("");
  const isUpdate = useSelector((state) => state.brandInfo.isUpdate);
  const afterUpdated = useSelector((state) => state.brandInfo.afterUpdated);
  const dispatch = useDispatch();
  const history = useHistory()
  const { id } = useParams()
  const location = useLocation();
  const handleSubmit = () => {
    dispatch(UpdateBrandData(brand, id));
  };
  useEffect(() => {
    if (afterUpdated) {
      history.push('/brand')
      dispatch(AfterUpdatedFalse())
    }
  }, [afterUpdated])
  useEffect(() => {
    setBrand(location?.state?.brand)
  }, [id])
  return (
    <>

      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <h3 className="pb-4">Update Brand</h3>
          <div>
            <h6 className="mb-3">Brand Name</h6>
            <input
              className="form-control"
              value={brand}
              placeholder="enter brand name"
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>

          {isUpdate ? (
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
              UPDATE
            </a>
          )}
        </div>
        <div className="col-sm-2"></div>
      </div>
    </>
  );
};

export default UpdateBrand;
