import * as Types from "./Types";

const initialState = {
  isBrand: false,
  isUpdate: false,
  afterCreated: false,
  afterUpdated: false,
  afterDeleted: false,
  brandList: null,
};
const BrandReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case Types.IS_CREATE_BRAND:
      return {
        ...state,
        isBrand: action.payload,
      };
    case Types.IS_UPDATE_BRAND:
      return {
        ...state,
        isUpdate: action.payload,
      };
    case Types.AFTER_CREATED:
      return {
        ...state,
        afterCreated: action.payload,
      };
    case Types.AFTER_UPDATED:
      return {
        ...state,
        afterUpdated: action.payload,
      };
    case Types.BRAND_LIST:
      return {
        ...state,
        brandList: action.payload,
      };
    case Types.AFTER_DELETED:
      return {
        ...state,
        afterDeleted: action.payload,
      };
    default:
      break;
  }
  return newState;
};
export default BrandReducer;
