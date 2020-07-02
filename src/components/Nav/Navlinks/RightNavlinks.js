import React from 'react';
import { NavlinksStyled } from "./NavlinksStyled";

// Get out font awesome imports
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RightNavlinks = () => {
    return (
        <NavlinksStyled>
            <FontAwesomeIcon icon={faSearch} />
            <select name="currency" id="currency">
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="CAD">CAD</option>
            </select>
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>$ 0.00</span>
        </NavlinksStyled>
    )
}

export default RightNavlinks
