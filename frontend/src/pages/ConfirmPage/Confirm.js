import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from '../../components/Navbar/Navbar';
import { getCartTotal } from '../../store/cartSlice';
import "./Confirm.scss";

const ConfirmPage = () => {
    const dispatch = useDispatch();
    const {data: cartProducts, totalItems, totalAmount, deliveryCharge} = useSelector(state => state.cart);

    useEffect(() => {
        dispatch(getCartTotal());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [useSelector(state => state.cart)]); 

    const emptyCartMsg = <h4 className='text-red fw-6'>No items found!</h4>;

    return (
        <div className="confirm-page">
  <Navbar />
  <div className='confirm'>
    <div className="container mt-5 mb-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="invoice p-5 text-center">
              <h2>Your order Confirmed!</h2>
              <p>Your order has been confirmed and will be shipped in next two days. We will be sending shipping confirmation email when the item shipped successfully.</p>
              <p className="font-weight-bold mb-0">Thanks for shopping with us!</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center">
      <button type="button" className='btn-secondary'>
        <Link to="/" >Back to HomePage</Link>
      </button>
    </div>
  </div>
  <Footer />
</div>
      )
      
}

export default ConfirmPage 