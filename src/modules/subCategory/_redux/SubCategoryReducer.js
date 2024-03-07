import * as Types from "./Types";

const initialState = {
  isSubCategory: false,
  afterCreated: false,
  afterDeleted: false,
  subCategoryList: null,
};
const SubCategoryReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case Types.IS_CREATE_SUBCATEGORY:
      return {
        ...state,
        isSubCategory: action.payload,
      };
    case Types.AFTER_CREATED:
      return {
        ...state,
        afterCreated: action.payload,
      };
    case Types.SUBCATEGORY_LIST:
      return {
        ...state,
        subCategoryList: action.payload,
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
export default SubCategoryReducer;
