import { createSlice } from "@reduxjs/toolkit";
import cake from "../../assets/cake-slice.png"
import icecream from "../../assets/ice-cream.png"
import chocolate from "../../assets/chocolate-bar.png"


const initialState = { // this is our initial state of the app 
    items: [
    { id: 1, name: "Cake", price: 200, quantity: 0 , itemTotal: 0 , image :cake},
    { id :2, name: "IceCream" , price: 100, quantity: 0, itemTotal: 0 , image :icecream},
    { id: 3, name: "Chocolate", price: 50 , quantity: 0 , itemTotal: 0 , image :chocolate}
  ],
    total: 0
}

export const cartSlice = createSlice({
    name:"cart",
    initialState,

    reducers:{ // here we define fuctions( reducers ) that describe how our state can be changed 
        increaseQuantity: (state , action ) => {
            const { id } = action.payload 
            const item = state.items.find(i => i.id === id)
            if (item) {
                item.quantity ++
            }
        },
        decreaseQuantity: (state , action) => {
            const { id } = action.payload
            const item = state.items.find(i => i.id === id)
            if (item && item.quantity>0) {
                item.quantity --
            }
        },
        calculateItemTotal: (state , action) => {
            const { id } = action.payload
            const item = state.items.find(i => i.id === id)
            if (item) {
                item.itemTotal = item.quantity*item.price
            }
        },
        calculateTotal: (state) => {
            state.total = state.items.reduce((sum, item) => sum + item.itemTotal, 0)
        }
    }
})

export const {increaseQuantity , decreaseQuantity ,calculateItemTotal , calculateTotal} = cartSlice.actions
export default cartSlice.reducer