import React from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import { createContext } from 'react';
import app from '../../Firebase/Firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext=createContext();
const auth=getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)
    const [loading,setLoading]=useState(true);


    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
        
    }

    const updateUserProfile = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    }

    const login=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        localStorage.removeItem('jwt-token')
        setLoading(true);
        return signOut(auth);
    }

    useEffect( ()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            // console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
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
        updateUserProfile,

    }


    return (
        <AuthContext.Provider  value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;