import React from 'react';
import DesktopToolbar from "../DesktopToolbar/DesktopToolbar";
import MobileToolbar from "../MobileToolbar/MobileToolbar";
import Logo from "../Logo/Logo";

import useViewport from "../../../hooks/useViewport";

const Navbar = ({ open, setOpen }) => {
    const { width } = useViewport();

    return (
        <div>
           { !width && <DesktopToolbar />}
           <Logo />
           { width && <MobileToolbar open={open} setOpen={setOpen} />}
        </div>
    )
}

export default Navbar;

