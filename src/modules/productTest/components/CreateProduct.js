import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { GetCategoryList } from "src/modules/category/_redux/CategoryAction";
import {
  getCategoryOption,
  GetProductInput,
  SubmitProduct,
} from "../_redux/ProductAction";
const CreateProduct = () => {
  const dispatch = useDispatch();
  const categoryArrList = useSelector(
    (state) => state.categoryInfo.categoryList
  );
  const productInput = useSelector((state) => state.productInfo.productInput);
  const isCreateProduct = useSelector(
    (state) => state.productInfo.isCreateProduct
  );
  // const [category, setCategory] = useState("");
  // const isCategory = useSelector((state) => state.categoryInfo.isCategory);
  // const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(SubmitProduct(productInput));
  };
  const handleChangeInput = (name, value, e) => {
    dispatch(GetProductInput(name, value, e));
  };
  useEffect(() => {
    dispatch(GetCategoryList());
  }, []);

  const prio = [
    { label: "High", value: "High" },
    { label: "Low", value: "Low" },
  ];
  console.log("productInput", productInput);
  return (
    <>
      <h6 className="alert alert-secondary text-center">CREATE PRODUCT</h6>
      <div className="row">
        <div className="col-sm-6">
          <div>
            <h6>Product Name</h6>
            <input
              className="form-control"
              type="text"
              value={productInput.productName}
              onChange={(e) => handleChangeInput("productName", e.target.value)}
            />
          </div>
          <div className="mt-2">
            <h6>Product MRP</h6>
            <input
              className="form-control"
              type="number"
              value={productInput.productMRP}
              onChange={(e) => handleChangeInput("productMRP", e.target.value)}
            />
          </div>
          <div className="mt-2">
            <h6>Discount Price</h6>
            <input
              className="form-control"
              type="number"
              value={productInput.discountPrice}
              onChange={(e) =>
                handleChangeInput("discountPrice", e.target.value)
              }
            />
          </div>
          <div className="mt-2">
            <h6>Product Code</h6>
            <input
              className="form-control"
              type="text"
              value={productInput.productCode}
              onChange={(e) => handleChangeInput("productCode", e.target.value)}
            />
          </div>
          <div className="mt-2">
            <h6>Product Image</h6>
            <input
              type="file"
              className="d-none"
              accept="image/*"
              id="file-upload"
              onChange={(e) =>
                handleChangeInput("productImage", e.target.files[0], e)
              }
            />
            <label
              for="file-upload"
              className="btn btn-outline-warning ml-3 mr-3"
              style={{ fontSize: "15px" }}
            >
              <i class="fa fa-upload"></i>
            </label>
            <img src={productInput.imagePreviewUrl} width="130" />
          </div>
        </div>
        <div className="col-sm-6">
          <div>
            <h6>Product Name Bangla</h6>
            <input
              className="form-control"
              type="text"
              value={productInput.productNameBn}
              onChange={(e) =>
                handleChangeInput("productNameBn", e.target.value)
              }
            />
          </div>
          <div className="mt-2">
            <h6>Product MRP Bangla</h6>
            <input
              className="form-control"
              type="text"
              value={productInput.productMRPBn}
              onChange={(e) =>
                handleChangeInput("productMRPBn", e.target.value)
              }
            />
          </div>
          <div className="mt-2">
            <h6>Discount Price Bangla</h6>
            <input
              className="form-control"
              type="text"
              value={productInput.discountPriceBn}
              onChange={(e) =>
                handleChangeInput("discountPriceBn", e.target.value)
              }
            />
          </div>
          <div className="mt-2">
            <h6>Select Category</h6>
            <Select
              options={getCategoryOption(categoryArrList)}
              value={{ label: productInput.categoryName }}
              onChange={(e) => {
                handleChangeInput("categoryName", e.label);
                handleChangeInput("categoryId", e.value);
                handleChangeInput("categoryNameBn", e.categoryNameBn);
              }}
            />
          </div>

          <div className="mt-2">
            <h6>Priority</h6>
            <Select
              options={prio}
              value={{ label: productInput.priority }}
              onChange={(e) => {
                handleChangeInput("priority", e.label);
              }}
            />
          </div>
          <div className="mt-2 d-flex justify-content-end">
            {isCreateProduct ? (
              <a className="btn btn-outline-success mt-3">
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              </a>
            ) : (
              <a
                className="btn btn-outline-success mt-3"
                onClick={() => handleSubmit()}
              >
                Submit
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProduct;
