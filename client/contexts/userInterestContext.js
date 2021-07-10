import React, {useContext, createContext, useState, useEffect} from 'react'
import axios from 'axios'
const  UserInterestContext = createContext()

export function useUserInterestContext() {
    return useContext(UserInterestContext)
}

export function UserInterestProvider({children}) {
    const [userInterests, setUserInterests] = useState([])
    const [newSession, setNewSession] = useState(true)
    const [loading, setLoading] = useState(true)

    //get user or start a session
    async function getUser() {

        try {
            let response = await axios.get('/api/users')
            if (response.data.interests && response.data.interests.length > 0) {
                setUserInterests(response.data.interests)
                setNewSession(false)
            } else {
                setUserInterests([])
            }  
            setLoading(false)
            return response.data
            
        } catch (error) {
            console.log(error)
        }

    }

    async function createAccount(array) {
        try {
            let response = await axios.put('api/users', array)
            if(response) {
                setUserInterests(response.data.interests)
                setNewSession(false)
            }
            return response
        } catch (error) {
            console.log("ERROR IN CREATE ACCOUNT FUNCTION", error)
        }
 
    }
    useEffect(() => {
        console.log("CONTEXT USE EFFECT", userInterests)
        setLoading(false)
    }, [userInterests, newSession])



    const value = {
        userInterests,
        setUserInterests,
        newSession,
        getUser,
        createAccount,
        setNewSession,
    }
    return (
        <UserInterestContext.Provider value={value}>
            {children}
        </UserInterestContext.Provider>
    )
}


