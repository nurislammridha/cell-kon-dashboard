import * as Types from "./Types";

const initialState = {
  sellerInput: {
    sellerName: "",
    sellerAddress: "",
    shopName: "",
    deliveryPeriod: "",
    sellerRatings: "",
    shopLogo: { publicId: null, url: "" },
    sellerPhone: "",
    sellerEmail: ""
  },
  isSeller: false,
  afterCreated: false,
  afterDeleted: false,
  sellerList: null,
  isImageLoading: false,
};
const SellerReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case Types.GET_SELLER_INPUT:
      const sellerInput = { ...state.sellerInput };
      sellerInput[action.payload.name] = action.payload.value;
      return {
        ...state,
        sellerInput: sellerInput,
      };
    case Types.AFTER_CREATE_SELLER:
      const sellerInputAfter = initialState.sellerInput;
      return {
        ...state,
        sellerInput: sellerInputAfter,
      };
    case Types.IS_CREATE_SELLER:
      return {
        ...state,
        isSeller: action.payload,
      };

    case Types.SELLER_LIST:
      return {
        ...state,
        sellerList: action.payload,
      };
    case Types.AFTER_DELETED:
      return {
        ...state,
        afterDeleted: action.payload,
      };
    case Types.IS_IMG_LOADING:
      return {
        ...state,
        isImageLoading: action.payload,
      };
    default:
      break;
  }
  return newState;
};
export default SellerReducer;
