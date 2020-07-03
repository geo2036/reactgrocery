import React from 'react';
//import DesktopToolbar from "../DesktopToolbar/DesktopToolbar";
import MobileToolbar from "../MobileToolbar/MobileToolbar";
import Logo from "../Logo/Logo";

const Navbar = () => {
    return (
        <div>
           {/* <DesktopToolbar /> */}
           <Logo />
           <MobileToolbar />
        </div>
    )
}

export default Navbar;

