import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from '../../components/Navbar/Navbar';
import { getCartTotal } from '../../store/cartSlice';
import { formatPrice } from "../../utils/helpers";
import "./Checkout.scss";
const CheckoutPage = () => {
    const dispatch = useDispatch();
    const {data: cartProducts, totalItems, totalAmount, deliveryCharge} = useSelector(state => state.cart);

    useEffect(() => {
        dispatch(getCartTotal());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [useSelector(state => state.cart)]); 

    const emptyCartMsg = <h4 className='text-red fw-6'>No items found!</h4>;

    return (
        <div className="checkout-page">
          <Navbar />
          <div className='checkout'>
          <div className="container">
            <div className="title">
              <h2>Checkout Form</h2>
            </div>
            <div className="d-flex">
              <form action="" method="">
                <label>
                  <span className="fname">First Name <span className="required">*</span></span>
                  <input type="text" name="fname"/>
                </label>
                <label>
                  <span className="lname">Last Name <span className="required">*</span></span>
                  <input type="text" name="lname"/>
                </label>
                <label>
                  <span>Company Name</span>
                  <input type="text" name="cn"/>
                </label>
                <label>
                  <span>Country <span className="required">*</span></span>
                  <select name="selection">
              <option value="LKA">Sri Lanka</option>
            </select>
                </label>
                <label>
                  <span>Street Address <span className="required">*</span></span>
                  <input type="text" name="houseadd" placeholder="House number and street name" required/>
                </label>
                <label>
                  <span>&nbsp;</span>
                  <input type="text" name="apartment" placeholder="Apartment, suite, unit etc. (optional)"/>
                </label>
                <label>
                  <span>Town / City <span className="required">*</span></span>
                  <input type="text" name="city"/> 
                </label>
                <label>
                  <span>State / County <span className="required">*</span></span>
                  <input type="text" name="city"/> 
                </label>
                <label>
                  <span>Postcode / ZIP <span className="required">*</span></span>
                  <input type="text" name="city"/> 
                </label>
                <label>
                  <span>Phone <span className="required">*</span></span>
                  <input type="tel" name="city"/> 
                </label>
                <label>
                  <span>Email Address <span className="required">*</span></span>
                  <input type="email" name="city"/> 
                </label>
              </form>
              <div className="Yorder">
                <table>
                  <tr>
                    <th colSpan="2">Your order</th>
                  </tr>
                  <tr>
                    <td>Selected {totalItems} items(s) Price</td>
                    <td>{formatPrice(totalAmount)}</td>
                  </tr>
                  <tr>
                    <td>Delivery Cost</td>
                    <td>{formatPrice(deliveryCharge)}</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>{formatPrice(totalAmount + deliveryCharge)}</td>
                  </tr>
                </table><br/>
                
                <div>
                  <input type="radio" name="dbt" value="cd" defaultChecked="true"/> Cash on Delivery
                </div>
                <div className="paypal-option">
  <input type="radio" name="dbt" value="cd" /> 
  <span> Debit/Credit Card</span>
  <img className="payment-logo" src="https://www.logolynx.com/images/logolynx/c3/c36093ca9fb6c250f74d319550acac4d.jpeg" alt="" />
</div>

<button type = "button" className='btn-secondary'><Link to = "/confirm" >Place Order</Link></button>
              </div>
            </div>
          </div>
          </div>
          <Footer />
        </div>
      )
      
}

export default CheckoutPage