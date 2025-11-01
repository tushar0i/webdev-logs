import { createSlice } from "@reduxjs/toolkit";

const intialState = { // this is our initial state of the app 
    items: [
    { id: 1, name: "Cake", price: 200, quantity: 0 },
    { id :2, name: "IceCream" , price: 100, quantity: 0},
    { id: 3, name: "Chocolate", price: 50 , quantity: 0 }
  ],
    total: 0
}

export const cartSlice = createSlice({

})