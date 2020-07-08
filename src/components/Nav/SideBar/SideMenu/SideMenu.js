import React from 'react'
import styled from 'styled-components';


export const StyledMenu = styled.nav`
    display: flex;
    flex-direction: column;
    flex-flow: row nowrap; 
    width: 100%;
    height: 100vh;
    position: fixed;
    top:10%;
    right: 0;
    padding-top: 3.5rem;
    background-color: ${({ theme }) => theme.primaryDark };
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;

    ul {
        list-style: none;
        width: 90%;
        margin-left:-1.2em;
    }

    li {
        color: ${({ theme }) => theme.primaryLight };
        display: flex;
        padding: 30px 10px;
        font-size: 0.8rem;
        border-top: 0.5px solid ${({ theme }) => theme.accentDark };
        text-transform: uppercase;
        letter-spacing: 0.5rem;
        text-decoration: none;
    }

    li:hover {
        background: ${({ theme }) => theme.primaryHover };
    }
`;

const SideMenu = ({ open }) => {
    return (
        <StyledMenu open={open}>
            <ul>
                <li>Home</li>
                <li>Categories</li>
                <li>About Us</li>
                <li>Blog</li>
                <li>Contact Us</li>
                <li>Continue Shopping</li>
            </ul>
        </StyledMenu>
    )
}

export default SideMenu;

