import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { AfterDeletedFalse, BrandDelete, GetBrandList } from "../_redux/BrandAction";
import { useHistory } from "react-router-dom";
const BrandList = () => {
  const history = useHistory();
  const brandArrList = useSelector(
    (state) => state.brandInfo.brandList
  );
  const afterDeleted = useSelector(
    (state) => state.brandInfo.afterDeleted
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetBrandList());
  }, []);
  useEffect(() => {
    if (afterDeleted) {
      dispatch(GetBrandList());
      dispatch(AfterDeletedFalse());
    }

  }, [afterDeleted]);
  const handleDelete = (id) => {
    confirmAlert({
      title: "Confirm To Delete",
      message: `Are you sure to delete this brand?`,
      buttons: [
        {
          label: "Yes",
          onClick: () => dispatch(BrandDelete(id)),
        },
        {
          label: "No",
        },
      ],
    });
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <h4>Brand List</h4>
        <a
          className="btn btn-success btn-sm text-light"
          onClick={() => history.push("/brand-add")}
        >
          Add Brand
        </a>
      </div>
      <div className="mt-3">
        {brandArrList != null && brandArrList.length > 0 && (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>SL</th>
                <th>Brand Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {brandArrList.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.brandName}</td>
                  <td>{item.isActive ? "Active" : "Inactive"}</td>
                  <td>
                    <a
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(item._id)}
                    >
                      <i className="fa fa-trash"></i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default BrandList;
