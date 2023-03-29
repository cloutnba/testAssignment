
import {createContext, useState} from "react";


export const MenuContext = createContext({});

const ItemProvider = ({children}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <MenuContext.Provider value={{isMenuOpen, toggleMenu}}>
            {children}
        </MenuContext.Provider>
    )
}

export default ItemProvider;