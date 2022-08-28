// 请求基地址
let baseUrl="http://127.0.0.1:4523/m1/1014290-0-default/"

// 404 页配置
// 404 页重定向时间 (单位:秒)
const NotFoundTime=3;

// 环境判定
switch(import.meta.env.MODE){
    case "development":
       baseUrl="http://127.0.0.1:4523/m1/1014290-0-default/" ;
       break;
    case "production":
        baseUrl="http://121.37.90.57:3000";
        break;
}

export {
    baseUrl,
    NotFoundTime,
}
