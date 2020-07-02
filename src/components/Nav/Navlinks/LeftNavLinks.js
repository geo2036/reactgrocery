import React from 'react';
import { NavlinksStyled } from "./NavlinksStyled";

// Get out font awesome imports
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LeftNavLinks = () => {
    return (
        <NavlinksStyled>
           <FontAwesomeIcon icon={faUser} />
           <FontAwesomeIcon icon={faHeart} />
           <FontAwesomeIcon icon={faToggleOn} />
        </NavlinksStyled>
    )
}

export default LeftNavLinks
