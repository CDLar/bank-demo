import React, { createContext, useState } from 'react';

export const UserContext = createContext(false);

export function UserProvider(props) {
    const [user, setUser] = useState()

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {props.children}
        </UserContext.Provider>
    )
}