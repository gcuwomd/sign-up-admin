import { operationConfig } from './formData.config';
export interface IFormData {
    stu_id:string,
    name:string,
    sex:string,
    department:string,
    major:string,
    intention1:string,
    intention2:string,
    phone:string,
    introduce:string,
    adjust:string,
    operationConfig:string[],
    id:number,
}

export interface IBackFormData extends IFormData {
    bool:any
}
