import * as Types from "./Types";
import Axios from "axios";
import { showToast } from "src/utils/ToastHelper";
//test//est//
export const SubmitCategory = (category, categoryBn) => (dispatch) => {
  if (category.length === 0) {
    showToast("error", "Category shouldn't be empty");
    return 0;
  } else if (categoryBn.length === 0) {
    showToast("error", "Bangla category shouldn't be empty");
    return 0;
  }
  const url = `${process.env.REACT_APP_API_URL}category`;
  dispatch({ type: Types.IS_CREATE_CATEGORY, payload: true });
  const postData = {
    categoryName: category,
    categoryNameBn: categoryBn,
    isActive: true,
  };
  try {
    Axios.post(url, postData)
      .then((res) => {
        if (res.data.status) {
          showToast("success", res.data.message);
          dispatch({ type: Types.IS_CREATE_CATEGORY, payload: false });
        } else {
          showToast("error", res.data.message);
          dispatch({ type: Types.IS_CREATE_CATEGORY, payload: false });
        }
      })
      .catch((err) => {
        dispatch({ type: Types.IS_CREATE_CATEGORY, payload: false });
        const message = JSON.parse(err.request.response).message;
        showToast("error", message);
      });
  } catch (error) {
    dispatch({ type: Types.IS_CREATE_CATEGORY, payload: false });
    showToast("error", "Something went wrong");
  }
};
export const GetCategoryList = () => (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}category`;
  try {
    Axios.get(url).then((res) => {
      if (res.data.status) {
        dispatch({ type: Types.CATEGORY_LIST, payload: res.data.result });
      }
    });
  } catch (error) {
    showToast("error", "Something went wrong");
  }
};
export const CategoryDelete = (id) => (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}category/${id}`;
  try {
    Axios.delete(url).then((res) => {
      if (res.data.status) {
        showToast("error", res.data.message);
        GetCategoryList();
      }
    });
  } catch (error) {
    showToast("error", "Something went wrong");
  }
};
