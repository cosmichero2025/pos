import React, { useContext } from 'react';
import styled from 'styled-components';
import TallyItem from './TallyItem';

import { OrderContext } from '../OrderContext';

const Container = styled.div `
    grid-row: 1 / -1;
    grid-column: 2 / -1;
    padding-top: 0;
    display: grid;
    grid-template-rows: calc(10vh - .8rem) 16rem auto 12rem;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: .8rem;
    padding: .8rem;
    padding-top: 0;
    height: 100%;
`;

const UserContainer = styled.div `
    color: white;
    grid-column: 1 / -1;
    grid-row: 1 / 2;
`;

const TotalContainer = styled.div `
    grid-column: 1 / -1;
    grid-row: 2 / 3;
    display: flex;
    flex-direction: column;
    color: #fff;
    background-color: #32323A;
    padding: 1rem;

    h2 {
        font-size: 2rem;
        margin-bottom: .6rem;
    }

    h1 {
        margin-top: auto;
        font-size: 6rem;
        font-weight: 800;
    }
`;

const TallyContainer = styled.div `
    background-color: #fafafa;
    grid-column: 1 / -1;
    grid-row: 3 / 4;

`;

const TallyHeader = styled.div `
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #32323A;

    h3 {
        color: #32323A;
        transform: uppercase;
        font-size: 1.6rem;
        margin: 1rem 0;
        text-align: center;
        width: 20%;

        &:nth-of-type(1) {
            width: 40%;
        }
    }
`;


// Had to do a hacky absolute position to get the scrollbar to work correctly but it works...
const TallyScroll = styled.div `
    position: relative;
    height: 100%;
`;

const TallyScrollInner = styled.div `
    position:absolute;
    top:0;
    left:0;
    right:0;
    max-height: calc(100% - 3.9rem);
    overflow:auto;
`;

const Option = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.color};
    user-select: none;
    cursor: pointer;
    transition: all .05s;

    &:hover {
        filter: brightness(115%);
    }

    h1 {
        color: white;
        font-weight: 300;
        font-size: 1.8rem;
    }
`;

function OrderTally() {
    const [order, dispatch] = useContext(OrderContext);

    return (
        <Container>
            <UserContainer>
                <h1>Welcome: User</h1>
            </UserContainer>

            <TotalContainer>
                <h2>DINING: WALK-IN</h2>
                <h2>TOTAL:</h2>
                <h1>${(order.reduce((acc, current) => acc + (current.price * current.qty), 0)).toFixed(2)}</h1>
            </TotalContainer>

            <TallyContainer>
                <TallyHeader>
                    <h3>Description</h3>
                    <h3>QTY.</h3>
                    <h3>Each</h3>
                    <h3>Total</h3>
                </TallyHeader>

                <TallyScroll>
                    <TallyScrollInner>
                    {
                    order.map((item, i) => {
                        return(
                            <TallyItem 
                            key={`tally-item--${i}`} 
                            isDark={i % 2 === 0} 
                            name={item.name} 
                            price={item.price} 
                            qty={item.qty} />
                        )
                    })
                    }
                    </TallyScrollInner>
                </TallyScroll>
            </TallyContainer>

            <Option color='#A9D86E'>
                <h1>Send Order</h1>
            </Option>
            <Option color='#FBB321'>
                <h1>Hold Order</h1>
            </Option>
            <Option color='#FF6C60' onClick={() => dispatch({ type: 'clearOrder' })}>
                <h1>Clear Order</h1>
            </Option>
        </Container>
    )
}

export default OrderTally
