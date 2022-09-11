import BaseAxios from "./../../axios/base_axios"
import {ILoginForm} from "./login.model"
import ResHelper from "../../axios/ResHelper"
// Admin 账户登录
function login(loginForm: ILoginForm){
    return BaseAxios.post("/login",{
        username:loginForm.account,
        password:loginForm.password
    }).then(ResHelper)
}

export {login}