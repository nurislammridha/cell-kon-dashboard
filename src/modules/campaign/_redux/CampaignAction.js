import * as Types from "./Types";
import Axios from "axios";
import { showToast } from "src/utils/ToastHelper";
//test//est//
export const SubmitCampaign = (data) => (dispatch) => {
  const { campaignName, campaignStartTime, campaignStartDate, campaignEndTime, campaignEndDate } = data
  if (campaignName.length === 0) {
    showToast("error", "Campaign name shouldn't be empty");
    return 0;
  } else if (campaignStartTime.length === 0) {
    showToast("error", "Campaign start time shouldn't be empty");
    return 0;
  } else if (campaignStartDate.length === 0) {
    showToast("error", "Campaign start date shouldn't be empty");
    return 0;
  } else if (campaignEndTime.length === 0) {
    showToast("error", "Campaign end time shouldn't be empty");
    return 0;
  } else if (campaignEndDate.length === 0) {
    showToast("error", "Campaign end date shouldn't be empty");
    return 0;
  }
  const url = `${process.env.REACT_APP_API_URL}campaign`;
  dispatch({ type: Types.IS_CREATE_CAMPAIGN, payload: true });

  try {
    Axios.post(url, data)
      .then((res) => {
        if (res.data.status) {
          showToast("success", res.data.message);
          dispatch({ type: Types.IS_CREATE_CAMPAIGN, payload: false });
          dispatch({ type: Types.AFTER_CREATED, payload: true });
        } else {
          showToast("error", res.data.message);
          dispatch({ type: Types.IS_CREATE_CAMPAIGN, payload: false });
        }
      })
      .catch((err) => {
        dispatch({ type: Types.IS_CREATE_CAMPAIGN, payload: false });
        const message = JSON.parse(err.request.response).message;
        showToast("error", message);
      });
  } catch (error) {
    dispatch({ type: Types.IS_CREATE_CAMPAIGN, payload: false });
    showToast("error", "Something went wrong");
  }
};
export const UpdateCampaign = (data, id) => (dispatch) => {
  const { campaignName, campaignStartTime, campaignStartDate, campaignEndTime, campaignEndDate } = data
  if (campaignName.length === 0) {
    showToast("error", "Campaign name shouldn't be empty");
    return 0;
  } else if (campaignStartTime.length === 0) {
    showToast("error", "Campaign start time shouldn't be empty");
    return 0;
  } else if (campaignStartDate.length === 0) {
    showToast("error", "Campaign start date shouldn't be empty");
    return 0;
  } else if (campaignEndTime.length === 0) {
    showToast("error", "Campaign end time shouldn't be empty");
    return 0;
  } else if (campaignEndDate.length === 0) {
    showToast("error", "Campaign end date shouldn't be empty");
    return 0;
  }

  const url = `${process.env.REACT_APP_API_URL}campaign/${id}`;
  dispatch({ type: Types.IS_CREATE_CAMPAIGN, payload: true });

  try {
    Axios.put(url, data)
      .then((res) => {
        if (res.data.status) {
          showToast("success", res.data.message);
          dispatch({ type: Types.IS_CREATE_CAMPAIGN, payload: false });
          dispatch({ type: Types.AFTER_CREATED, payload: true });
        } else {
          showToast("error", res.data.message);
          dispatch({ type: Types.IS_CREATE_CAMPAIGN, payload: false });
        }
      })
      .catch((err) => {
        dispatch({ type: Types.IS_CREATE_CAMPAIGN, payload: false });
        const message = JSON.parse(err.request.response).message;
        showToast("error", message);
      });
  } catch (error) {
    dispatch({ type: Types.IS_CREATE_CAMPAIGN, payload: false });
    showToast("error", "Something went wrong");
  }
};
export const AfterCreatedFalse = () => (dispatch) => {
  dispatch({ type: Types.AFTER_CREATED, payload: false })
}
export const GetCampaignList = () => (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}campaign`;
  try {
    Axios.get(url).then((res) => {
      if (res.data.status) {
        dispatch({ type: Types.CAMPAIGN_LIST, payload: res.data.result });
      }
    });
  } catch (error) {
    showToast("error", "Something went wrong");
  }
};
export const GetCampaignDetails = (id) => (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}campaign/${id}`;
  try {
    Axios.get(url).then((res) => {
      if (res.data.status) {
        dispatch({ type: Types.CAMPAIGN_DETAILS, payload: res.data.result });
      }
    });
  } catch (error) {
    showToast("error", "Something went wrong");
  }
};
export const CampaignDelete = (id) => (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}campaign/${id}`;
  try {
    Axios.delete(url).then((res) => {
      if (res.data.status) {
        showToast("success", res.data.message);
        dispatch({ type: Types.AFTER_DELETED, payload: true })
      } else {
        showToast("error", "Something went wrong");
      }
    });
  } catch (error) {
    showToast("error", "Something went wrong");
  }
};
export const AfterDeletedFalse = () => (dispatch) => {
  dispatch({ type: Types.AFTER_DELETED, payload: false })
}