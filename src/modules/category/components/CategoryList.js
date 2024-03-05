import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { CategoryDelete, GetCategoryList } from "../_redux/CategoryAction";
import { useHistory } from "react-router-dom";
const CategoryList = () => {
  const history = useHistory();
  const categoryArrList = useSelector(
    (state) => state.categoryInfo.categoryList
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCategoryList());
  }, []);
  const handleDelete = (id) => {
    confirmAlert({
      title: "Confirm To Delete",
      message: `Are you sure to delete this category?`,
      buttons: [
        {
          label: "Yes",
          onClick: () => dispatch(CategoryDelete(id)),
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
        <h4>Category List</h4>
        <a
          className="btn btn-success btn-sm text-light"
          onClick={() => history.push("/category-add")}
        >
          Add Category
        </a>
      </div>
      <div className="mt-3">
        {categoryArrList != null && categoryArrList.length > 0 && (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>SL</th>
                <th>Category Name</th>
                <th>Category Bangla</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {categoryArrList.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.categoryName}</td>
                  <td>{item.categoryNameBn}</td>
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

export default CategoryList;
