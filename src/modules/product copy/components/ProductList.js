import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useHistory } from "react-router-dom";
import {
  getCategoryOption,
  GetProductByCategory,
  GetproductList,
  PreUpdateProduct,
  ProductDelete,
} from "../_redux/ProductAction";
import Select from "react-select";
import { GetCategoryList } from "src/modules/category/_redux/CategoryAction";
const ProductList = () => {
  const history = useHistory();
  const [category, setCategory] = useState("");
  const productArrList = useSelector((state) => state.productInfo.productList);
  const categoryArrList = useSelector(
    (state) => state.categoryInfo.categoryList
  );
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(GetproductList());
  }, []);
  const handleDelete = (id) => {
    confirmAlert({
      title: "Confirm To Delete",
      message: `Are you sure to delete this product?`,
      buttons: [
        {
          label: "Yes",
          onClick: () => dispatch(ProductDelete(id)),
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
    dispatch(GetCategoryList());
  }, []);
  return (
    <>
      <div className="row alert alert-secondary">
        <div className="col-sm-2">
          <h6>Product List</h6>
        </div>
        <div className="col-sm-2">
          <h6>Select Category</h6>
        </div>
        <div className="col-sm-2">
          <Select
            options={getCategoryOption(categoryArrList)}
            value={{ label: category.label }}
            onChange={(e) => setCategory(e)}
          />
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
                <th>Bangla Name</th>
                <th>Category</th>
                <th>Discount</th>
                <th>Code</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Photo</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {productArrList.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.productName}</td>
                  <td>{item.productNameBn}</td>
                  <td>{item.categoryName}</td>
                  <td>{item.discountPrice}</td>
                  <td>{item.productCode}</td>
                  <td>{item.priority}</td>
                  <td>{item.isActive === "true" ? "ON" : "OFF"}</td>
                  <td>
                    <img
                      src={
                        process.env.REACT_APP_IMG_URL +
                        item.productImage.substring(2)
                      }
                      width="60"
                      height="40"
                    />
                  </td>
                  <td>
                    <a
                      className="btn btn-outline-success btn-sm mr-2"
                      onClick={() => handleEdit(item)}
                    >
                      <i className="fa fa-pencil"></i>
                    </a>
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

export default ProductList;
