import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route } from 'react-router-dom'

const PrivateAdminRoute = ({component:Component, ...rest}) => {
  const userLogin=useSelector((state)=>state.userLogin)
  const {userInfo}=userLogin
  
    return (
    <Route>
        {...rest}
        component={(props)=>{
           
            if(userInfo && userInfo.isAdmin){
                return <Component {...props}/>
            }
            else{
                return <Navigate to="/admin/login"/>
            }
        }}
      
    </Route>
  )
}

export default PrivateAdminRoute
