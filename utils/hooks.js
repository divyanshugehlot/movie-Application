
import { useSelector } from 'react-redux'
import {useEffect} from 'react'


export const useMessageAndErrorUser = (navigation,dispatch,nav="login")=>{
   
    const {loading,message,error,isAuthenticated} = useSelector((state)=>state.user);
   
    useEffect(() => {
       if(error){
           console.log(error)
        }
        dispatch({
           type:"clearError"
        });
        if(message){
           console.log(message)
        }
        if(isAuthenticated)
        {
         navigation.navigate(nav)
        }
        dispatch({
           type:"clearMessage"
        });
       }, [error,message,dispatch]);

       return loading;
}