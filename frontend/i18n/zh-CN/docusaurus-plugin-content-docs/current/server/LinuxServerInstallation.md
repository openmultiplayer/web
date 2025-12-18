---
title: Linux 服务器安装指南
sidebar_label: Linux 服务器安装
description: 在 Ubuntu 或其他基于 Debian 的 Linux 系统上安装 open.mp 服务器的完整指南。
---

**本指南包含了在 Ubuntu 或其他基于 Debian 的 Linux 系统上安装 open.mp 服务器的完整教程。
无论你是初学者还是想要复习知识，本指南都可能对你有所帮助！**

:::warning

如果你正在使用 SA:MP 服务器且尚未转换到 open.mp，**[请先停止并阅读此指南](https://www.open.mp/docs/server/Installation)**。

:::

:::tip

**FCNPC 用户的好消息！** 传统的 FCNPC 插件已被官方的 **open.mp NPC 组件** 取代，它提供了相同的功能，并且性能更好，集成更原生。只需将你的代码转换为内置的 NPC 组件即可。

:::

## 前提条件

开始之前，你需要具备：

- 运行 Ubuntu（推荐 20.04 或更高版本）或其他基于 Debian 的 Linux 系统的机器；
- 用于文件传输的 WinSCP 或 Filezilla；
- PuTTY 或你的主机 SSH 解决方案；

:::note

如果安装 WinSCP，安装程序会提示你安装 PuTTY！
你可以选择是否安装，但之后也可以随时下载！

:::

## 第一阶段：准备环境

1. 通过 SSH 连接：
   - 使用 PuTTY 或你的主机 SSH 解决方案连接到你的实例。

:::note

如果你不确定如何连接到 Linux 实例，请查阅在线指南或你的主机提供商的文档。

:::

2. 更新你的 Linux 实例：
   - 在继续之前，确保你的系统是最新的，运行：

   ```
   sudo apt update
   ```

   ```
   sudo apt upgrade
   ```

3. 创建安全的服务账户：
   - 出于安全原因，我们应该创建一个没有主目录的专用服务账户：

   ```
   sudo useradd -M svc-omp-server
   ```

4. 锁定服务账户：
   - 防止服务账户被用于登录：

   ```
   sudo usermod -L svc-omp-server
   ```

5. 将你的用户添加到服务组：
   - 将当前用户添加到 svc-omp-server 组，以便管理文件：

   ```
   sudo usermod -aG svc-omp-server $USER
   ```

   :::warning

   你需要注销并重新登录才能使组更改生效！

   :::

6. 创建服务器文件目录：
   - 我们将使用 /opt 目录，这是第三方应用程序的标准位置：

   ```
   sudo mkdir /opt/omp-server
   ```

7. 设置目录权限：
   - 将目录的组更改为与服务账户匹配：

   ```
   sudo chgrp svc-omp-server /opt/omp-server
   ```

   - 赋予组读取、写入和执行权限：

   ```
   sudo chmod g+rwx /opt/omp-server
   ```

   - 设置 g+s 标志，使新文件继承正确的组：

   ```
   sudo chmod g+s /opt/omp-server
   ```

   - 移除其他人的访问权限：

   ```
   sudo chmod o-rwx /opt/omp-server
   ```

<hr />

## 第二阶段：安装 open.mp 服务器文件

8. 导航到服务器目录：
   - 我们需要移动到 /opt/omp-server 目录，服务器将存储在此处：

   ```
   cd /opt/omp-server
   ```

9. 下载 open.mp 服务器文件：
   - 下载最新版本的 open.mp 服务器：

   ```
   sudo -u svc-omp-server wget https://github.com/openmultiplayer/open.mp/releases/download/vX.X.X.XXXX/open.mp-linux-x86.tar.gz
   ```

:::warning

**你应该始终在 open.mp GitHub 发布页面检查最新版本！**
[https://github.com/openmultiplayer/open.mp/releases](https://github.com/openmultiplayer/open.mp/releases)

:::

10. 解压服务器文件：
    - 下载完成后，解压文件：

    ```
    sudo -u svc-omp-server tar -xzf open.mp-linux-x86.tar.gz
    ```

<hr />

## 第三阶段：配置和启动服务器

11. 安装所需软件包：
    - 由于服务器作为 32 位应用程序运行，你需要启用 32 位架构支持并安装 screen：

    ```
    sudo dpkg --add-architecture i386
    ```

    ```
    sudo apt update
    ```

    ```
    sudo apt install libc6:i386 screen
    ```

12. 使服务器可执行：
    - 更改权限使服务器可以执行（仅需一次！）：

    ```
    cd /opt/omp-server/Server/
    ```

    ```
    sudo chmod +x omp-server
    ```

13. 启动服务器：
    - 使用 screen 以服务账户身份在可分离的会话中启动服务器：

    ```
    sudo -u svc-omp-server screen -dmS omp-server ./omp-server
    ```

    :::tip

    这将创建一个名为 "omp-server" 的分离 screen 会话，以服务账户身份运行。你可以随时附加到此会话来查看控制台！

    :::

<hr />

## 第四阶段：管理服务器

14. 查看服务器控制台：
    - 附加到正在运行的服务器以查看控制台输出：

    ```
    sudo -u svc-omp-server screen -r omp-server
    ```

    - 要从 screen 会话分离（保持运行），请按：`Ctrl+A` 然后 `D`

15. 停止服务器：
    - 附加到 screen 会话（步骤 14），然后在控制台中输入 `/exit` 或按 `Ctrl+C` 优雅地停止服务器。
    - 或者，你可以终止 screen 会话：

    ```
    sudo -u svc-omp-server screen -X -S omp-server quit
    ```

16. 检查服务器是否正在运行：
    - 查看所有 screen 会话：

    ```
    sudo -u svc-omp-server screen -ls
    ```

<hr />

## 第五阶段：上传你的游戏模式和文件

17. 上传你的自定义游戏模式和脚本：
    - 使用 WinSCP 或 Filezilla 将你的游戏模式和脚本传输到 /opt/omp-server 目录。
      重要提示：确保对 Linux 插件使用 .so 文件，因为 .dll 文件仅在 Windows 上受支持。

## 获取帮助

如果你在设置服务器时仍然遇到问题，请加入官方 open.mp Discord 服务器：[https://discord.gg/samp](https://discord.gg/samp)

在 [#openmp-support](https://discord.com/channels/231799104731217931/966398440051445790) 频道发布你的问题，并提及本指南，以便我们改进它。
