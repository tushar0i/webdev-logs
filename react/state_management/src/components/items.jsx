import React from "react";
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, calculateItemTotal, calculateTotal } from "../store/slices/cartSlice";

const Item = ({ item }) => {
    const d = useDispatch()

    const handleIncrease = () => {
        d(increaseQuantity({ id: item.id }))
        d(calculateItemTotal({ id: item.id }))
        d(calculateItemTotal({ id: item.id }))
        d(calculateTotal())
    }

    const handleDecrease = () => {
        d(decreaseQuantity({ id: item.id }))
        d(calculateItemTotal({ id: item.id }))
        d(calculateItemTotal({ id: item.id }))
        d(calculateTotal())
    }

    return (<>
        <div className="item">
            <img src={item.image} alt={item.name} className="itemImage" />
            <div className="itemName">{item.name}</div>
            <div className="itemPrice">₹{item.price}</div>
            <div className="qIncDec">
                <button onClick={handleDecrease}>-</button>
                <span>{item.quantity}</span>
                <button onClick={handleIncrease}>+</button>
            </div>
            <div className="itemTotal">₹{item.itemTotal}</div>
        </div>
    </>)
}

export default React.memo(Item);