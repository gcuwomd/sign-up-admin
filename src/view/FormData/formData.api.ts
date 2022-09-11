import BaseAxios from "./../../axios/base_axios";
import ResHelper from "../../axios/ResHelper";
// 获取所有报名数据
function getAllData() {
  return BaseAxios.post("/getAll").then(ResHelper);
}

// 根据问卷 id 删除问卷
function deleteQuestionnaireById(id: string){
    return BaseAxios.post("/remove",{
        id
    }).then(ResHelper);
}

// 根据键值对来查询模糊查询
function queryByKV(key: string,value: string){
    return BaseAxios.post("/selectByKV",{
        key,
        value
    }).then(ResHelper);
}

// 根据问卷id获取对应的图片
function getPicture(qt_id: number) {
  return BaseAxios.post("/selectList", {
    qt_id,
  }).then(ResHelper);
}

// 导出 Excel 表格文件
function excelFileExport(){
    return BaseAxios.post("/ExcelOut",{},{
        responseType:'blob'
    }).then(ResHelper)
}

export { 
    getAllData, 
    getPicture,
    deleteQuestionnaireById,
    queryByKV,
    excelFileExport
};
