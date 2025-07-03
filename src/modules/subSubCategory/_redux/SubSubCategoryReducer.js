import * as Types from "./Types";

const initialState = {
  isSubSubCategory: false,
  isUpdate: false,
  afterCreated: false,
  afterUpdated: false,
  afterDeleted: false,
  subSubCategoryList: null,
};
const SubSubCategoryReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case Types.IS_CREATE_SUB_SUB_CATEGORY:
      return {
        ...state,
        isSubSubCategory: action.payload,
      };
    case Types.IS_UPDATE_SUB_SUB_CATEGORY:
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
    case Types.SUB_SUB_CATEGORY_LIST:
      return {
        ...state,
        subSubCategoryList: action.payload,
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
export default SubSubCategoryReducer;
