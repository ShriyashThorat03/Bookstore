import { createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2';

const initialState={
    cartItems: []
}
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers:{
        addtoCart: (state,action) => {
            const existingItem = state.cartItems.find(item => item._id === action.payload._id);
            if(!existingItem) {
                state.cartItems.push(action.payload)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Product added to Cart",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }else(
                Swal.fire({
                    title: "Already added to cart",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "OK!"
                  })
            )
        },
        removeFromCart :(state,action) =>{
            const existingItem = state.cartItems.filter(item => item._id !== action.payload._id);
            if(!existingItem) {
                state.cartItems.pop(action.payload)
                alert("item removed")
            }
        },
        clearCart :(state) =>{
            state.cartItems =[]
        }
    }
})



//export the action
export const {addtoCart, removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;