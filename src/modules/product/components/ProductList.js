import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useHistory } from "react-router-dom";
import {
  GetProductByCategory,
  GetProductList,
  PreUpdateProduct,
  RemoveProImg,
} from "../_redux/ProductAction";
const ProductList = () => {
  const history = useHistory();
  const [category, setCategory] = useState("");
  const productArrList = useSelector((state) => state.productInfo.productList);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(GetproductList());
  }, []);
  const handleDelete = (item) => {
    confirmAlert({
      title: "Confirm To Delete",
      message: `Are you sure to delete this product?`,
      buttons: [
        {
          label: "Yes",
          onClick: () => dispatch(RemoveProImg(item)),
        },
        {
          label: "No",
        },
      ],
    });
  };
  const handleEdit = (data) => {
    dispatch(PreUpdateProduct(data));
    history.push("/product-update");
  };
  useEffect(() => {
    if (category && category.label.length > 0) {
      dispatch(GetProductByCategory(category.value));
    }
  }, [category]);
  useEffect(() => {
    dispatch(GetProductList());
  }, []);
  return (
    <>
      <div className="row alert alert-secondary">
        <div className="col-sm-2">
          <h6>Product List</h6>
        </div>
        <div className="col-sm-2">
          {/* <h6>Select Category</h6> */}
        </div>
        <div className="col-sm-2">
          {/* <Select
            options={getCategoryOption(categoryArrList)}
            value={{ label: category.label }}
            onChange={(e) => setCategory(e)}
          /> */}
        </div>
        <div className="col-sm-4"></div>
        <div className="col-sm-2">
          <a
            className="btn btn-success btn-sm text-light"
            onClick={() => history.push("/product-add")}
          >
            Add Product
          </a>
        </div>
      </div>
      <div className="mt-3">
        {productArrList != null && productArrList.length > 0 && (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>SL</th>
                <th>Name</th>
                <th>Mrp</th>
                <th>Quantity</th>
                <th>Seller</th>
                <th>Category</th>
                <th>ICON</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {productArrList.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.productName}</td>
                  <td>{item.mrp}</td>
                  <td>{item.availableQuantity}</td>
                  <td>{item.sellerName}</td>
                  <td>{item.categoryName}</td>
                  <td>
                    <img
                      src={item.productIcon.url}
                      width="60"
                      height="40"
                    />
                  </td>
                  <td>
                    {/* <a
                      className="btn btn-outline-success btn-sm mr-2"
                      onClick={() => handleEdit(item)}
                    >
                      <i className="fa fa-pencil"></i>
                    </a> */}
                    <a
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(item)}
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

export default ProductList;
