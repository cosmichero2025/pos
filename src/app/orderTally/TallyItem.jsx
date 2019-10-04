import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background-color: ${props => (props.isDark ? '#F1F2F7' : 'transparent')};
`;

const DescCon = styled.div`
  width: 40%;
  text-align: left;
  padding-left: .4rem;
  text-overflow: ellipsis; 
`;

const QtyCon = styled.div`
  width: 10%;
  text-align: center;
`;

const PriceCon = styled.div`
    width: 25%;
    text-align:center;
`;

const Text = styled.h3`
  color: #32323a;
  font-size: 1.6rem;
  margin: 1rem 0;
`;

function TallyItem({ isDark, name, price, qty }) {
  return (
    <Container isDark={isDark}>
      <DescCon>
        <Text>{name}</Text>
      </DescCon>
      <QtyCon>
        <Text>{qty}</Text>
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
