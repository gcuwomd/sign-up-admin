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

type DepartmentCollection ={
    website:number,
    administeration:number,
    informatization:number,
    network:number,
}

export enum DepartmentName {
    Website="网站运维部",
    Administeration="行政秘书部",
    Informatization="信息化运维部",
    Network="网络运维部"
}
export type DrawData={
    label: string,
    type: string,
    value: number
}
export interface IStatisticData{
    headcount:number,
    man:number,
    woman:number,
    department:DrawData[]
}

export enum Legend{
    Intention1="第一志愿",
    Intention2="第二志愿"
}


