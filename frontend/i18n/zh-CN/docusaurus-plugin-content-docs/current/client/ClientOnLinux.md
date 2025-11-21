---
title: 在Linux上运行open.mp客户端
sidebar_label: 在Linux上运行open.mp客户端
description: 在Linux系统运行open.mp客户端的操作指南
---

# 在 Linux 系统运行 open.mp 客户端的操作指南

:::warning

当前方案无法获得完整图形界面，必须通过命令行在 Wine 容器中执行。

:::

### 测试环境

- Lutris: wine-ge 8-26 32 位容器
- Bottles: soda-9.0-1

### 操作步骤

1. 确保已创建包含 GTA San Andreas 安装的 Wine 容器
2. 下载[open.mp 启动器](https://github.com/openmultiploader/launcher/releases/latest)并安装到 Wine 容器内
3. 获取[SA-MP 客户端](https://www.sa-mp.mp/downloads/)并安装至同一 Wine 容器
4. 下载[omp-client.dll](https://assets.open.mp/omp-client.dll)文件，复制到容器用户目录的`AppData\Local\mp.open.launcher\omp\`路径

最后可通过 Wine 容器的命令行执行启动器，或编写.bat 脚本实现快捷启动。

### 示例启动命令

```
Z:\path\to\omp-launcher.exe -h server.ip -p port -n user.name -g Z:\home\yourname\path\to\gta-san-andreas\install\
```

:::tip

可通过添加--help 参数查看完整命令行选项：`omp-launcher.exe --help`

:::

## 故障排查

| 问题现象               | 解决方案                                                           |
| ---------------------- | ------------------------------------------------------------------ |
| 暂停游戏时崩溃         | 安装 winetricks 的 allfonts 组件补全缺失字体                       |
| 服务器登录界面无法显示 | 在 Lutris 中切换"优先使用系统库"选项                               |
| 出现黑框且游戏无法加载 | 检查命令行参数是否完整，确认安装路径参数(-g)指向正确的 GTA SA 目录 |
