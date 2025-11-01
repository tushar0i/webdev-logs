import React from "react";
import { useSelector } from "react-redux";

const BillSum = function BillSum(){
    const total = useSelector((state)=> state.cart.total)
    return(<>
        <div className="billSummary">
            <h3>Total: ₹{total}</h3>
            <button className="checkoutBtn">Proceed to Checkout</button>
        </div>
    </>)
}

export default BillSum