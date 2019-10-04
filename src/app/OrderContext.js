import React, { useState, createContext } from 'react';

export const OrderContext = createContext();

const initialState = [];

export function OrderProvider(props) {
    const [order, setOrder] = useState(initialState);

    return(
        <OrderContext.Provider value={[order, setOrder]}>
            {props.children}
        </OrderContext.Provider>
    );
} 