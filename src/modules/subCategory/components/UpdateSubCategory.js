import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AfterUpdatedFalse, SubCategoryUpdate, SubmitSubCategory } from "../_redux/SubCategoryAction";
import { GetCategoryList } from "src/modules/category/_redux/CategoryAction";
import Select from "react-select";
import { getCategoryOption } from "src/modules/product/_redux/ProductAction";
import { useHistory, useLocation, useParams } from "react-router-dom";

const UpdateSubCategory = () => {
  const { id } = useParams()
  const history = useHistory()
  const location = useLocation()
  const [subCategory, setSubCategory] = useState("");
  const [category, setCategory] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const isUpdate = useSelector((state) => state.subCategoryInfo.isUpdate);
  const afterUpdated = useSelector((state) => state.categoryInfo.afterUpdated);
  const categoryArrList = useSelector(
    (state) => state.categoryInfo.categoryList
  );
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(SubCategoryUpdate(subCategory, category, categoryId, id));
  };
  useEffect(() => {
    if (afterUpdated) {
      history.push('/sub-category')
      dispatch(AfterUpdatedFalse())
    }
    setSubCategory(location?.state?.data?.subCategoryName)
    setCategory(location?.state?.data?.categoryName)
    setCategoryId(location?.state?.data?.categoryId)
  }, [afterUpdated, id])
  useEffect(() => {
    dispatch(GetCategoryList());
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <h4 className="mb-3">Update Sub Category</h4>
          <div>
            <h6 >Select Category</h6>
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

export default UpdateSubCategory;
