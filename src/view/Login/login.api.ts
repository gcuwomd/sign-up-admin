import {BaseAxios} from "./../../axios/base_axios"

function getcode(){
    BaseAxios.get("/getcode").then((response) => {
        console.log(response);
        
    })
}
export {getcode}