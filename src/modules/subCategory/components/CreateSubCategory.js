import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AfterCreatedFalse, SubmitSubCategory } from "../_redux/SubCategoryAction";
import { GetCategoryList } from "src/modules/category/_redux/CategoryAction";
import Select from "react-select";
import { getCategoryOption } from "src/modules/product/_redux/ProductAction";

const CreateSubCategory = () => {
  const [subCategory, setSubCategory] = useState("");
  const [category, setCategory] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const isSubCategory = useSelector((state) => state.subCategoryInfo.isSubCategory);
  const afterCreated = useSelector((state) => state.categoryInfo.afterCreated);
  const categoryArrList = useSelector(
    (state) => state.categoryInfo.categoryList
  );
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(SubmitSubCategory(subCategory, category, categoryId));
  };
  useEffect(() => {
    if (afterCreated) {
      setSubCategory("")
      setCategory("")
      setCategoryId("")
      dispatch(AfterCreatedFalse())
    }
  }, [afterCreated])
  useEffect(() => {
    dispatch(GetCategoryList());
  }, []);
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
              }}
            />
          </div>
          <div className="mt-3">
            <h6 className="mb-3">Sub Category Name</h6>
            <input
              className="form-control"
              value={subCategory}
              placeholder="enter sub category name"
              onChange={(e) => setSubCategory(e.target.value)}
            />
          </div>

          {isSubCategory ? (
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

export default CreateSubCategory;
