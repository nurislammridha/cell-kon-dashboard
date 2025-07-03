import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { AfterDeletedFalse, SubSubCategoryDelete, GetSubSubCategoryList } from "../_redux/SubSubCategoryAction";
import { useHistory } from "react-router-dom";
const SubSubCategoryList = () => {
  const history = useHistory();
  const subSubCategoryArrList = useSelector(
    (state) => state.subSubCategoryInfo.subSubCategoryList
  );
  const afterDeleted = useSelector(
    (state) => state.subSubCategoryInfo.afterDeleted
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetSubSubCategoryList());
  }, []);
  useEffect(() => {
    if (afterDeleted) {
      dispatch(GetSubSubCategoryList());
      dispatch(AfterDeletedFalse());
    }

  }, [afterDeleted]);
  const handleDelete = (id) => {
    confirmAlert({
      title: "Confirm To Delete",
      message: `Are you sure to delete this sub sub category?`,
      buttons: [
        {
          label: "Yes",
          onClick: () => dispatch(SubSubCategoryDelete(id)),
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
        <h4>Sub Sub Category List</h4>
        <a
          className="btn btn-success btn-sm text-light"
          onClick={() => history.push("/sub-sub-category-add")}
        >
          Add
        </a>
      </div>
      <div className="mt-3">
        {subSubCategoryArrList != null && subSubCategoryArrList.length > 0 && (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>SL</th>
                <th>Sub Sub Category</th>
                <th>Sub Category</th>
                <th>Category</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {subSubCategoryArrList.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.subSubCategoryName}</td>
                  <td>{item.subCategoryName}</td>
                  <td>{item.categoryName}</td>
                  <td>{item.isActive ? "Active" : "Inactive"}</td>
                  <td>
                    <a
                      className="btn btn-outline-success btn-sm mr-2"
                      onClick={() => history.push({ pathname: `/sub-sub-category-edit/${item._id}`, state: { data: item } })}
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

export default SubSubCategoryList;
