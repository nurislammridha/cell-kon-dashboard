import React from "react";
import Modal from "react-bootstrap/Modal";
const OrderDetails = (props) => {
  const { orderDes } = props;
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Order Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="bg-secondary px-2 py-2">
            <h6 className="text-center">Person Address</h6>
            <hr></hr>
            <div className="row mt-2 ">
              <div className="col-sm-6">
                <h6>Full Name: {orderDes.fullName}</h6>
                <h6>Phone: {orderDes.phoneNumber}</h6>
                <h6>Village: {orderDes.village}</h6>
              </div>
              <div className="col-sm-6">
                <h6>
                  Nick Name: {orderDes.nickName}, Gender:{orderDes.gender}
                </h6>
                <h6>Profession: {orderDes.profession}</h6>
                <h6>Village Area: {orderDes.villageArea}</h6>
              </div>
            </div>
            <h6>Found Description: {orderDes.foundDescription}</h6>
          </div>
          <h5 className="text-center bg-secondary text-light mt-3 py-2">
            Product List
          </h5>
          <div className="d_product mt-3">
            {orderDes &&
              orderDes.productInfo.length > 0 &&
              orderDes.productInfo.map((item, index) => (
                <>
                  <div className="d_single_product">
                    <div className="d_img">
                      <img
                        src={
                          process.env.REACT_APP_IMG_URL +
                          item.productImage.substring(2)
                        }
                      />
                    </div>
                    <div className="d_content">{item.productName}</div>
                    <h6 className="text-center d_quantity">
                      Quantity: {item.quantity}
                    </h6>
                    <div className="d_price">
                      <del>${item.productMRP}</del>
                      <span>${item.discountPrice}</span>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <a className="btn btn-success btn-sm" onClick={props.onHide}>
            Close
          </a>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default OrderDetails;
