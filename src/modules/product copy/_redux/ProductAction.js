import * as Types from "./Types";
import Axios from "axios";
import { showToast } from "src/utils/ToastHelper";
//test//est//

export const GetProductInput = (name, value, e, preview) => (dispatch) => {
  const formData = {
    name: name,
    value: value,
  };
  //for adding img in array
  if (name === "add") {

  }
  if (name === "productIcon" || name === "productImg") {
    let reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      formData.name = preview;
      formData.value = reader.result;
      dispatch({ type: Types.GET_PRODUCT_INPUT, payload: formData });
    };
    reader.readAsDataURL(file);
  }
  dispatch({ type: Types.GET_PRODUCT_INPUT, payload: formData });
};
export const UploadCloudinary = (name, value, productInput) => async (dispatch) => {
  if (value.type === "image/jpeg" || value.type === "image/png") {
    const data = new FormData();
    // data.append("file", value);
    // data.append("upload_preset", "nurislam");
    // data.append("cloud_name ", "nurislammridha");
    // const url = "https://api.cloudinary.com/v1_1/nurislammridha/image/upload"
    // const imgId = "azgytj1oaemmse7q03c5"//productInput.productIcon.imgId
    // const timestamp = new Date().getTime()
    // const string = `public_id=${imgId}&timestamp=${timestamp}CqPj1pr6nHsFnxxySMS9IuA2-VU`
    // const signature = await sha1(string)
    // const formData = new FormData()
    // formData.append("public_id", imgId)
    // formData.append("signature", signature)
    // formData.append("api_key", "867786851463999")
    // formData.append("timestamp", timestamp)
    // Axios.post("https://api.cloudinary.com/v1_1/nurislammridha/image/destroy", formData).then((res) => {
    //   console.log('res', res)
    // })

    // if (imgId !== null) {
    //   //after change   
    //   cloudinary.uploader.destroy(imgId, (res) => {
    //     console.log('res', res)
    //   })
    // }
    // Axios.post(url, data).then((res) => {
    //   console.log('res', res)
    //   if (res.data) {
    //     const formVal = {
    //       name: name,
    //       value: { imgId: res.data.public_id, imgUrl: res.data.url },
    //     };
    //     dispatch({ type: Types.GET_PRODUCT_INPUT, payload: formVal });
    //   }

    // })
  } else {
    showToast("error", "Image should be jpg/jpeg/png");
  }

};
export const SubmitProduct = (data) => (dispatch) => {
  const { productName, rp, mrp, regularDiscount, campaignDiscount, unitName,
    unitId, colorName, colorId, sizeName, sizeId, categoryName, categoryId,
    subcategoryName, subCategoryId, brandName, brandId,
    sellerName, availableQuantity,
    shortDescriptions,
    longDescriptions,
    productImgUrl,
    productIconUrl,
  } = data
  // if (productName.length === 0) {
  //   showToast("error", "Product name shouldn't be empty");
  //   return 0;
  // } else if (rp <= 0) {
  //   showToast("error", "Rp should be greater than zero");
  //   return 0;
  // } else if (mrp > 0) {
  //   showToast("error", "Mrp should be greater than zero");
  //   return 0;
  // } else if (regularDiscount > 0) {
  //   showToast("error", "Regular discount should be greater than zero");
  //   return 0;
  // } else if (campaignDiscount > 0) {
  //   showToast("error", "Campaign should be greater than zero");
  //   return 0;
  // } else if (unitName.length === 0) {
  //   showToast("error", "You should select unit name");
  //   return 0;
  // } else if (colorName.length === 0) {
  //   showToast("error", "You should select a color");
  //   return 0;
  // } else if (sizeName.length === 0) {
  //   showToast("error", "You should select a color");
  //   return 0;
  // } else if (categoryName.length === 0) {
  //   showToast("error", "select a category");
  //   return 0;
  // } else if (subcategoryName.length === 0) {
  //   showToast("error", "select a subcategory category");
  //   return 0;
  // } else if (brandName.length === 0) {
  //   showToast("error", "Select a brand");
  //   return 0;
  // } else if (sellerName.length === 0) {
  //   showToast("error", "Select a seller");
  //   return 0;
  // } else if (shortDescriptions.length === 0) {
  //   showToast("error", "Short description should n't be empty");
  //   return 0;
  // } else if (longDescriptions.length === 0) {
  //   showToast("error", "Long description should n't be empty");
  //   return 0;
  // } else if (shortDescriptions.length === 0) {
  //   showToast("error", "short description should n't be empty");
  //   return 0;
  // } else if (productImgUrl.length === 0) {
  //   showToast("error", "product Img url should n't be empty");
  //   return 0;
  // } else if (productIconUrl.length === 0) {
  //   showToast("error", "Product Icon url should n't be empty");
  //   return 0;
  // }
  const url = `${process.env.REACT_APP_API_URL}product`;
  dispatch({ type: Types.IS_CREATE_PRODUCT, payload: true });
  // const formData = new FormData();
  console.log('data', data)
  try {
    Axios.post(url, data)
      .then((res) => {
        if (res.data.status) {
          showToast("success", res.data.message);
          dispatch({ type: Types.IS_CREATE_PRODUCT, payload: false });
          dispatch({ type: Types.AFTER_CREATE_PRODUCT, payload: true });
        } else {
          showToast("error", res.data.message);
          dispatch({ type: Types.IS_CREATE_PRODUCT, payload: false });
        }
      })
      .catch((err) => {
        dispatch({ type: Types.IS_CREATE_PRODUCT, payload: false });
        const message = JSON.parse(err.request.response).message;
        showToast("error", message);
      });
  } catch (error) {
    dispatch({ type: Types.IS_CREATE_PRODUCT, payload: false });
    showToast("error", "Something went wrong");
  }
};
export const UpdateProduct = (data) => (dispatch) => {
  if (data.productName.length === 0) {
    showToast("error", "Product name shouldn't be empty");
    return 0;
  } else if (data.productNameBn.length === 0) {
    showToast("error", "Product name bangla shouldn't be empty");
    return 0;
  } else if (data.categoryName.length === 0) {
    showToast("error", "Please Select a category");
    return 0;
  } else if (data.productMRP.length === 0) {
    showToast("error", "Product MRP shouldn't be empty");
    return 0;
  } else if (data.productMRPBn.length === 0) {
    showToast("error", "Product MRP bangla shouldn't be empty");
    return 0;
  } else if (data.discountPrice.length === 0) {
    showToast("error", "Discount price shouldn't be empty");
    return 0;
  } else if (data.discountPriceBn.length === 0) {
    showToast("error", "Discount price bangla shouldn't be empty");
    return 0;
  } else if (data.productCode.length === 0) {
    showToast("error", "Product code shouldn't be empty");
    return 0;
  }
  // else if (data.productImage.length === 0) {
  //   showToast("error", "Please select a product image");
  //   return 0;
  // }
  const url = `${process.env.REACT_APP_API_URL}product/${data.id}`;
  dispatch({ type: Types.IS_CREATE_PRODUCT, payload: true });
  const formData = new FormData();
  formData.append("product_name", data.productName);
  formData.append("product_name_bn", data.productNameBn);
  formData.append("category_id", data.categoryId);
  formData.append("category_name", data.categoryName);
  formData.append("category_name_bn", data.categoryNameBn);
  formData.append("product_mrp", data.productMRP);
  formData.append("product_mrp_bn", data.productMRPBn);
  formData.append("is_discount", true);
  formData.append("discount_price", data.discountPrice);
  formData.append("discount_price_bn", data.discountPriceBn);
  formData.append("is_active", data.isActive);
  formData.append("priority", data.priority);
  if (data.productImage.length === undefined) {
    formData.append("product_image", data.productImage);
  }
  formData.append("product_code", data.productCode);

  try {
    Axios.put(url, formData)
      .then((res) => {
        if (res.data.status) {
          showToast("success", res.data.message);
          dispatch({ type: Types.IS_CREATE_PRODUCT, payload: false });
          dispatch({ type: Types.AFTER_CREATE_PRODUCT, payload: true });
          dispatch({ type: Types.AFTER_UPDATE_PRODUCT, payload: true });
        } else {
          showToast("error", res.data.message);
          dispatch({ type: Types.IS_CREATE_PRODUCT, payload: false });
        }
      })
      .catch((err) => {
        dispatch({ type: Types.IS_CREATE_PRODUCT, payload: false });
        const message = JSON.parse(err.request.response).message;
        showToast("error", message);
      });
  } catch (error) {
    dispatch({ type: Types.IS_CREATE_PRODUCT, payload: false });
    showToast("error", "Something went wrong");
  }
};
export const FalseUpdate = () => (dispatch) => {
  dispatch({ type: Types.AFTER_UPDATE_PRODUCT, payload: false });
};
export const GetproductList = () => (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}product`;
  try {
    Axios.get(url).then((res) => {
      if (res.data.status) {
        dispatch({ type: Types.PRODUCT_LIST, payload: res.data.result });
      }
    });
  } catch (error) {
    showToast("error", "Something went wrong");
  }
};
export const GetProductByCategory = (id) => (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}product/dashboard/${id}`;
  try {
    Axios.get(url).then((res) => {
      if (res.data.status) {
        dispatch({ type: Types.PRODUCT_LIST, payload: res.data.result });
      }
    });
  } catch (error) {
    showToast("error", "Something went wrong");
  }
};
export const PreUpdateProduct = (data) => (dispatch) => {
  dispatch({ type: Types.PRE_UPDATE_PRODUCT, payload: data });
};
export const ProductDelete = (id) => (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}product/${id}`;
  try {
    Axios.delete(url).then((res) => {
      if (res.data.status) {
        showToast("error", res.data.message);
      }
    });
  } catch (error) {
    showToast("error", "Something went wrong");
  }
};



export const getCategoryOption = (data) => {
  const arr = [];
  if (data && data.length > 0) {
    data.forEach((item) => {
      const obj = {
        label: item.categoryName,
        value: item._id
      };
      arr.push(obj);
    });
  }
  return arr;
};

export const getSubCategoryOption = (data) => {
  const arr = [];
  if (data && data.length > 0) {
    data.forEach((item) => {
      const obj = {
        label: item.subCategoryName,
        value: item._id
      };
      arr.push(obj);
    });
  }
  return arr;
};
export const getSellerOption = (data) => {
  const arr = [];
  if (data && data.length > 0) {
    data.forEach((item) => {
      const obj = {
        label: item.sellerName,
        value: item._id
      };
      arr.push(obj);
    });
  }
  return arr;
};
export const getBrandOption = (data) => {
  const arr = [];
  if (data && data.length > 0) {
    data.forEach((item) => {
      const obj = {
        label: item.brandName,
        value: item._id
      };
      arr.push(obj);
    });
  }
  return arr;
};
export const getSizeOption = (data) => {
  const arr = [];
  if (data && data.length > 0) {
    data.forEach((item) => {
      const obj = {
        label: item.sizeName,
        value: item._id
      };
      arr.push(obj);
    });
  }
  return arr;
};
export const getColorOption = (data) => {
  const arr = [];
  if (data && data.length > 0) {
    data.forEach((item) => {
      const obj = {
        label: item.colorName,
        value: item._id,
        colorHexCode: item.colorHexCode
      };
      arr.push(obj);
    });
  }
  return arr;
};
export const getUnitOption = (data) => {
  const arr = [];
  if (data && data.length > 0) {
    data.forEach((item) => {
      const obj = {
        label: item.unitName,
        value: item._id
      };
      arr.push(obj);
    });
  }
  return arr;
};
