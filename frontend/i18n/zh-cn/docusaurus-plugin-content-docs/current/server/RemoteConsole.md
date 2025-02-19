---
title: "Remote Console (RCON)"
sidebar_label: "Remote Console (RCON)"
description: Remote server administation.
---

远程控制台是一个命令提示符，你可以在不进入游戏和服务器的情况下使用RCON命令。从0.3b版本开始，远程控制台已从服务器浏览器中移除。现在你需要使用另一种方式来访问远程RCON，如下所述。

1. 打开一个文本编辑器。
2. 写入以下内容：`rcon.exe IP PORT RCON-PASS`（用你的服务器详情替换IP/PORT/PASS）
3. 将文件保存为 `rcon.bat`
4. 将该文件放入`rcon.exe`所在的GTA目录中。
5. 运行 `rcon.bat`
6. 输入你想使用的命令。

![Rcon console](https://assets.open.mp/assets/images/server/rcon.jpg)

注意：在服务器浏览器中不需要在命令前输入 `/rcon`，如果你这样做，命令将无法执行。例如，如果你想重置服务器，只需输入 `gmx` 并按下回车键。这就是你需要做的所有操作。享受它吧!

