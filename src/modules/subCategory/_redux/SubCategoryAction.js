import * as Types from "./Types";
import Axios from "axios";
import { showToast } from "src/utils/ToastHelper";
//test//est//
export const SubmitSubCategory = (subCategory, category, categoryId) => (dispatch) => {
  if (subCategory.length === 0) {
    showToast("error", "Sub category name shouldn't be empty");
    return 0;
  } else if (category.length === 0) {
    showToast("error", "You Should Select Category Name");
    return 0;
  }
  const url = `${process.env.REACT_APP_API_URL}sub-category`;
  dispatch({ type: Types.IS_CREATE_SUBCATEGORY, payload: true });
  const postData = {
    categoryName: category,
    categoryId: categoryId,
    subCategoryName: subCategory,
    subCategoryImgUrl: "https://picsum.photos/200",
    categoryImgUrl: "https://picsum.photos/200",
  };
  try {
    Axios.post(url, postData)
      .then((res) => {
        if (res.data.status) {
          showToast("success", res.data.message);
          dispatch({ type: Types.IS_CREATE_SUBCATEGORY, payload: false });
          dispatch({ type: Types.AFTER_CREATED, payload: true });
        } else {
          showToast("error", res.data.message);
          dispatch({ type: Types.IS_CREATE_SUBCATEGORY, payload: false });
        }
      })
      .catch((err) => {
        dispatch({ type: Types.IS_CREATE_SUBCATEGORY, payload: false });
        const message = JSON.parse(err.request.response).message;
        showToast("error", message);
      });
  } catch (error) {
    dispatch({ type: Types.IS_CREATE_SUBCATEGORY, payload: false });
    showToast("error", "Something went wrong");
  }
};
export const AfterCreatedFalse = () => (dispatch) => {
  dispatch({ type: Types.AFTER_CREATED, payload: false })
}
export const SubCategoryUpdate = (subCategory, category, categoryId, id) => (dispatch) => {
  if (subCategory.length === 0) {
    showToast("error", "Sub category name shouldn't be empty");
    return 0;
  } else if (category.length === 0) {
    showToast("error", "You Should Select Category Name");
    return 0;
  }
  const url = `${process.env.REACT_APP_API_URL}sub-category/${id}`;
  dispatch({ type: Types.IS_UPDATE_SUBCATEGORY, payload: true });
  const postData = {
    categoryName: category,
    categoryId: categoryId,
    subCategoryName: subCategory,
    subCategoryImgUrl: "https://picsum.photos/200",
    categoryImgUrl: "https://picsum.photos/200",
  };
  try {
    Axios.put(url, postData)
      .then((res) => {
        if (res.data.status) {
          showToast("success", res.data.message);
          dispatch({ type: Types.IS_UPDATE_SUBCATEGORY, payload: false });
          dispatch({ type: Types.AFTER_UPDATED, payload: true });
        } else {
          showToast("error", res.data.message);
          dispatch({ type: Types.IS_UPDATE_SUBCATEGORY, payload: false });
        }
      })
      .catch((err) => {
        dispatch({ type: Types.IS_UPDATE_SUBCATEGORY, payload: false });
        const message = JSON.parse(err.request.response).message;
        showToast("error", message);
      });
  } catch (error) {
    dispatch({ type: Types.IS_UPDATE_SUBCATEGORY, payload: false });
    showToast("error", "Something went wrong");
  }
};
export const AfterUpdatedFalse = () => (dispatch) => {
  dispatch({ type: Types.AFTER_UPDATED, payload: false })
}
export const GetSubCategoryList = () => (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}sub-category`;
  try {
    Axios.get(url).then((res) => {
      if (res.data.status) {
        dispatch({ type: Types.SUBCATEGORY_LIST, payload: res.data.result });
      }
    });
  } catch (error) {
    showToast("error", "Something went wrong");
  }
};
export const SubCategoryDelete = (id) => (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}sub-category/${id}`;
  try {
    Axios.delete(url).then((res) => {
      if (res.data.status) {
        showToast("success", res.data.message);
        dispatch({ type: Types.AFTER_DELETED, payload: true })
      } else {
        showToast("error", "Something went wrong");
      }
    });
  } catch (error) {
    showToast("error", "Something went wrong");
  }
};
export const AfterDeletedFalse = () => (dispatch) => {
  dispatch({ type: Types.AFTER_DELETED, payload: false })
}
export const SubCategoryByCategoryId = (id) => (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}sub-category/by-category/${id}`;
  try {
    Axios.get(url).then((res) => {
      if (res.data.status) {
        // showToast("success", res.data.message);
        dispatch({ type: Types.SUBCATEGORY_LIST, payload: res.data.result });
      } else {
        showToast("error", "Something went wrong");
      }
    });
  } catch (error) {
    showToast("error", "Something went wrong");
  }
};