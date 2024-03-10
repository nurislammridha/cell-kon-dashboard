import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { AfterDeletedFalse, SellerDelete, GetSellerList } from "../_redux/SellerAction";
import { useHistory } from "react-router-dom";
const SellerList = () => {
  const history = useHistory();
  const sellerArrList = useSelector(
    (state) => state.sellerInfo.sellerList
  );
  const afterDeleted = useSelector(
    (state) => state.sellerInfo.afterDeleted
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetSellerList());
  }, []);
  useEffect(() => {
    if (afterDeleted) {
      dispatch(GetSellerList());
      dispatch(AfterDeletedFalse());
    }

  }, [afterDeleted]);
  const handleDelete = (id) => {
    confirmAlert({
      title: "Confirm To Delete",
      message: `Are you sure to delete this seller?`,
      buttons: [
        {
          label: "Yes",
          onClick: () => dispatch(SellerDelete(id)),
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
        <h4>Seller List</h4>
        <a
          className="btn btn-success btn-sm text-light"
          onClick={() => history.push("/seller-add")}
        >
          Add Seller
        </a>
      </div>
      <div className="mt-3">
        {sellerArrList != null && sellerArrList.length > 0 && (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>SL</th>
                <th>Name</th>
                <th>Address</th>
                <th>Shop</th>
                <th>Period</th>
                <th>Ratings</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {sellerArrList.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.sellerName}</td>
                  <td>{item.sellerAddress}</td>
                  <td>{item.shopName}</td>
                  <td>{item.deliveryPeriod}</td>
                  <td>{item.sellerRatings}</td>
                  <td>{item.sellerPhone}</td>
                  <td>{item.sellerEmail}</td>
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

export default SellerList;