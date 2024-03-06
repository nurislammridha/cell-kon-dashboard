import * as Types from "./Types";

const initialState = {
  isColor: false,
  afterCreated: false,
  afterDeleted: false,
  colorList: null,
};
const ColorReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case Types.IS_CREATE_COLOR:
      return {
        ...state,
        isColor: action.payload,
      };
    case Types.AFTER_CREATED:
      return {
        ...state,
        afterCreated: action.payload,
      };
    case Types.COLOR_LIST:
      return {
        ...state,
        colorList: action.payload,
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
export default ColorReducer;
