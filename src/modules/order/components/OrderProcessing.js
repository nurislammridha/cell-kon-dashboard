import React, { forwardRef, useEffect } from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  falseStatusUpdate,
  GetOrderList,
  statusUpdate,
} from "../_redux/OrderAction";
import OrderDetails from "./OrderDetails";

const OrderProcessing = () => {
  const dispatch = useDispatch();
  const [orderDate, setOrderDate] = useState(new Date());
  const [modalShow, setModalShow] = useState(false);
  const [orderDes, setOrderDes] = useState("");
  const [loader, setLoader] = useState("");
  const orderList = useSelector((state) => state.orderInfo.orderList);
  const isOrderList = useSelector((state) => state.orderInfo.isOrderList);
  const afterUpdateStatus = useSelector(
    (state) => state.orderInfo.afterUpdateStatus
  );
  const isUpdating = useSelector((state) => state.orderInfo.isUpdating);
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className=" form-control" onClick={onClick} ref={ref}>
      {value}
    </div>
  ));

  useEffect(() => {
    dispatch(GetOrderList(orderDate, "isProcessing"));
  }, [orderDate]);
  useEffect(() => {
    if (afterUpdateStatus) {
      dispatch(GetOrderList(orderDate, "isProcessing"));
      dispatch(falseStatusUpdate());
    }
  }, [afterUpdateStatus]);
  const handleUpdate = (id) => {
    setLoader(id);
    const data = {
      isProcessing: true,
      isProcessingDate: moment(new Date()).format("lll"),
    };
    dispatch(statusUpdate(data, id));
  };
  return (
    <>
      <div className="row bg-light py-2">
        <div className="col-sm-2">
          <h6>Processing Order</h6>
        </div>
        <div className="col-sm-2">
          <h6>Select Date</h6>
        </div>
        <div className="col-sm-2">
          <DatePicker
            className="form-control"
            selected={orderDate}
            onChange={(e) => setOrderDate(e)}
            showMonthDropdown
            showYearDropdown
            customInput={<ExampleCustomInput />}
          />
        </div>
      </div>
      <div className="mt-3">
        {/* {isOrderList && (
          <>
            <div class="d-flex justify-content-center  mt-5 mt-5 mt-5">
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </>
        )} */}

        {!isOrderList && orderList && orderList.length === 0 && (
          <>
            <div class="alert alert-success text-center mt-5 mt-5" role="alert">
              Sorry ! No order found.
            </div>
          </>
        )}
        {!isOrderList && orderList !== null && orderList.length > 0 && (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>SL</th>
                <th>Order Id</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Village</th>
                <th>Village Area</th>
                <th>Procesing Order</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {orderList.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item._id}</td>
                  <td>{item.fullName}</td>
                  <td>{item.phoneNumber}</td>
                  <td>{item.village}</td>
                  <td>{item.villageArea}</td>
                  <td>
                    {isUpdating && item._id === loader ? (
                      <a className="btn btn-success btn-sm text-light">
                        <span
                          class="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                      </a>
                    ) : (
                      <a
                        className="btn btn-success btn-sm text-light"
                        onClick={() => handleUpdate(item._id)}
                      >
                        Processing
                      </a>
                    )}
                  </td>
                  <td>
                    <a
                      className="btn btn-outline-success"
                      onClick={() => {
                        setModalShow(true);
                        setOrderDes(item);
                      }}
                    >
                      <i className="fa fa-eye"></i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <OrderDetails
        orderDes={orderDes}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default OrderProcessing;
