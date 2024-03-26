import * as Types from "./Types";
import Axios from "axios";
import { showToast } from "src/utils/ToastHelper";
//test//est//
export const SubmitBrand = (brand) => (dispatch) => {
  if (brand.length === 0) {
    showToast("error", "Brand shouldn't be empty");
    return 0;
  }
  const url = `${process.env.REACT_APP_API_URL}brand`;
  dispatch({ type: Types.IS_CREATE_BRAND, payload: true });
  const postData = {
    brandName: brand
  };
  try {
    Axios.post(url, postData)
      .then((res) => {
        if (res.data.status) {
          showToast("success", res.data.message);
          dispatch({ type: Types.IS_CREATE_BRAND, payload: false });
          dispatch({ type: Types.AFTER_CREATED, payload: true });
        } else {
          showToast("error", res.data.message);
          dispatch({ type: Types.IS_CREATE_BRAND, payload: false });
        }
      })
      .catch((err) => {
        dispatch({ type: Types.IS_CREATE_BRAND, payload: false });
        const message = JSON.parse(err.request.response).message;
        showToast("error", message);
      });
  } catch (error) {
    dispatch({ type: Types.IS_CREATE_BRAND, payload: false });
    showToast("error", "Something went wrong");
  }
};
//Update brand
export const UpdateBrandData = (brand, id) => (dispatch) => {
  if (brand.length === 0) {
    showToast("error", "Brand shouldn't be empty");
    return 0;
  }
  const url = `${process.env.REACT_APP_API_URL}brand/${id}`;
  dispatch({ type: Types.IS_UPDATE_BRAND, payload: true });
  const postData = {
    brandName: brand
  };
  try {
    Axios.put(url, postData)
      .then((res) => {
        if (res.data.status) {
          showToast("success", res.data.message);
          dispatch({ type: Types.IS_UPDATE_BRAND, payload: false });
          dispatch({ type: Types.AFTER_UPDATED, payload: true });
        } else {
          showToast("error", res.data.message);
          dispatch({ type: Types.IS_UPDATE_BRAND, payload: false });
        }
      })
      .catch((err) => {
        dispatch({ type: Types.IS_UPDATE_BRAND, payload: false });
        const message = JSON.parse(err.request.response).message;
        showToast("error", message);
      });
  } catch (error) {
    dispatch({ type: Types.IS_UPDATE_BRAND, payload: false });
    showToast("error", "Something went wrong");
  }
};
export const AfterUpdatedFalse = () => (dispatch) => {
  dispatch({ type: Types.AFTER_UPDATED, payload: false })
}
export const AfterCreatedFalse = () => (dispatch) => {
  dispatch({ type: Types.AFTER_CREATED, payload: false })
}
export const GetBrandList = () => (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}brand`;
  try {
    Axios.get(url).then((res) => {
      if (res.data.status) {
        dispatch({ type: Types.BRAND_LIST, payload: res.data.result });
      }
    });
  } catch (error) {
    showToast("error", "Something went wrong");
  }
};
export const BrandDelete = (id) => (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}brand/${id}`;
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