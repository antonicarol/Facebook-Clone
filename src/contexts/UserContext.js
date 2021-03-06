import React, { createContext, useContext, useReducer } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({reducer, initialState, children}) =>{
    return (<UserContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </UserContext.Provider>)
}

export const useStateValue = () => useContext(UserContext);
