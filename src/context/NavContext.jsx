import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

export const NavBarContext = createContext();
export const NavBarColorContext = createContext();

const NavContext = ({children}) => {
    const [navOpen, setNavOpen] = useState(false);
    const [navColor, setNavColor] = useState("white");

    const locate = useLocation().pathname;
    useEffect(()=>{
      if(locate == "/projects" || locate == "/agency"){
        setNavColor("black");
      }else{
        setNavColor("white");
      }
    }, [locate]);

  return (
    <div>
        <NavBarContext.Provider value={[navOpen, setNavOpen]}>
          <NavBarColorContext.Provider value={[navColor, setNavColor]} >
            {children}
          </NavBarColorContext.Provider>
        </NavBarContext.Provider>
    </div>
  )
}

export default NavContext;