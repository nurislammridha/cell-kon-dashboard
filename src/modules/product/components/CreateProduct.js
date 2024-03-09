import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { Form, FormControl } from "react-bootstrap";
import { GetCategoryList } from "src/modules/category/_redux/CategoryAction";
import {
  getBrandOption,
  getCategoryOption,
  getColorOption,
  GetProductInput,
  getSellerOption,
  getSizeOption,
  getSubCategoryOption,
  SubmitProduct,
} from "../_redux/ProductAction";
import demoProduct from '../../../assets/images/demoProduct.jpg'
import { Editor } from "react-draft-wysiwyg";
import { GetSubCategoryList, SubCategoryByCategoryId } from "src/modules/subCategory/_redux/SubCategoryAction";
import { GetSellerList } from "src/modules/seller/_redux/SellerAction";
import { GetBrandList } from "src/modules/brand/_redux/BrandAction";
import { GetSizeList } from "src/modules/size/_redux/SizeAction";
import { GetColorList } from "src/modules/color/_redux/ColorAction";
const CreateProduct = () => {
  const dispatch = useDispatch();
  const categoryArrList = useSelector(
    (state) => state.categoryInfo.categoryList
  );
  const subCategoryArrList = useSelector(
    (state) => state.subCategoryInfo.subCategoryList
  );
  const sellerArrList = useSelector(
    (state) => state.sellerInfo.sellerList
  );
  const brandArrList = useSelector(
    (state) => state.brandInfo.brandList
  );
  const sizeArrList = useSelector(
    (state) => state.sizeInfo.sizeList
  );
  const colorArrList = useSelector(
    (state) => state.colorInfo.colorList
  );
  const productInput = useSelector((state) => state.productInfo.productInput);
  const isCreateProduct = useSelector(
    (state) => state.productInfo.isCreateProduct
  );

  const handleSubmit = () => {
    dispatch(SubmitProduct(productInput));
  };
  const handleChangeInput = (name, value, e) => {
    dispatch(GetProductInput(name, value, e));
  };
  useEffect(() => {
    dispatch(GetCategoryList());
    dispatch(GetSellerList());
    dispatch(GetBrandList());
    dispatch(GetSizeList());
    dispatch(GetColorList());
    // dispatch(GetProductList());
  }, []);
  useEffect(() => {
    if (productInput.categoryName.length > 0) {
      dispatch(SubCategoryByCategoryId(productInput.categoryId));
    }

  }, [productInput]);


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
              placeholder="enter product name"
              value={productInput.productName}
              onChange={(e) => handleChangeInput("productName", e.target.value)}
            />
          </div>
          <div className="mt-2">
            <h6>Product RP</h6>
            <input
              className="form-control"
              type="number"
              placeholder="enter rp"
              value={productInput.rp}
              onChange={(e) => handleChangeInput("rp", e.target.value)}
            />
          </div>
          <div className="mt-2">
            <h6>Product MRP</h6>
            <input
              className="form-control"
              type="number"
              placeholder="enter mrp"
              value={productInput.mrp}
              onChange={(e) => handleChangeInput("mrp", e.target.value)}
            />
          </div>
          <div className="mt-2">
            <h6>Regular Discount in %</h6>
            <input
              className="form-control"
              type="number"
              placeholder="enter regular discount"
              value={productInput.regularDiscount}
              onChange={(e) =>
                handleChangeInput("regularDiscount", e.target.value)
              }
            />
          </div>
          <div className="mt-2">
            <h6>Campaign Discount in %</h6>
            <input
              className="form-control"
              type="number"
              placeholder="enter campaign discount"
              value={productInput.campaignDiscount}
              onChange={(e) =>
                handleChangeInput("campaignDiscount", e.target.value)
              }
            />
          </div>
          <div className="mt-2">
            <h6>Available Quantity</h6>
            <input
              className="form-control"
              type="number"
              placeholder="enter available quantity"
              value={productInput.availableQuantity}
              onChange={(e) =>
                handleChangeInput("availableQuantity", e.target.value)
              }
            />
          </div>

          <div className="mt-2">
            <h6>Product Icon</h6>
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
            {/* <img
              src={productInput.imagePreviewUrl.length > 0 ? productInput.imagePreviewUrl : demoProduct}
              alt="Product Icon"
              className="preview-img"
            /> */}
          </div>
          <div className="mt-2">
            <h6 className="mb-3">Select Products with related colors</h6>
            <div className="row">
              <div className="col-sm-6">
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
                <div>
                  {/* <img
                    src={productInput.imagePreviewUrl.length > 0 ? productInput.imagePreviewUrl : demoProduct}
                    alt="Product Icon"
                    className="preview-mul-img"
                  /> */}
                </div>
              </div>
              <div className="col-sm-6">
                <Select
                  options={getColorOption(colorArrList)}
                  value={{ label: productInput.colorName }}
                  onChange={(e) => {
                    handleChangeInput("colorName", e.label);
                    handleChangeInput("colorId", e.value);
                    handleChangeInput("colorHexCode", e.colorHexCode);
                  }}
                />
                <div className="color-show mt-2" style={{ backgroundColor: productInput.colorHexCode }}></div>
              </div>
            </div>
            <div>
              <a
                className="btn btn-outline-success mt-3"
                onClick={() => handleSubmit()}
              >
                Add
              </a>
            </div>
            <div className="mt-2">
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Color</th>
                    <th>View</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2].map(() => (
                    <tr>
                      <td>
                        <img
                          src={demoProduct}
                          alt="Products"
                          className="tbl-img"
                        />
                      </td>
                      <td>Red</td>
                      <td><div className="tbl-color" style={{ backgroundColor: "red" }}></div></td>
                      <td> <a
                        className="btn btn-danger btn-sm"
                        onClick={() => { }}
                      >
                        <i className="fa fa-trash"></i>
                      </a></td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div>
            <h6>Select Category</h6>
            <Select
              options={getCategoryOption(categoryArrList)}
              value={{ label: productInput.categoryName }}
              onChange={(e) => {
                handleChangeInput("categoryName", e.label);
                handleChangeInput("categoryId", e.value);
                handleChangeInput("subCategoryName", "");
                handleChangeInput("subCategoryId", "");
              }}
            />
          </div>
          <div className="mt-2">
            <h6>Select Sub Category</h6>
            <Select
              options={getSubCategoryOption(subCategoryArrList)}
              value={{ label: productInput.subCategoryName }}
              onChange={(e) => {
                handleChangeInput("subCategoryName", e.label);
                handleChangeInput("subCategoryId", e.value);
              }}
            />
          </div>
          <div className="mt-2">
            <h6>Select Seller</h6>
            <Select
              options={getSellerOption(sellerArrList)}
              value={{ label: productInput.sellerName }}
              onChange={(e) => {
                handleChangeInput("sellerName", e.label);
                handleChangeInput("sellerId", e.value);
              }}
            />
          </div>
          <div className="mt-2">
            <h6>Select Brand</h6>
            <Select
              options={getBrandOption(brandArrList)}
              value={{ label: productInput.brandName }}
              onChange={(e) => {
                handleChangeInput("brandName", e.label);
                handleChangeInput("brandId", e.value);
              }}
            />
          </div>
          <div className="mt-2">
            <h6>Select Available Size</h6>
            <Select
              options={getSizeOption(sizeArrList)}
              value={productInput.size}
              isMulti
              onChange={(e) => {
                handleChangeInput("size", e);
                // handleChangeInput("sizeId", e.value);
              }}
            />
          </div>
          <div className="mt-2">
            <h6>Select Related Products</h6>
            <Select
              options={getCategoryOption(categoryArrList)}
              isDisabled
              value={{ label: [] }}
              isMulti
              onChange={(e) => {
                handleChangeInput("categoryName", e);
              }}
            />
          </div>
          <div className="mt-4">

            <div class="form-group">
              <label htmlFor="discount" className="mr-2">Cash on delivery</label>
              <Form.Check
                inline
                label="Yes"
                name="isAvailableCashOnDelivery"
                type="radio"
                checked={productInput.isAvailableCashOnDelivery === true}
                onChange={(e) => handleChangeInput("isAvailableCashOnDelivery", true)}
              />
              <Form.Check
                inline
                label="No"
                name="isAvailableCashOnDelivery"
                type="radio"
                checked={productInput.isAvailableCashOnDelivery === false}
                onChange={(e) => handleChangeInput("isAvailableCashOnDelivery", false)}
              />
            </div>
          </div>
          <div className="mt-2">
            <div class="form-group">
              <label htmlFor="discount" className="mr-4">Is Campaign &nbsp;&nbsp;</label>
              <Form.Check
                inline
                label="Yes"
                name="isCampaign"
                type="radio"
                checked={productInput.isCampaign === true}
                onChange={(e) => handleChangeInput("isCampaign", true)}
              />
              <Form.Check
                inline
                label="No"
                name="isCampaign"
                type="radio"
                checked={productInput.isCampaign === false}
                onChange={(e) => handleChangeInput("isCampaign", false)}
              />
            </div>
          </div>
          <div className="mt-2">
            <div class="form-group">
              <label htmlFor="discount" className="mr-5">Is Trending</label>
              <Form.Check
                inline
                label="Yes"
                name="isTrendings"
                type="radio"
                checked={productInput.isTrendings === true}
                onChange={(e) => handleChangeInput("isTrendings", true)}
              />
              <Form.Check
                inline
                label="No"
                name="isTrendings"
                type="radio"
                checked={productInput.isTrendings === false}
                onChange={(e) => handleChangeInput("isTrendings", false)}
              />
            </div>
          </div>
          <div className="mt-2">
            <h6>Short Descriptions</h6>
            <textarea
              className="form-control"
              id="sdes"
              rows="17"
              name="shortDescription"
              value={productInput.shortDescription}
              onChange={(e) =>
                handleChangeInput("shortDescription", e.target.value)
              }
            ></textarea>
          </div>

        </div>
      </div>
      <div className="mt-5">
        <h4 className="text-center">Full Description</h4>
        <div className="mt-4">
          <Editor
            wrapperClassName="wrapper"
            editorClassName="editor"
            toolbarClassName="toolbar"
            name="productFullDescription"
            editorState={productInput.productFullDescription}
            onEditorStateChange={(e) =>
              handleChangeInput("productFullDescription", e)
            }
          />
        </div>
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
    </>
  );
};

export default CreateProduct;
