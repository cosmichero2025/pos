import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Menu = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30rem;
  height: 30rem;
  background: #333;
  transition: background .1s;
  cursor: pointer;

  &:hover {
    background: #4D4D4D;
  }
`;

const Option = styled.h1`
  font-weight: 300;
  font-size: 3rem;
  color: #fff;
`;

function IntroMenu() {
  return (
    <div className='intro-menu-container'>
      <Menu>

        <Link to='/order/walk-in'>
          <MenuItem>
            <Option>Walk-In</Option>
          </MenuItem>
        </Link>

        <MenuItem>
          <Option>Carry-Out</Option>
        </MenuItem>

        <MenuItem>
          <Option>Delivery</Option>
        </MenuItem>

        <MenuItem>
          <Option>Settings</Option>
        </MenuItem>
        
      </Menu>
    </div>
  );
}

export default IntroMenu;
