import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AfterCreatedFalse, SubmitCategory } from "../_redux/CategoryAction";

const CreateCategory = () => {
  const [category, setCategory] = useState("");
  const isCategory = useSelector((state) => state.categoryInfo.isCategory);
  const afterCreated = useSelector((state) => state.categoryInfo.afterCreated);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(SubmitCategory(category));
  };
  useEffect(() => {
    if (afterCreated) {
      setCategory("")
      dispatch(AfterCreatedFalse())
    }
  }, [afterCreated])

  return (
    <>
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <div>
            <h6 className="mb-3">Category Name</h6>
            <input
              className="form-control"
              value={category}
              placeholder="enter category name"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          {isCategory ? (
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

export default CreateCategory;
