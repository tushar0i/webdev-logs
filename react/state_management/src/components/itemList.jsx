import React from "react";
import { useSelector } from "react-redux";
import Item from "./items";
import BillSum from "./billSummary";

const ItemList = function ItemList(){
    const items = useSelector((state)=>state.cart.items)

    return(<>
        <div className="itemList">
      
      <div className="itemTable">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      <BillSum />
    </div>
    </>)
}

export default ItemList;