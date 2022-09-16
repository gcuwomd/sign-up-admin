# 网信委招新系统后台
[English version](./doc/README_EN.md)
## 项目简介
"网信委招新系统后台" 是为广州城市理工学院学生网络与信息工作委员会制作的新生报名后台信息展示系统 。它是基于 Vue 3 + TypeScript + Vite + Naive UI 实现。在这个系统里你可以完成像查看报名信息 (包括个人照片等) , 删除报名信息 , 查询个人信息 , 导出 Excel 等操作。这个系统还集成了部分比较关键指标的统计功能,比如:男女比例 , 报名总人数 , 各部门的志愿分布情况 。这个系统是网站运维部和信息化运维部的合作项目。
## 快速开始
```shell
# 克隆项目
git clone git@github.com:gcuwomd/sign-up-admin.git

# 进入项目目录
cd sign-up-admin

# 安装依赖
pnpm i

# 运行项目
pnpm dev

# 构建项目
pnpm build
```
## 在线预览

## 使用
### 登录
![登录页](./doc/img/login.png)
### 首页
![首页](./doc/img/index.png)
### 详细页
![详细页](./doc/img/detail.png)
### 数据统计
![数据统计](./doc/img/statisit.png)
### 关于
![关于页](./doc/img/about.png)
## 更新日志
- 添加各部门报名分布表格
- 修复删除报名信息 Bug
- 优化搜索的交互体验
## 感谢

[广州城市理工学院网络与信息中心](https://nc.gcu.edu.cn/)

## 维护者
[![@Peng-Hello](https://avatars.githubusercontent.com/u/70511773?v=4)](https://github.com/Peng-Hello)
[@Peng-Hello](https://github.com/Peng-Hello)

## 使用许可
[Apache-2.0 license](LICENSE)