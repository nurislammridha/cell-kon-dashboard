import * as Types from "./Types";
import Axios from "axios";
import { showToast } from "src/utils/ToastHelper";
import draftToHtml from "draftjs-to-html";
import { convertToRaw } from "draft-js";
//test//est//

export const GetProductInput = (name, value) => (dispatch) => {
  // console.log('name,value', name, value)
  const formData = {
    name: name,
    value: value,
  };

  dispatch({ type: Types.GET_PRODUCT_INPUT, payload: formData });
};
const PostImg = (name, img) => (dispatch) => {
  console.log('img', img)
  const data = new FormData();
  data.append("file", img);
  data.append("upload_preset", "nurislam");
  data.append("cloud_name ", "nurislammridha");
  const url = "https://api.cloudinary.com/v1_1/nurislammridha/image/upload"
  console.log('name,url,data', name, url, data)
  if (name === 'productIcon') {
    dispatch({ type: Types.ICON_LOADING, payload: true })
  } else {
    dispatch({ type: Types.IMG_LOADING, payload: true })
  }
  // const myInterceptor = Axios.interceptors.request.use(function () {/*...*/ });
  // Axios.interceptors.request.eject(myInterceptor);
  // console.log('hello', "hello")
  // Axios.interceptors.request.use(
  //   (config) => {
  //     config.headers["Authorization"] = "hjhjgj"
  //     config.headers["Accept"] = "application/json";
  //     return config;
  //   },
  //   (error) => {
  //     Promise.reject(error);
  //   }
  // );
  Axios.post(url, data).then((res) => {
    console.log('res.data', res.data)
    if (res.data) {
      dispatch({ type: Types.GET_PRODUCT_INPUT, payload: { name, value: { publicId: res?.data?.public_id, url: res?.data?.url } } })
      if (name === 'productIcon') {
        dispatch({ type: Types.ICON_LOADING, payload: false })
      } else {
        dispatch({ type: Types.IMG_LOADING, payload: false })
      }
    }
  }
  )
}
export const removeImg = (name, value, publicId) => (dispatch) => {
  const urlRemove = `${process.env.REACT_APP_API_URL}helper/delete-cloudinary`;
  Axios.post(urlRemove, { publicId }).then((res) => {
    if (res) {
      dispatch(GetProductInput(name, value))
    }
  })
}
export const UploadCloudinary = (name, img, productInput) => (dispatch) => {
  if (img.type === "image/jpeg" || img.type === "image/png") {

    const urlRemove = `${process.env.REACT_APP_API_URL}helper/delete-cloudinary`;
    if (name === "productIcon") {
      let publicId = productInput.productIcon.publicId
      if (publicId !== null) {
        Axios.post(urlRemove, { publicId }).then((res) => {
          if (res) {
            dispatch(PostImg(name, img))
          }
        })
      } else {
        dispatch(PostImg(name, img))
      }
    } else if (name === "productImg") {
      let publicId = productInput.productImg.publicId
      if (publicId !== null) {
        Axios.post(urlRemove, { publicId }).then((res) => {
          if (res) {
            dispatch(PostImg(name, img))
          }
        })
      } else {
        dispatch(PostImg(name, img))
      }
    }
  } else {
    showToast("error", "Image should be jpg/jpeg/png");
  }

};
export const SubmitProduct = (data) => (dispatch) => {
  const { productName, rp, mrp, regularDiscount, campaignDiscount, unitName,
    categoryName, size,
    subCategoryName, brandName,
    sellerName, availableQuantity,
    shortDescriptions,
    productIcon, productImgColor, longDescriptionView
  } = data
  if (productName.length === 0) {
    showToast("error", "Product name shouldn't be empty");
    return 0;
  } else if (rp <= 0) {
    showToast("error", "Rp should be greater than zero");
    return 0;
  } else if (mrp <= 0) {
    showToast("error", "Mrp should be greater than zero");
    return 0;
  } else if (regularDiscount <= 0) {
    showToast("error", "Regular discount should be greater than zero");
    return 0;
  } else if (campaignDiscount < 0) {
    showToast("error", "Campaign shouldn't negative");
    return 0;
  } else if (availableQuantity <= 0) {
    showToast("error", "Quantity should be greater than zero");
    return 0;
  } else if (productIcon.public_d <= 0) {
    showToast("error", "Select product icon");
    return 0;
  } else if (productImgColor.length === 0) {
    showToast("error", "Select products image with releted color");
    return 0;
  } else if (categoryName.length === 0) {
    showToast("error", "select a category");
    return 0;
  } else if (subCategoryName.length === 0) {
    showToast("error", "select a subcategory category");
    return 0;
  } else if (sellerName.length === 0) {
    showToast("error", "Select a seller");
    return 0;
  }
  // else if (unitName.length === 0) {
  //   showToast("error", "You should select unit name");
  //   return 0;
  // } 
  // else if (brandName.length === 0) {
  //   showToast("error", "Select a brand");
  //   return 0;
  // }
  //  else if (size.length === 0) {
  //   showToast("error", "You should select product size");
  //   return 0;
  // } 
  else if (shortDescriptions.length === 0) {
    showToast("error", "short description should n't be empty");
    return 0;
  } else if (longDescriptionView.length === 0) {
    showToast("error", "Long description should n't be empty");
    return 0;
  }
  const proxy = longDescriptionView
  data.longDescriptions = draftToHtml(
    convertToRaw(proxy.getCurrentContent())
  );
  const url = `${process.env.REACT_APP_API_URL}product`;
  dispatch({ type: Types.IS_CREATE_PRODUCT, payload: true });
  // console.log('data', data)
  data.longDescriptions = "<p>" + data.longDescriptions + "</p>"
  if (data.videoUrl.length > 0) { data.videoUrl = data.videoUrl.split(",") }
  delete data.longDescriptionView
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
export const EmptyHistory = () => (dispatch) => {
  dispatch({ type: Types.AFTER_CREATE_PRODUCT, payload: true });
}
export const ProductUpdate = (data, id) => (dispatch) => {
  const { productName, rp, mrp, regularDiscount, campaignDiscount, unitName,
    categoryName, size,
    subCategoryName, brandName,
    sellerName, availableQuantity,
    shortDescriptions,
    productIcon, productImgColor, longDescriptionView
  } = data
  if (productName.length === 0) {
    showToast("error", "Product name shouldn't be empty");
    return 0;
  } else if (rp <= 0) {
    showToast("error", "Rp should be greater than zero");
    return 0;
  } else if (mrp <= 0) {
    showToast("error", "Mrp should be greater than zero");
    return 0;
  } else if (regularDiscount <= 0) {
    showToast("error", "Regular discount should be greater than zero");
    return 0;
  } else if (campaignDiscount < 0) {
    showToast("error", "Campaign shouldn't be negative");
    return 0;
  } else if (availableQuantity <= 0) {
    showToast("error", "Quantity should be greater than zero");
    return 0;
  } else if (productIcon.public_d <= 0) {
    showToast("error", "Select product icon");
    return 0;
  } else if (productImgColor.length === 0) {
    showToast("error", "Select products image with related color");
    return 0;
  } else if (categoryName.length === 0) {
    showToast("error", "select a category");
    return 0;
  } else if (subCategoryName.length === 0) {
    showToast("error", "select a subcategory category");
    return 0;
  } else if (sellerName.length === 0) {
    showToast("error", "Select a seller");
    return 0;
  }
  // else if (unitName.length === 0) {
  //   showToast("error", "You should select unit name");
  //   return 0;
  // } 
  // else if (brandName.length === 0) {
  //   showToast("error", "Select a brand");
  //   return 0;
  // }
  //  else if (size.length === 0) {
  //   showToast("error", "You should select product size");
  //   return 0;
  // } 
  else if (shortDescriptions.length === 0) {
    showToast("error", "short description should n't be empty");
    return 0;
  } else if (longDescriptionView.length === 0) {
    showToast("error", "Long description should n't be empty");
    return 0;
  }
  const proxy = longDescriptionView
  data.longDescriptions = draftToHtml(
    convertToRaw(proxy.getCurrentContent())
  );
  const url = `${process.env.REACT_APP_API_URL}product/${id}`;
  dispatch({ type: Types.IS_CREATE_PRODUCT, payload: true });
  // console.log('data', data)
  data.longDescriptions = "<p>" + data.longDescriptions + "</p>"
  if (data.videoUrl.length > 0) { data.videoUrl = data.videoUrl.split(",") }
  delete data.longDescriptionView

  try {
    Axios.put(url, data)
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
export const GetProductList = (search = "", page = 1, limit = 20) => (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}product?search=${search}&page=${page}&limit=${limit}`;
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
export const GetProductBySubCategoryId = (id) => (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}product/sub-category-id/${id}`;
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
        showToast("success", res.data.message);
        dispatch(GetProductList())
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
export const getProductOption = (data) => {
  const arr = [];
  if (data && data.length > 0) {
    data.forEach((item) => {
      const obj = {
        label: item.productName,
        value: item._id
      };
      arr.push(obj);
    });
  }
  return arr;
};
export const RemoveArImg = (item) => (dispatch) => {
  const urlRemove = `${process.env.REACT_APP_API_URL}helper/delete-cloudinary`;
  let arr = item.productImgColor
  arr.forEach((item22, index) => {
    Axios.post(urlRemove, { publicId: item22.publicId }).then((res) => {
      if (res && arr.length === index + 1) {
        dispatch(ProductDelete(item._id))
      }
    })
  });
}
export const RemoveProImg = (item) => (dispatch) => {
  const urlRemove = `${process.env.REACT_APP_API_URL}helper/delete-cloudinary`;
  Axios.post(urlRemove, { publicId: item.productIcon.publicId }).then((res) => {
    if (res) {
      dispatch(RemoveArImg(item))
    }
  })
}