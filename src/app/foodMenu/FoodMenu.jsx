import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components';
import { FaHamburger, FaGulp, FaGlassCheers, FaGitkraken } from 'react-icons/fa';
import { IoMdIceCream } from 'react-icons/io';

import foodData from './food.json';
import { OrderContext } from '../OrderContext';

const Container = styled.div `
    grid-row: 2 / -1;
    grid-column: 1 / 2;
    background-color: #fafafa;
    user-select: none;
`;

const FoodBar = styled.div `
    height: 8.8rem;
    background-color: #32323A;
    display: flex;
    align-items: center;
    padding: 0 2rem;
`;

const FoodBarOption = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 3rem;
    cursor: pointer;

    svg {
        fill: ${props => props.isActive ? '#fff' : '#60606C'};
    }

    &:hover {
        svg {
            transition: all .15s;
            fill: #fff;
        }

        h3 {
            transition: all .15s;
            color: #fff;
        }
    }
    
    h3 {
        margin-top: .8rem;
        font-size: 1.6rem;
        color: ${props => props.isActive ? '#fff' : '#60606C'};
        text-transform: uppercase;
    }
`;

const FoodGrid = styled.div `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    grid-auto-rows: 25rem;
    grid-gap: 1rem;
    padding: 1rem;
    max-height: calc(100% - 8.8rem);
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
`;

const FoodItem = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    cursor: pointer;

    &:hover {
        img {
            border-radius: 20%;
        }
    }

    img {
        height: 20rem
        width: 20rem;
        border-radius: 100%;
        transition: all .15s;
    }

    h1 {
        font-weight: 300;
        font-size: 3rem;
        color: #32323A;
        margin-top: 1rem;
    }
`;

function FoodMenu() {
    const [currentTab, setCurrentTab] = useState('burgers');
    const [currentFood, setCurrentFood] = useState(foodData[0].food);
    
    const [order, setOrder] = useContext(OrderContext);

    useEffect(() => {
        setCurrentFood(() => {
            const newFood = foodData.filter(obj => obj.category === currentTab);

            return newFood[0].food;
        })
    }, [currentTab]);

    const addOrder = ({name, price}) => {
        const objIdx = order.findIndex(obj => obj.name === name);
        
        if(objIdx !== -1) {
            const updatedObj = { ...order[objIdx], qty: order[objIdx].qty += 1}

            // This chops out the obj that needs to be changes and inserts a new one with the updated value
            setOrder([...order.slice(0, objIdx), updatedObj, ...order.slice(objIdx + 1)])
        } else {
            // Just appends a new obj if one of this type doesn't exist yet
            setOrder(prevOrders => [...prevOrders, { name: name, price: price, qty: 1 }])
        }
    }

    return (
        <Container>
           <FoodBar>
            <FoodBarOption isActive={'burgers' === currentTab ? true : false} onClick={() => setCurrentTab('burgers')}>
                <FaHamburger color='#60606C' size='40' />
                <h3>Burgers</h3>
            </FoodBarOption>

            <FoodBarOption isActive={'seafood' === currentTab ? true : false} onClick={() => setCurrentTab('seafood')}>
                <FaGitkraken color='#60606C' size='40'/>
                <h3>Seafood</h3>
            </FoodBarOption>

            <FoodBarOption isActive={'drinks' === currentTab ? true : false}>
                <FaGulp color='#60606C' size='40'/>
                <h3>Drinks</h3>
            </FoodBarOption>

            <FoodBarOption isActive={'alcohol' === currentTab ? true : false}>
                <FaGlassCheers color='#60606C' size='40'/>
                <h3>Alcohol</h3>
            </FoodBarOption>


            <FoodBarOption isActive={'desert' === currentTab ? true : false}>
                <IoMdIceCream color='#60606C' size='40'/>
                <h3>Desert</h3>
            </FoodBarOption>
           </FoodBar>
        <FoodGrid>
            { 
            currentFood.map(item => { 
                return (
                <FoodItem 
                key={`food-${item.name}`}
                onClick={() => {
                    addOrder({name: item.name, price: item.price})
                }}>
                    <img src={item.src} alt={item.name} />
                    <h1>{item.name}</h1>
                </FoodItem>
                )
            })  
            }
        </FoodGrid>
        </Container>
    )
}

export default FoodMenu