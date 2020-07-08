import React from "react";
import { ThemeContext } from "styled-components";

// Creating a context
const ViewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
    const themeContext = React.useContext(ThemeContext);

    const mq = window.matchMedia(`(max-width: ${themeContext.mobile})`);
    const [ width, setWidth ] = React.useState(mq.matches);
  
    React.useEffect(() => {
        const handleWindowResize = () => setWidth(mq.matches);
        mq.addListener(handleWindowResize);

        return () => mq.removeListener(handleWindowResize);
    }, [mq]);

    return (
        <ViewportContext.Provider value={{ width }}>
            {children}
        </ViewportContext.Provider>
    );
};

export { ViewportContext, ViewportProvider };
