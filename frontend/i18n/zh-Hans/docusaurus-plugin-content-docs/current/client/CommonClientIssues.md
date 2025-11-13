---
title: 常见客户端问题
sidebar_label: 常见客户端问题
---

### 出现"San Andreas 无法找到"错误

San Andreas Multiplayer **并非**独立程序！它需要基于《侠盗猎车手：圣安地列斯》PC 版（必须为**欧美 v1.0 版本**）运行。v2.0、Steam 版或 Direct2Drive 版本均不兼容。[点击此处下载降级补丁](http://grandtheftauto.filefront.com/file/GTA_SA_Downgrader_Patch;74661)

### 服务器列表无法显示

SA:MP 内置浏览器已失效。请下载新版[open.mp 启动器](https://github.com/openmultiplayer/launcher/releases/latest)。若仍无法显示服务器，请确保防火墙已放行 open.mp。由于防火墙软件种类繁多，建议查阅厂商文档或通过搜索引擎解决。同时请确认使用最新稳定版 open.mp！

### 载入单机模式而非 SA:MP

:::warning

正确加载 SA:MP 时不应出现"新游戏/载入游戏"等单机菜单选项。若看到"新游戏"，说明加载的是单机模式。

:::

该问题通常由两种原因导致：SA:MP 安装路径错误或游戏版本不符。若版本问题，请使用降级补丁。[点击下载](http://grandtheftauto.filefront.com/file/GTA_SA_Downgrader_Patch;74661)

有时单机菜单会短暂显示但 SA:MP 实际已加载。此时选择任意菜单项后按 ESC 退出即可继续加载。

### 连接服务器时提示"昵称不可用"

请检查昵称是否符合规范：

- 仅允许使用 0-9、a-z、$$$$、()、\$、@、.、\_ 和 = 字符
- 长度不超过 20 字符
- 服务器存在同名在线玩家（快速重连时可能触发）
- Windows 服务器运行超过 50 天可能引发此 BUG

### 卡在"正在连接 IP:端口..."界面

可能原因：

1. 服务器离线
2. 防火墙拦截（尝试临时禁用防火墙测试）
3. SA:MP 版本过旧[下载最新版](https://sa-mp.mp/downloads/)

### 改装版 GTA 导致 SA:MP 无法加载

移除所有游戏模组（MOD）即可解决。

### 启动游戏后无响应

解决方案：

1. 删除用户文件夹中的 gta_sa.set 文件
2. 移除所有作弊工具/模组

### 车辆爆炸时游戏崩溃（双显示器用户）

三种解决方案：

1. 游戏时禁用副屏
2. 设置视觉特效质量为低（ESC > 选项 > 显示设置 > 高级）
3. 重命名游戏文件夹（如"GTA San Andreas2"）

### 暂停菜单返回后鼠标失灵

解决方案：

1. 在[sa-mp.cfg](ClientCommands#file-sa-mpcfg)中禁用多核支持（设置 multicore=0）
2. 反复按 ESC 键直至鼠标恢复响应

### 缺失 dinput8.dll 文件

解决方案：

1. 重新安装 DirectX 并重启系统
2. 手动复制 C:\\Windows\\System32\\dinput.dll 到游戏根目录

### 无法显示玩家昵称标签

可能原因：

1. 服务器全局禁用名牌
2. 使用 Intel HD 集成显卡（建议安装独立显卡）
3. 目前暂无通用解决方案，与硬件兼容性相关
