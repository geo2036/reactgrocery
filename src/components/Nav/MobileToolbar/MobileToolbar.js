import React from 'react';
import { NavlinksStyled } from "../Navlinks/NavlinksStyled";
import { NavlinksWrapper } from "../Navlinks/NavlinksWrapper";
import Burger from "../Burger/Burger";

import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MobileToolbar = () => {
    return (
        <NavlinksWrapper>
            <NavlinksStyled>
                <FontAwesomeIcon icon={faUser} />
                <select name="currency" id="currency">
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="CAD">CAD</option>
                </select>
                <FontAwesomeIcon icon={faShoppingCart} />
                <span>$ 0.00</span>
            </NavlinksStyled>

            <NavlinksStyled>
                <FontAwesomeIcon icon={faSearch} />
                <Burger />
            </NavlinksStyled>
        </NavlinksWrapper>
    )
}

export default MobileToolbar
