import * as Types from "./Types";

const initialState = {
  isCategory: false,
  categoryList: null,
};
const CategoryReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case Types.IS_CREATE_CATEGORY:
      return {
        ...state,
        isCategory: action.payload,
      };
    case Types.CATEGORY_LIST:
      return {
        ...state,
        categoryList: action.payload,
      };
    default:
      break;
  }
  return newState;
};
export default CategoryReducer;
