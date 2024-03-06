import * as Types from "./Types";

const initialState = {
  isSize: false,
  afterCreated: false,
  afterDeleted: false,
  sizeList: null,
};
const SizeReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case Types.IS_CREATE_SIZE:
      return {
        ...state,
        isSize: action.payload,
      };
    case Types.AFTER_CREATED:
      return {
        ...state,
        afterCreated: action.payload,
      };
    case Types.SIZE_LIST:
      return {
        ...state,
        sizeList: action.payload,
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
export default SizeReducer;
