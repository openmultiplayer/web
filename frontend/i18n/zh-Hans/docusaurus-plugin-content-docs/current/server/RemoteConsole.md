---
title: 远程控制台 (RCON)
sidebar_label: 远程控制台 (RCON)
description: 远程服务器管理。
---

远程控制台（RCON）是一个无需进入游戏即可管理服务器的命令行工具。自 0.3b 版本起，RCON 功能已从服务器浏览器中移除，需通过以下方式访问：

1. 打开文本编辑器
2. 输入指令格式：`rcon.exe IP端口 RCON密码`（替换为实际服务器参数）
3. 保存为 `rcon.bat` 批处理文件
4. 将文件放置于 GTA 游戏目录的 `rcon.exe` 同级位置
5. 运行 `rcon.bat`
6. 输入所需指令

![远程控制台界面](https://assets.open.mp/assets/images/server/rcon.jpg)

注意事项：

- 在远程控制台中无需输入 `/rcon` 前缀指令
- 示例：重启服务器直接输入 `gmx` 并回车即可
- 指令若包含 `/rcon` 前缀将无法执行

祝你使用愉快！
