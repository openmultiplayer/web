---
title: Linux系统安装服务器
sidebar_label: Linux系统安装服务器
description: 本指南提供在 Linux 系统上安装 open.mp 服务器的完整教程。
---

**本指南提供在 Ubuntu 或其他基于 Debian 的 Linux 系统上安装 open.mp 服务器的完整教程。  
无论您是新手还是需要温故知新，本指南都可能为您提供有价值的信息！**

:::warning

若您仍在使用 SA:MP 服务器且尚未迁移至 open.mp，**[请立即停止并优先阅读此迁移指南](https://www.open.mp/docs/server/Installation)**。

:::

:::note

若您正在使用 FCNPC 插件，请暂停操作，因该插件目前暂不支持 open.mp。

:::

## 先决条件

开始前请确保具备：

- 运行 Ubuntu（推荐 20.04 或更新版本）或其他 Debian 系 Linux 的机器
- 用于文件传输的 WinSCP 或 Filezilla
- PuTTY 或您的主机商 SSH 解决方案

:::note

安装 WinSCP 时，安装程序会提示安装 PuTTY！  
您可选择立即安装或后续单独下载，此选项不影响后续操作。

:::

## 第一阶段：环境准备

1. 通过 SSH 连接：
   - 使用 PuTTY 或主机商提供的 SSH 方案连接您的服务器实例

:::note

若不确定如何连接 Linux 实例，请参考在线教程或主机商文档。

:::

2. 更新系统组件：

   - 执行以下命令确保系统处于最新状态：

   ```
   sudo apt update
   ```

   ```
   sudo apt upgrade
   ```

3. 创建安全服务账户：

   - 为安全起见，创建无主目录的专用服务账户：

   ```
   sudo useradd -M svc-omp-server
   ```

4. 锁定服务账户：

   - 禁止该服务账户用于登录：

   ```
   sudo usermod -L svc-omp-server
   ```

5. 创建服务器文件目录：

   - 使用标准第三方应用目录 /opt：

   ```
   sudo mkdir /opt/omp-server
   ```

6. 设置目录权限：

   - 变更目录所属组以匹配服务账户：

   ```
   sudo chgrp svc-omp-server /opt/omp-server
   ```

   - 设置 g+s 标志使新文件继承正确组权限，并移除其他用户访问：

   ```
   sudo chmod g+s /opt/omp-server
   ```

   ```
   sudo chmod o-rwx /opt/omp-server
   ```

<hr />

## 第二阶段：安装 open.mp 服务器文件

7. 进入服务器目录：

   - 切换至服务器文件存储位置：

   ```
   cd /opt/omp-server
   ```

8. 下载服务器文件：

   - 获取 open.mp 服务器最新版本：

   ```
   sudo -u svc-omp-server wget https://github.com/openmultiplayer/open.mp/releases/download/vX.X.X.XXXX/open.mp-linux-x86.tar.gz
   ```

:::warning

**请务必通过 open.mp GitHub 发布页面确认最新版本！**  
[https://github.com/openmultiplayer/open.mp/releases](https://github.com/openmultiplayer/open.mp/releases)

:::

9. 解压服务器文件：

   - 下载完成后执行解压：

   ```
   sudo -u svc-omp-server tar -xzf open.mp-linux-x86.tar.gz
   ```

<hr />

## 第三阶段：配置与启动服务器

10. 安装 x86 依赖库：

    - 因服务器为 32 位应用，需启用架构支持：

    ```
    sudo dpkg --add-architecture i386
    ```

    ```
    sudo apt update
    ```

    ```
    sudo apt install libc6:i386
    ```

11. 设置可执行权限：

    - 仅需执行一次的权限变更：

    ```
    cd /opt/omp-server/Server/
    ```

    ```
    sudo chmod +x omp-server
    ```

12. 启动服务器：

    - 使用以下命令后台启动：

    ```
    nohup ./omp-server &
    ```

    - 终端将显示进程 ID (PID)，请记录该数字以备后续使用

<hr />

## 第四阶段：服务器管理

13. 停止服务器：

    - 使用步骤 12 记录的 PID 终止进程：

    ```
    sudo kill <PID>
    ```

14. 查询进程 ID（若遗忘）：

    - 通过系统监控工具定位：

    ```
    top
    ```

    - 查找 omp-server 进程并记录 PID，按 Q 退出后执行步骤 13 操作

<hr />

## 第五阶段：上传游戏模式与文件

15. 上传自定义内容：
    - 使用 WinSCP 或 Filezilla 将游戏模式与脚本传输至 /opt/omp-server 目录  
      重要提示：Linux 插件请使用 .so 文件，.dll 文件仅限 Windows 系统

## 获取帮助

若仍遇到服务器配置问题，请加入 open.mp 官方 Discord 服务器：[https://discord.gg/samp](https://discord.gg/samp)

在 [#openmp-support](https://discord.com/channels/231799104731217931/966398440051445790) 频道提问时请提及本指南，以便我们持续改进。
