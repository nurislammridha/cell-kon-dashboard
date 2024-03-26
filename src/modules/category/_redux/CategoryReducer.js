import * as Types from "./Types";

const initialState = {
  isCategory: false,
  isUpdate: false,
  afterCreated: false,
  afterUpdated: false,
  afterDeleted: false,
  categoryList: null,
  catImg: null,
  isImageLoading: false,
};
const CategoryReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case Types.IS_CREATE_CATEGORY:
      return {
        ...state,
        isCategory: action.payload,
      };
    case Types.IS_UPDATE_CATEGORY:
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
    case Types.CATEGORY_LIST:
      return {
        ...state,
        categoryList: action.payload,
      };
    case Types.AFTER_DELETED:
      return {
        ...state,
        afterDeleted: action.payload,
      };
    case Types.CAT_IMG:
      return {
        ...state,
        catImg: action.payload,
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
export default CategoryReducer;
