import {createContext, useState, useContext} from 'react'

const AppContext= createContext(null);
export const useAppContext=()=>{
    const context=useContext(AppContext)
    if (context===undefined){
        throw new Error('AppContext must be within appContextProvider!')
    }
    return context;
}
const AppContextProvider=({children})=>{
    const [favorites,setFavorites]=useState([])
    const addToFavorites=(el)=>{
        const oldFavorites=[...favorites];
        const newFavorites= oldFavorites.concat(el);
        setFavorites(newFavorites);
    }
    return(
        <AppContext.Provider value={{favorites,addToFavorites}}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider