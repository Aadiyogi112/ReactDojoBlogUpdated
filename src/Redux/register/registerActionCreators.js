import { REGISTER_USER } from "./registerActionTypes"
export const registerUser=(loginData)=>{
    return {
        type:REGISTER_USER,
        payload:loginData
    }
}