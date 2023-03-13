import { LOGIN_USER } from "./loginActionTypes"
export const loginUser=(loginData)=>{
    return {
        type:LOGIN_USER,
        payload:loginData
    }
}
