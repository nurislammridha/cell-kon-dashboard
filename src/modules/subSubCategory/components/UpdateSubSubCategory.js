import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AfterUpdatedFalse, SubSubCategoryUpdate } from "../_redux/SubSubCategoryAction";
import { GetCategoryList } from "src/modules/category/_redux/CategoryAction";
import Select from "react-select";
import { getCategoryOption, getSubCategoryOption } from "src/modules/product/_redux/ProductAction";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { SubCategoryByCategoryId } from "src/modules/subCategory/_redux/SubCategoryAction";

const UpdateSubSubCategory = () => {
  const { id } = useParams()
  const history = useHistory()
  const location = useLocation()
  const [subSubCategory, setSubSubCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [subCategoryId, setSubCategoryId] = useState("");
  const [category, setCategory] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const isUpdate = useSelector((state) => state.subSubCategoryInfo.isUpdate);
  const afterUpdated = useSelector((state) => state.subSubCategoryInfo.afterUpdated);
  const categoryArrList = useSelector(
    (state) => state.categoryInfo.categoryList
  );
  const subCategoryArrList = useSelector(
    (state) => state.subCategoryInfo.sunCategoryList
  );
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(SubSubCategoryUpdate(subSubCategory, subCategory, subCategoryId, category, categoryId, id));
  };
  useEffect(() => {
    if (afterUpdated) {
      history.push('/sub-sub-category')
      dispatch(AfterUpdatedFalse())
    }
    setSubSubCategory(location?.state?.data?.subSubCategoryName)
    setSubCategory(location?.state?.data?.subCategoryName)
    setSubCategoryId(location?.state?.data?.subCategoryId)
    setCategory(location?.state?.data?.categoryName)
    setCategoryId(location?.state?.data?.categoryId)
  }, [afterUpdated, id])
  useEffect(() => {
    dispatch(GetCategoryList());
  }, []);
  useEffect(() => {
    subCategoryId.length > 0 && dispatch(SubCategoryByCategoryId(categoryId));
  }, [subCategoryId]);
  return (
    <>
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <h4 className="mb-3">Update Sub Sub Category</h4>
          <div>
            <h6 >Select Category</h6>
            <Select
              options={getCategoryOption(categoryArrList)}
              value={{ label: category }}
              onChange={(e) => {
                setCategory(e.label);
                setCategoryId(e.value);
                setSubCategory("");
                setSubCategoryId("");
              }}
            />
          </div>
          <div className="mt-3">
            <h6 >Select Sub Category</h6>
            <Select
              options={getSubCategoryOption(subCategoryArrList)}
              value={{ label: subCategory }}
              onChange={(e) => {
                setSubCategory(e.label);
                setSubCategoryId(e.value);
              }}
            />
          </div>
          <div className="mt-3">
            <h6 className="mb-3">Sub Category Name</h6>
            <input
              className="form-control"
              value={subSubCategory}
              placeholder="enter sub sub category name"
              onChange={(e) => setSubSubCategory(e.target.value)}
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

export default UpdateSubSubCategory;
