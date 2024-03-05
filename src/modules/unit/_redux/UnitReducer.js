import * as Types from "./Types";

const initialState = {
  isUnit: false,
  afterCreated: false,
  afterDeleted: false,
  unitList: null,
};
const UnitReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case Types.IS_CREATE_UNIT:
      return {
        ...state,
        isUnit: action.payload,
      };
    case Types.AFTER_CREATED:
      return {
        ...state,
        afterCreated: action.payload,
      };
    case Types.UNIT_LIST:
      return {
        ...state,
        unitList: action.payload,
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
export default UnitReducer;
