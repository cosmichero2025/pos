import React, { useContext } from 'react';
import styled from 'styled-components';
import { OrderContext } from '../OrderContext';

const Container = styled.div`
  display: flex;
  background-color: ${props => (props.isDark ? '#F1F2F7' : 'transparent')};
  user-select: none;
`;

const DescCon = styled.div`
  width: 40%;
  text-align: left;
  padding-left: .4rem;
  text-overflow: ellipsis; 
`;

const QtyCon = styled.div`
  width: 20%;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const Qty = styled.div `
  position: absolute;
  width: 2rem;
  height: 2rem;
  color: white;
  background-color: #08D9D6;
  border-radius: 100%;
  top: 200%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  transition-property: opacity, top, background-color;
  transition-duration: .2s, .2s, .05s;
  cursor: pointer;
  
  &:hover {
    background-color: #00A6A3;
  }

  ${Container}:hover & {
    opacity: 1;
    top: 50%;
  }
`;

const Decrease = styled(Qty) `
  left: .5rem;
`;

const Increase = styled(Qty) `
  right: .5rem;
`;

const PriceCon = styled.div`
    width: 20%;
    text-align:center;
`;

const Text = styled.h3`
  color: #32323a;
  font-size: 1.6rem;
  margin: 1rem 0;
`;

function TallyItem({ isDark, name, price, qty }) {
  
  const [order, dispatch] = useContext(OrderContext);

  return (
    <Container isDark={isDark}>
      <DescCon>
        <Text>{name}</Text>
      </DescCon>
      <QtyCon>
        <Decrease onClick={() => dispatch({ type: 'decreaseQty', payload: {name: name} })}>-</Decrease>
        <Text>{qty}</Text>
        <Increase onClick={() => dispatch({ type: 'increaseQty', payload: {name: name} })}>+</Increase>
      </QtyCon>
      <PriceCon>
        <Text>{price}</Text>
      </PriceCon>
      <PriceCon>
        <Text>{(price * qty).toFixed(2)}</Text>
      </PriceCon>
    </Container>
  );
}

export default TallyItem;
