import * as Types from "./Types";
import htmlToDraft from "html-to-draftjs";
import { EditorState, ContentState } from "draft-js";
const initialState = {
  productList: null,
  productInput: {
    productName: "",
    rp: 0,
    mrp: 0,
    regularDiscount: 0,
    campaignDiscount: 0,
    unitName: "",
    unitId: "",
    size: [],
    colorName: "",
    colorId: "",
    colorHexCode: "",
    categoryName: "",
    categoryId: "",
    subCategoryName: "",
    subCategoryId: "",
    brandName: "",
    brandId: "",
    sellerName: "",
    sellerId: "",
    sellerInfo: "",//seller id
    availableQuantity: 0,
    isCampaign: false,
    isTrending: false,
    shortDescriptions: "",
    longDescriptions: "",
    longDescriptionView: "",
    productImg: { url: "", publicId: null },
    productImgColor: [],
    productIcon: { url: "", publicId: null },
    relatedProducts: [],
    isAvailableCashOnDelivery: false,
  },
  isCreateProduct: false,
  afterUpdate: false,
  isIconLoading: false,
  isImgLoading: false,
};
const ProductReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case Types.GET_PRODUCT_INPUT:
      const productInput = { ...state.productInput };
      productInput[action.payload.name] = action.payload.value;
      return {
        ...state,
        productInput: productInput,
      };
    case Types.PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload,
      };
    case Types.IS_CREATE_PRODUCT:
      return {
        ...state,
        isCreateProduct: action.payload,
      };
    case Types.AFTER_CREATE_PRODUCT:
      const productInputAfter = initialState.productInput;
      productInputAfter.productImgColor = []
      return {
        ...state,
        productInput: productInputAfter,
      };
    case Types.AFTER_UPDATE_PRODUCT:
      return {
        ...state,
        afterUpdate: action.payload,
      };
    case Types.ICON_LOADING:
      return {
        ...state,
        isIconLoading: action.payload,
      };
    case Types.IMG_LOADING:
      return {
        ...state,
        isImgLoading: action.payload,
      };
    case Types.PRE_UPDATE_PRODUCT:
      console.log("action.payload", action.payload);
      const { longDescriptions } = action.payload || {};
      let productEdit = initialState.productInput;
      productEdit = action.payload
      if (longDescriptions !== null && longDescriptions?.length > 0) {
        productEdit.longDescriptionView = MyhtmlToDraft(longDescriptions);
      }

      productEdit.productImg = { url: "", publicId: null }
      delete productEdit._id
      return {
        ...state,
        productInput: productEdit,
      };
    default:
      break;
  }
  return newState;
};
export default ProductReducer;


export const MyhtmlToDraft = (data) => {
  const blocksFromHtml = htmlToDraft(data);
  const { contentBlocks, entityMap } = blocksFromHtml;
  const contentState = ContentState.createFromBlockArray(
    contentBlocks,
    entityMap
  );
  const editorState = EditorState.createWithContent(contentState);
  return editorState;
};
