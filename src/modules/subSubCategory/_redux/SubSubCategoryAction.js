import * as Types from "./Types";
import Axios from "axios";
import { showToast } from "src/utils/ToastHelper";
//test//est//
export const SubmitSubSubCategory = (subSubCategory, subCategory, subCategoryId, category, categoryId) => (dispatch) => {
  if (subSubCategory.length === 0) {
    showToast("error", "Sub Sub category name shouldn't be empty");
    return 0;
  } else if (subCategory.length === 0) {
    showToast("error", "You should select sub category");
    return 0;
  } else if (category.length === 0) {
    showToast("error", "You Should Select Category Name");
    return 0;
  }
  const url = `${process.env.REACT_APP_API_URL}sub-sub-category`;
  dispatch({ type: Types.IS_CREATE_SUB_SUB_CATEGORY, payload: true });
  const postData = {
    categoryName: category,
    categoryId: categoryId,
    categoryImgUrl: "https://picsum.photos/200",
    subCategoryName: subCategory,
    subCategoryId: subCategoryId,
    subCategoryImgUrl: "https://picsum.photos/200",
    subSubCategoryImgUrl: "https://picsum.photos/200",
    subSubCategoryName: subSubCategory
  };
  try {
    Axios.post(url, postData)
      .then((res) => {
        if (res.data.status) {
          showToast("success", res.data.message);
          dispatch({ type: Types.IS_CREATE_SUB_SUB_CATEGORY, payload: false });
          dispatch({ type: Types.AFTER_CREATED, payload: true });
        } else {
          showToast("error", res.data.message);
          dispatch({ type: Types.IS_CREATE_SUB_SUB_CATEGORY, payload: false });
        }
      })
      .catch((err) => {
        dispatch({ type: Types.IS_CREATE_SUB_SUB_CATEGORY, payload: false });
        const message = JSON.parse(err.request.response).message;
        showToast("error", message);
      });
  } catch (error) {
    dispatch({ type: Types.IS_CREATE_SUB_SUB_CATEGORY, payload: false });
    showToast("error", "Something went wrong");
  }
};
export const AfterCreatedFalse = () => (dispatch) => {
  dispatch({ type: Types.AFTER_CREATED, payload: false })
}
export const SubSubCategoryUpdate = (subSubCategory, subCategory, subCategoryId, category, categoryId, id) => (dispatch) => {
  if (subSubCategory.length === 0) {
    showToast("error", "Sub Sub category name shouldn't be empty");
    return 0;
  } else if (subCategory.length === 0) {
    showToast("error", "You should select sub category");
    return 0;
  } else if (category.length === 0) {
    showToast("error", "You Should Select Category Name");
    return 0;
  }
  const url = `${process.env.REACT_APP_API_URL}sub-sub-category/${id}`;
  dispatch({ type: Types.IS_UPDATE_SUB_SUB_CATEGORY, payload: true });
  const postData = {
    categoryName: category,
    categoryId: categoryId,
    categoryImgUrl: "https://picsum.photos/200",
    subCategoryName: subCategory,
    subCategoryId: subCategoryId,
    subCategoryImgUrl: "https://picsum.photos/200",
    subSubCategoryImgUrl: "https://picsum.photos/200",
    subSubCategoryName: subSubCategory
  };
  try {
    Axios.put(url, postData)
      .then((res) => {
        if (res.data.status) {
          showToast("success", res.data.message);
          dispatch({ type: Types.IS_UPDATE_SUB_SUB_CATEGORY, payload: false });
          dispatch({ type: Types.AFTER_UPDATED, payload: true });
        } else {
          showToast("error", res.data.message);
          dispatch({ type: Types.IS_UPDATE_SUB_SUB_CATEGORY, payload: false });
        }
      })
      .catch((err) => {
        dispatch({ type: Types.IS_UPDATE_SUB_SUB_CATEGORY, payload: false });
        const message = JSON.parse(err.request.response).message;
        showToast("error", message);
      });
  } catch (error) {
    dispatch({ type: Types.IS_UPDATE_SUB_SUB_CATEGORY, payload: false });
    showToast("error", "Something went wrong");
  }
};
export const AfterUpdatedFalse = () => (dispatch) => {
  dispatch({ type: Types.AFTER_UPDATED, payload: false })
}
export const GetSubSubCategoryList = () => (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}sub-sub-category`;
  try {
    Axios.get(url).then((res) => {
      if (res.data.status) {
        dispatch({ type: Types.SUB_SUB_CATEGORY_LIST, payload: res.data.result });
      }
    });
  } catch (error) {
    showToast("error", "Something went wrong");
  }
};
export const SubSubCategoryDelete = (id) => (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}sub-sub-category/${id}`;
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
export const SubSubCategoryByCategoryId = (id) => (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}sub-sub-category/by-category/${id}`;
  try {
    Axios.get(url).then((res) => {
      if (res.data.status) {
        // showToast("success", res.data.message);
        dispatch({ type: Types.SUB_SUB_CATEGORY_LIST, payload: res.data.result });
      } else {
        showToast("error", "Something went wrong");
      }
    });
  } catch (error) {
    showToast("error", "Something went wrong");
  }
};
export const SubSubCategoryBySubCategoryId = (id) => (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}sub-sub-category/by-sub-category/${id}`;
  try {
    Axios.get(url).then((res) => {
      if (res.data.status) {
        // showToast("success", res.data.message);
        dispatch({ type: Types.SUB_SUB_CATEGORY_LIST, payload: res.data.result });
      } else {
        showToast("error", "Something went wrong");
      }
    });
  } catch (error) {
    showToast("error", "Something went wrong");
  }
};