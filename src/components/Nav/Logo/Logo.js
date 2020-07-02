import React from 'react';
import styled from "styled-components";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-size: 1.1em;

    & > * {
        margin: 0.3em 0.2em;
    }

    & > :nth-child(2) {
        color: ${({ theme }) => theme.accentDark }; 
        font-size: 1.3em; 
    }

    & > span:last-of-type {
        color: ${({ theme }) => theme.accentDark };
        font-size: 1.1em;
        font-weight: 500;
        letter-spacing: 2px;
        margin-left: -0.1em;
    }
`

const Logo = () => {
    return (
        <LogoWrapper>
            <span>React</span>
            <FontAwesomeIcon icon={faLeaf} />
            <span>Grocery</span>
        </LogoWrapper>
    )
}

export default Logo
