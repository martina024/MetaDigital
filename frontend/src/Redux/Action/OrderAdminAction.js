
// crate order

import { ORDER_CREATE_REQUEST } from "../Constants/OrderAdminActionTypes"

export const createOrder=(order)=>async(dispatch , getState)=>{
    try {
        dispatch({type:ORDER_CREATE_REQUEST})
        const{
            userLogin:{userInfo}
        }=getState()

        const config={
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${userInfo.token}`
            }
        }
    } catch (error) {
        
    }
}