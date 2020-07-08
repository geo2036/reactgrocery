import React from 'react';
import SideMenu from './SideMenu/SideMenu';
//import Backdrop from "./Backdrop/Backdrop";

const SideBar = ({ open }) => {
    return (
        <>
            <SideMenu open={open} />
        </>
    )
}

export default SideBar
