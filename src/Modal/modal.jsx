import React from "react";


const Modal = () => {
  return (
    <>
      <div className="modal fade" id="myModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">


            <div className="modal-body mx-auto text-center">
              <h1 className='' style={{ fontSize: '30px' }}>Proceed to Payment</h1>
              <p className=''><i className="fa fa-arrow-circle-right" style={{ fontSize: '48px', color: 'blue' }}></i></p>
            </div>


            <div className="modal-footer">
              <button className="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
export default Modal;