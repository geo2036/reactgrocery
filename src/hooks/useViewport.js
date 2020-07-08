import React from "react"
import { ViewportContext } from "../context/ViewportContext";

const useViewport = () => {
    
    const { width } = React.useContext(ViewportContext);

    return { width };

}

export default useViewport;
