import * as Types from "./Types";

const initialState = {
  isCampaign: false,
  afterCreated: false,
  afterDeleted: false,
  campaignList: null,
  campaignDetails: null,
};
const CampaignReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case Types.IS_CREATE_CAMPAIGN:
      return {
        ...state,
        isCampaign: action.payload,
      };
    case Types.AFTER_CREATED:
      return {
        ...state,
        afterCreated: action.payload,
      };
    case Types.CAMPAIGN_LIST:
      return {
        ...state,
        campaignList: action.payload,
      };
    case Types.AFTER_DELETED:
      return {
        ...state,
        afterDeleted: action.payload,
      };
    case Types.CAMPAIGN_DETAILS:
      return {
        ...state,
        campaignDetails: action.payload,
      };
    default:
      break;
  }
  return newState;
};
export default CampaignReducer;
