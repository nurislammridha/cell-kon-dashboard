import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AfterCreatedFalse, UpdateCampaign } from "../_redux/CampaignAction";
import { useHistory, useLocation } from "react-router-dom";

const EditCampaign = () => {
  const history = useHistory()
  const location = useLocation()
  const data = location?.state?.data || {}
  const id = data?._id
  const [campaignName, setCampaignName] = useState("");
  const [campaignStartTime, setCampaignStartTime] = useState("");
  const [campaignStartDate, setCampaignStartDate] = useState("");
  const [campaignEndTime, setCampaignEndTime] = useState("");
  const [campaignEndDate, setCampaignEndDate] = useState("");
  const isBrand = useSelector((state) => state.brandInfo.isBrand);
  const afterCreated = useSelector((state) => state.brandInfo.afterCreated);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(UpdateCampaign({ campaignName, campaignStartTime, campaignStartDate, campaignEndTime, campaignEndDate, campaignProducts: [], soldProducts: [] }, id));
  };
  useEffect(() => {
    if (afterCreated) {
      setCampaignName("")
      setCampaignStartTime("")
      setCampaignStartDate("")
      setCampaignEndTime("")
      setCampaignEndDate("")
      history.push('/campaign')
      dispatch(AfterCreatedFalse())
    }
  }, [afterCreated])
  useEffect(() => {
    setCampaignName(data?.campaignName)
    setCampaignStartTime(data?.campaignStartTime)
    setCampaignStartDate(data?.campaignStartDate)
    setCampaignEndTime(data?.campaignEndTime)
    setCampaignEndDate(data?.campaignEndDate)
  }, [location])
  console.log('location', location)
  return (
    <>
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <div>
            <h6 className="mb-3">Campaign Name</h6>
            <input
              className="form-control"
              value={campaignName}
              type='text'
              placeholder="enter campaign name"
              onChange={(e) => setCampaignName(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <h6 className="mb-3">Start Time (24 hours format)</h6>
            <input
              className="form-control"
              value={campaignStartTime}
              type='text'
              placeholder="Ex: 20:10"
              onChange={(e) => setCampaignStartTime(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <h6 className="mb-3">Start Date (Date/Month/Year)</h6>
            <input
              className="form-control"
              value={campaignStartDate}
              type='text'
              placeholder="Ex: 23/02/2024"
              onChange={(e) => setCampaignStartDate(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <h6 className="mb-3">End Time (24 hours format)</h6>
            <input
              className="form-control"
              value={campaignEndTime}
              type='text'
              placeholder="Ex: 20:10"
              onChange={(e) => setCampaignEndTime(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <h6 className="mb-3">End Date (Date/Month/Year)</h6>
            <input
              className="form-control"
              value={campaignEndDate}
              type='text'
              placeholder="Ex: 23/02/2024"
              onChange={(e) => setCampaignEndDate(e.target.value)}
            />
          </div>
          {isBrand ? (
            <a className="btn btn-success btn-sm mt-3 text-light">
              {" "}
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            </a>
          ) : (
            <a
              className="btn btn-success btn-sm mt-3 text-light"
              onClick={() => handleSubmit()}
            >
              UPDATE
            </a>
          )}
        </div>
        <div className="col-sm-2"></div>
      </div>
    </>
  );
};

export default EditCampaign;
