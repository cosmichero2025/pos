import React, { useState, createContext, useReducer } from 'react';

export const OrderContext = createContext();

const initialState = [{
    name: "BBQ Swiss Burger",
    price: 12.99,
    qty: 1
}];

const reducer = (state, action) => {
    switch(action.type) {

        case 'addOrder': {
            const { name, price } = action.payload;
            const objIdx = state.findIndex(obj => obj.name === name);

            if(objIdx !== -1) {
                const updatedObj = { ...state[objIdx], qty: state[objIdx].qty += 1}
                
                // This chops out the obj that needs to be changes and inserts a new one with the updated value
                return [...state.slice(0, objIdx), updatedObj, ...state.slice(objIdx + 1)];
            } else {
                // Just appends a new obj if one of this type doesn't exist yet
                return [...state, { name: name, price: price, qty: 1 }]
            }
        };
        case 'removeOrder': {
            const { name } = action.payload;
            const objIdx = state.findIndex(obj => obj.name === name);

            const newState = state.slice();
            newState.splice(objIdx, 1);
            return newState;
        };
        case 'increaseQty': {
            const { name } = action.payload;
            const objIdx = state.findIndex(obj => obj.name === name);

            const newState = state.slice();
            newState[objIdx].qty += 1;

            return newState;
        };
        case 'decreaseQty': {
            const { name } = action.payload;
            const objIdx = state.findIndex(obj => obj.name === name);

            const newState = state.slice();
            const qty = newState[objIdx].qty;

            // If the quantity is already 1 then it will just delete the entry from state
            qty > 1 ? newState[objIdx].qty -= 1 : newState.splice(objIdx, 1);

            return newState;
        }
        case 'clearOrder': return initialState;
        default: throw new Error('Reducer Action Does Not Exist');
    }
}

export function OrderProvider(props) {
    // const [order, setOrder] = useState(initialState);
    const [order, dispatch] = useReducer(reducer, initialState);

    return(
        <OrderContext.Provider /*value={[order, setOrder]}*/ value={[order, dispatch]}>
            {props.children}
        </OrderContext.Provider>
    );
} 