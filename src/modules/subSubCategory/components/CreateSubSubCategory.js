import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AfterCreatedFalse, SubmitSubSubCategory } from "../_redux/SubSubCategoryAction";
import { GetCategoryList } from "src/modules/category/_redux/CategoryAction";
import Select from "react-select";
import { getCategoryOption, getSubCategoryOption } from "src/modules/product/_redux/ProductAction";
import { SubCategoryByCategoryId } from "src/modules/subCategory/_redux/SubCategoryAction";

const CreateSubSubCategory = () => {
  const [subSubCategory, setSubSubCategory] = useState("");
  const [category, setCategory] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [subCategoryId, setSubCategoryId] = useState("");
  const isSubSubCategory = useSelector((state) => state.subSubCategoryInfo.isSubSubCategory);
  const afterCreated = useSelector((state) => state.subSubCategoryInfo.afterCreated);
  const categoryArrList = useSelector(
    (state) => state.categoryInfo.categoryList
  );
  const subCategoryArrList = useSelector(
    (state) => state.subCategoryInfo.subCategoryList
  );
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(SubmitSubSubCategory(subSubCategory, subCategory, subCategoryId, category, categoryId));
  };
  useEffect(() => {
    if (afterCreated) {
      setSubSubCategory("")
      setSubCategory("")
      setSubCategoryId("")
      setCategory("")
      setCategoryId("")
      dispatch(AfterCreatedFalse())
    }
  }, [afterCreated])
  useEffect(() => {
    dispatch(GetCategoryList());
  }, []);
  useEffect(() => {
    categoryId.length > 0 && dispatch(SubCategoryByCategoryId(categoryId));
  }, [categoryId]);
  return (
    <>
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <div>
            <h6>Select Category</h6>
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
            <h6>Select Sub Category</h6>
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
            <h6 className="mb-3">Sub Sub Category Name</h6>
            <input
              className="form-control"
              value={subSubCategory}
              placeholder="enter sub category name"
              onChange={(e) => setSubSubCategory(e.target.value)}
            />
          </div>

          {isSubSubCategory ? (
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

export default CreateSubSubCategory;
