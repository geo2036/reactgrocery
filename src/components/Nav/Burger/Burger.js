import React from 'react';
import { bool, func } from 'prop-types';
import styled from 'styled-components';

const StyledBurger = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    z-index: 20;
    display: flex;
    margin-top:11px;
    justify-content:space-around;
    flex-flow: column nowrap;

    &:focus {
        outline: none;
    }

    div {
        width: 1.5rem;
        height: 0.14rem;
        background-color: ${({ theme, open }) => open ? theme.primaryLight : theme.primaryDark };
        border-radius: 10px;
        transition: all 0.25s linear;
        transform-origin: 1px;

        :first-child {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        :nth-child(2) {
            opacity: ${({open}) => open ? '0' : '1'};
            transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
        }

        :nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`

const Burger = ({ open, setOpen }) => {
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div></div>
            <div></div>
            <div></div>
        </StyledBurger>
    )
}

Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
}

export default Burger
