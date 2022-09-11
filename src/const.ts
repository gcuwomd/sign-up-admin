// 请求基地址
let baseUrl="http://120.24.240.172:8088/api/"

// 404 页配置
// 404 页重定向时间 (单位:秒)
const NotFoundTime=3;

// 后端结果响应处理配置
// config.url 白名单（只返回data）
const resHelperWhitelist=['/ExcelOut']

// 环境判定
switch(import.meta.env.MODE){
    case "development":
       baseUrl="http://120.24.240.172:8088/api/" ;
       break;
    case "production":
        baseUrl="http://120.24.240.172:8088/api/";
        break;
}

export {
    baseUrl,
    resHelperWhitelist,
    NotFoundTime,
}