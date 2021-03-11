import React, {createContext,useState, useContext} from "react";

const user_context = createContext();
const user_update_context = createContext()


export function Use_users() {
    return useContext(user_context)
}

export function Use_users_update () {
    return useContext(user_update_context)
}

export function User_provider({ children }) {
    const [user,set_user] = useState("this is a test")

    function change_user(new_user) {
        set_user(new_user)
    }

    return (
        <user_context.Provider value={user}>
            <user_update_context.Provider value={change_user}>
                {children}
            </user_update_context.Provider>
        </user_context.Provider>
    )
}
