import React from 'react';
import LeftNavLinks from "./LeftNavLinks";
import RightNavLinks from "./RightNavlinks";
import { NavlinksWrapper } from "./NavlinksWrapper";

const Navlinks = () => {
    return (
        <NavlinksWrapper>
            <LeftNavLinks />
            <RightNavLinks />
        </NavlinksWrapper>
    )
}

export default Navlinks

