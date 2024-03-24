import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetOrderById } from "../_redux/OrderAction";
const OrderDetails = () => {
  let { id } = useParams();
  const dispatch = useDispatch()
  const isOrderDetails = useSelector((state) => state.orderInfo.isOrderDetails);
  const orderDetails = useSelector((state) => state.orderInfo.orderDetails);
  const { _id, buyerInfo, deliveryAddressInfo, orderStatus, paymentMethod, productInfo, shippingFee, subTotal } = orderDetails || {}
  const { buyerEmail, buyerGender, buyerImgUrl, buyerName, buyerPhone } = buyerInfo || {}
  const { buyerName: rName, buyerPhone: rPhone, detailsAddress, district, division, upazilla, union, isMetropolitan, nearestArea, postalCode } = deliveryAddressInfo || {}
  useEffect(() => {
    dispatch(GetOrderById(id))
  }, [id])
  console.log('orderDetails', orderDetails)
  return (
    <>
      <div className="bg-secondary px-2 py-2">
        <h6 className="text-center">Person Address</h6>
        <hr></hr>
        <div className="row mt-2 ">
          <div className="col-sm-6">
            <h2 className="text-align-center">Customer Information</h2>
            <h6>Customer Name: {buyerName}</h6>
            <h6>Customer Phone: {buyerPhone}</h6>
            <h6>Customer Email: {buyerEmail}</h6>
            <h6>Customer Gender: {buyerGender}</h6>
            <h6>Photo:</h6>

          </div>
          <div className="col-sm-6">
            <h2 className="text-align-center">Receiver Information</h2>
            <h6>Name: {rName} </h6>
            <h6>Phone: {rPhone}</h6>
            <h6>District: {district}</h6>
            <h6>Division: {division}</h6>
            <h6>Upazilla: {upazilla}</h6>
            <h6>Union: {union}</h6>
            <h6>Postal Code: {postalCode}</h6>
            <h6>Nearest Area: {nearestArea}</h6>
            <h6>Details: {detailsAddress}</h6>
            <h6>Area: {isMetropolitan ? "IN SIDE" : "OUT SIDE"} Metropolitan</h6>
          </div>
        </div>
        <h6>Order Id: {_id}</h6>
        <h6>Order Status: {orderStatus}</h6>
        <h6>Subtotal: {subTotal}</h6>
        <h6>Shipping Fee: {shippingFee}</h6>
        <h6>Payment Method: {paymentMethod}</h6>
      </div>
      <h5 className="text-center bg-secondary text-light mt-3 py-2">
        Product List
      </h5>
      <div className="d_product mt-3">
        {productInfo &&
          productInfo.length > 0 &&
          productInfo.map(({ colorName, pastRp, quantity, sellPrice, sizeName, products }, index) => (
            <>
              <div key={index} className="d_single_product">
                <div className="d_img">
                  <img
                    src={
                      products?.productIcon?.url
                    }
                  />
                </div>
                <div className="d_content">{products.productName}</div>
                <h6 className="text-center d_quantity">
                  Quantity: {quantity}
                </h6>
                <h6 className="text-center d_quantity">
                  Color Name: {colorName}
                </h6>
                <h6 className="text-center d_quantity">
                  RP: {pastRp}
                </h6>
                <h6 className="text-center d_quantity">
                  Sell Price: {sellPrice}
                </h6>
                <h6 className="text-center d_quantity">
                  Size Name: {sizeName}
                </h6>
                {/* <div className="d_price">
                  <del>${item.productMRP}</del>
                  <span>${item.discountPrice}</span>
                </div> */}
              </div>
            </>
          ))}
      </div>
    </>
  );
};

export default OrderDetails;
