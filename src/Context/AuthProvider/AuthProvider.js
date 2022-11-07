import React from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { createContext } from 'react';
import app from '../../Firebase/Firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext=createContext();
const auth=getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)
    const [loading]=useState(true);


    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
        
    }

    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        return signOut(auth);
    }

    useEffect( ()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            // console.log(currentUser);
            setUser(currentUser);
        });
        return () =>{
            return unsubscribe();
        }
    },[])


    const authInfo={
        user,
        loading,
        createUser,
        login,
        logOut,

    }


    return (
        <AuthContext.Provider  value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;