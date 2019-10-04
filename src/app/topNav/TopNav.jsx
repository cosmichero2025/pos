import React from 'react'
import styled from 'styled-components';

const Header = styled.div `
    grid-row: 1 / 2;
    grid-column: ${props => props.short ? '1 / 2' : '1 / -1'};
    background-color: #08D9D6;
`;

function TopNav(props) {
    return (
        <Header short={props.short}></Header>
    )
}

export default TopNav;
