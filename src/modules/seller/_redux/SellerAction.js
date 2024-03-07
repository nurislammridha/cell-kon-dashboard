import * as Types from "./Types";
import Axios from "axios";
import { showToast } from "src/utils/ToastHelper";
//test//est//
export const GetSellerInput = (name, value) => (dispatch) => {
  const formData = {
    name: name,
    value: value,
  };
  dispatch({ type: Types.GET_SELLER_INPUT, payload: formData });
}
export const SubmitSeller = (sellerInput) => (dispatch) => {
  const { sellerName, sellerAddress, shopName, deliveryPeriod, shopLogoUrl, sellerPhone, sellerEmail } = sellerInput
  if (sellerName.length === 0) {
    showToast("error", "Seller Name shouldn't be empty");
    return 0;
  } else if (sellerAddress.length === 0) {
    showToast("error", "Seller Address shouldn't be empty");
    return 0;
  } else if (shopName.length === 0) {
    showToast("error", "Shop name shouldn't be empty");
    return 0;
  } else if (deliveryPeriod.length === 0) {
    showToast("error", "Delivery Period shouldn't be empty");
    return 0;
  } else if (shopLogoUrl.length === 0) {
    showToast("error", "Logo Url shouldn't be empty");
    return 0;
  } else if (sellerPhone.length === 0) {
    showToast("error", "Seller Phone shouldn't be empty");
    return 0;
  }
  const url = `${process.env.REACT_APP_API_URL}seller`;
  dispatch({ type: Types.IS_CREATE_SELLER, payload: true });

  try {
    Axios.post(url, sellerInput)
      .then((res) => {
        if (res.data.status) {
          showToast("success", res.data.message);
          dispatch({ type: Types.IS_CREATE_SELLER, payload: false });
          dispatch({ type: Types.AFTER_CREATE_SELLER, payload: true });
        } else {
          showToast("error", res.data.message);
          dispatch({ type: Types.IS_CREATE_SELLER, payload: false });
        }
      })
      .catch((err) => {
        dispatch({ type: Types.IS_CREATE_SELLER, payload: false });
        const message = JSON.parse(err.request.response).message;
        showToast("error", message);
      });
  } catch (error) {
    dispatch({ type: Types.IS_CREATE_SELLER, payload: false });
    showToast("error", "Something went wrong");
  }
};

export const GetSellerList = () => (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}seller`;
  try {
    Axios.get(url).then((res) => {
      if (res.data.status) {
        dispatch({ type: Types.SELLER_LIST, payload: res.data.result });
      }
    });
  } catch (error) {
    showToast("error", "Something went wrong");
  }
};
export const SellerDelete = (id) => (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}seller/${id}`;
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