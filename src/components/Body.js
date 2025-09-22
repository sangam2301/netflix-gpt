import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from 'react-router-dom';
import { UseEffect} from "react";
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from "../Utils/firebase";
import { useDispatch } from 'react-redux';
import { removeUser } from '../Utils/userSlice';



const Body = () => {
    const dispatch = useDispatch();
  
    
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>,
        },
        {
            path: "/browse",
            element: <Browse/>,
        },
    ]);

    useEffect(() =>{
        onAuthStateChanged(auth, (user) =>{
            if(user){
                const {uid, email, displayName, photoURL} = user;
                dispatch(
                    addUser({
                        uid: uid,
                         emial: email, 
                         displayName: displayName,
                        photoURL: photoURL,
                    }));
           
            }else{
                dispatch(removeUser());
              

            }
            
        });
    },[])

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  );
};

export default Body;