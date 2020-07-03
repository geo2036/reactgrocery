import React from 'react';
import styled from 'styled-components';

const StyledBurger = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    z-index: 20;
    display: flex;
    margin-top:11px;
    justify-content:space-around;
    flex-flow: column nowrap;

    div {
        width: 1.5rem;
        height: 0.14rem;
        background-color: ${({ theme }) => theme.primaryDark };
        border-radius: 10px;
    }
`

const Burger = () => {
    return (
        <StyledBurger>
            <div></div>
            <div></div>
            <div></div>
        </StyledBurger>
    )
}

export default Burger
