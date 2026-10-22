---
title: "在 Linux 上运行 open.mp 客户端"
sidebar_label: "在 Linux 上运行 open.mp 客户端"
description: 在 Linux 上运行 open.mp 客户端的指南。
---

# 在 Linux 上运行 open.mp 客户端的指南

open.mp 启动器可以通过两种方式在 Linux 上运行：

- **使用图形界面**，通过 Proton 运行。你可以使用带服务器浏览器的完整启动器。这需要 Microsoft Edge WebView2 Runtime，以及支持 Wine 的启动器版本。
- **使用命令行**，通过任意 Wine 运行。所有启动器版本都适用，也不需要 WebView2，但没有图形界面：每条命令只能连接一个服务器。

两种方式都从相同的前缀配置开始。之后**只选择其中一种**方式操作。

## 配置前缀

以下命令使用 `~/Games/openmp` 作为前缀，并使用 `~/Downloads` 存放下载文件。请根据实际情况修改路径，并确保每一步都使用**同一个前缀**。请在 bash 或 zsh 中运行这些命令。如果你使用 fish，请先输入 `bash`。

:::tip

如果你已有一个通过 Lutris 或 Bottles 创建、并且已安装 GTA San Andreas 和启动器的前缀，命令行方式也适用。这种情况下请跳到[选项 B](#option-b-command-line-only-any-wine)。

:::

1. 通过发行版的软件包（Arch/CachyOS、Fedora 等发行版的软件包名为 `umu-launcher`）或其发布页面安装 [umu-launcher](https://github.com/Open-Wine-Components/umu-launcher)。它可以在不使用 Steam 的情况下通过 Proton 运行 Windows 程序。

2. 在终端中设置以下变量。后续命令都会使用它们：

```
export WINEPREFIX="$HOME/Games/openmp"
export GAMEID=umu-omplauncher
export STORE=none
```

如果要使用指定的 Proton 版本，还需将 `PROTONPATH` 设置为其所在目录，例如 `export PROTONPATH="$HOME/.local/share/Steam/compatibilitytools.d/Proton-CachyOS Latest"`。如果不设置，umu-run 会下载并使用 GE-Proton。

3. 创建前缀。首次运行需要等待一段时间：

```
umu-run wineboot
```

4. 将 GTA San Andreas 文件夹复制到前缀中，例如复制到 `~/Games/openmp/drive_c/Games/GTA San Andreas`。请复制整个文件夹，不要使用符号链接。

5. 从[最新版本](https://github.com/openmultiplayer/launcher/releases/latest)下载便携版 open.mp 启动器 `omp-launcher.exe`，并放入前缀中。它无需安装即可运行。不要使用 `omp-launcher-setup.exe`，因为安装程序会尝试自行安装 WebView2，并且会在前缀中失败。

```
mkdir -p "$WINEPREFIX/drive_c/Games/omp-launcher"
curl -fL https://github.com/openmultiplayer/launcher/releases/latest/download/omp-launcher.exe -o "$WINEPREFIX/drive_c/Games/omp-launcher/omp-launcher.exe"
```

前缀已准备就绪。现在**只选择其中一种**方式继续：

- 如果你想使用带服务器浏览器的完整启动器，请选[选项 A：启动器图形界面](#option-a-launcher-gui-proton)。**推荐。**
- 如果你只想通过命令连接服务器，请选[选项 B：仅命令行](#option-b-command-line-only-any-wine)。

## 选项 A：启动器图形界面（Proton） {#option-a-launcher-gui-proton}

:::warning

图形界面需要 **Proton**。在标准 Wine 下，启动器窗口会一直显示为白屏。

:::

### 已测试环境：

- 使用 Proton-CachyOS 11.0 和 WebView2 Runtime 156 的 umu-launcher
- Steam Deck 上的 SteamOS 3.9.5，通过 Lutris 使用 GE-Proton
- Fedora Silverblue 44，通过 Lutris 使用 GE-Proton（UMU-Proton 在此配置下无法运行）
- Arch Linux、KDE Plasma（Wayland）、PipeWire，通过 Steam 版 GTA:SA 使用 Proton-CachyOS-SLR（游戏已降级至 1.0，并在 SLR 中运行）

:::note

如果你在其他配置下成功运行了图形界面（例如其他 Proton 或 Wine 版本、Lutris、Bottles、Heroic、Steam 或其他桌面环境），请在 open.mp Discord 或 GitHub 上反馈，并注明发行版、桌面环境、Wine 或 Proton 版本以及 WebView2 版本，以便将其添加到此列表。

:::

### 操作步骤：

1. 下载 x86 版 WebView2 Runtime 并安装到前缀中。启动器窗口基于它构建：

```
curl -fL "https://go.microsoft.com/fwlink/p/?LinkId=2124701" -o ~/Downloads/MicrosoftEdgeWebView2RuntimeInstallerX86.exe
umu-run ~/Downloads/MicrosoftEdgeWebView2RuntimeInstallerX86.exe /silent /install
```

安装程序不会显示窗口。如果终端输出停留在 `ntsync: up and running.`，安装程序可能仍在运行。这是正常的；请等命令结束、shell 提示符重新出现后再继续。

2. 启动启动器，并在本次启动时禁用 Xalia：

```
PROTON_USE_XALIA=0 umu-run "$WINEPREFIX/drive_c/Games/omp-launcher/omp-launcher.exe"
```

首次启动时，启动器会自动下载 open.mp 客户端文件。在设置中，将游戏路径设为你的 GTA San Andreas 文件夹（示例路径为 `C:\Games\GTA San Andreas`），然后选择服务器并开始游戏。

3. 将启动器添加到应用程序菜单，以后就可以像启动其他应用一样启动它。Proton 不会自动创建菜单项。请在同一个终端中运行以下命令一次：

```
mkdir -p "$HOME/.local/share/applications" "$HOME/.local/share/icons"
curl -fL https://raw.githubusercontent.com/openmultiplayer/launcher/master/src-tauri/icons/128x128.png -o "$HOME/.local/share/icons/openmp-launcher.png"
PROTON_ENV=${PROTONPATH:+"\"PROTONPATH=$PROTONPATH\""}
cat > "$HOME/.local/share/applications/omp-launcher.desktop" <<EOF
[Desktop Entry]
Type=Application
Name=open.mp launcher
Comment=open.mp 和 SA-MP 的服务器浏览器
Exec=env "WINEPREFIX=$WINEPREFIX" GAMEID=umu-omplauncher STORE=none PROTON_USE_XALIA=0 $PROTON_ENV umu-run "$WINEPREFIX/drive_c/Games/omp-launcher/omp-launcher.exe"
Icon=$HOME/.local/share/icons/openmp-launcher.png
Categories=Game;
EOF
```

现在，你可以在应用程序菜单中找到“open.mp launcher”，并将其固定到任务栏或桌面。`PROTON_USE_XALIA=0` 可以防止 Proton 的辅助功能助手拖慢启动器。

:::tip

在 Wine 下，启动器会使用软件渲染（`--disable-gpu`），这比它在 Wine 下的 GPU 渲染路径更快。若要传入其他 Chromium 标志，请设置 `OMP_WEBVIEW2_ARGS`。将它设为空值即可使用 GPU。

:::

## 选项 B：仅命令行（任意 Wine） {#option-b-command-line-only-any-wine}

:::warning

此方式无法获得可用的图形界面，必须在 Wine 前缀中通过命令行参数运行。

:::

### 已测试环境：

- Lutris: wine-ge 8-26 32-bit prefix
- Bottles: soda-9.0-1

### 操作步骤：

1. 下载并安装 [SA-MP 客户端](https://www.sa-mp.mp/downloads/)，并将安装位置设为配置前缀时使用的 GTA San Andreas 文件夹。图形界面会自动下载 SA-MP 文件，但命令行方式需要先安装这些文件：

```
umu-run ~/Downloads/sa-mp-0.3.7-R5-1-install.exe
```

请使用你下载的对应版本的文件名。

2. 下载最新的 open.mp 客户端 DLL。打开 [api.open.mp/launcher](https://api.open.mp/launcher)，查看 `versions`：选择编号最高的条目，下载其 `ompPluginDownload`（例如 `https://assets.open.mp/omp-client-7.dll`），并确认 MD5 与该条目的 `ompPluginChecksum` 一致。不要使用页面顶部的 `ompPluginDownload`，它指向的是旧版客户端。

3. 将文件重命名为 `omp-client.dll`（去掉版本号），并保存到前缀主用户的 `AppData\Local\mp.open.launcher\omp\` 文件夹中。

在 umu 前缀中，以下命令会完成这两个步骤并检查 MD5：

```
OMP_DIR="$WINEPREFIX/drive_c/users/steamuser/AppData/Local/mp.open.launcher/omp"
mkdir -p "$OMP_DIR"
read -r URL MD5 < <(curl -fsSL https://api.open.mp/launcher | python3 -c 'import json,sys; v=json.load(sys.stdin)["versions"]; e=v[max(v,key=int)]; print(e["ompPluginDownload"], e["ompPluginChecksum"])')
curl -fL "$URL" -o "$OMP_DIR/omp-client.dll"
echo "$MD5  $OMP_DIR/omp-client.dll" | md5sum -c
```

最后一行必须显示 `OK`。

4. 通过前缀的命令行（umu-run、Lutris 或 Bottles）启动启动器，并将服务器和游戏文件夹作为参数传入；也可以编写 .bat 脚本以便启动。

### 启动命令示例

```
Z:\path\to\omp-launcher.exe -h server.ip -p port -n user.name -g Z:\home\yourname\path\to\gta-san-andreas\install\
```

对于上面配置的 umu 前缀：

```
umu-run "$WINEPREFIX/drive_c/Games/omp-launcher/omp-launcher.exe" -h server.ip -p port -n user.name -g "C:\Games\GTA San Andreas"
```

:::tip

如果上面的示例不够清楚，可以使用 `--help` 标志运行 omp-launcher.exe，查看其他标志的说明。

:::

## 故障排除

| 问题 | 可能的解决方法 |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 启动器窗口一直显示白屏 | 你正在使用标准 Wine。请通过 Proton 启动启动器（见图形界面部分）。 |
| 设置 `PROTON_ENABLE_WAYLAND=1` 后窗口空白 | WebView2 窗口无法在原生 Wayland 下显示。请取消设置该变量，让启动器通过 XWayland 运行。 |
| 启动时出现 WebView2 错误 `0x80070002` | 此前缀中缺少 WebView2 Runtime。请将其安装到启动器所在的同一个前缀。 |
| 关闭后立即出现 WebView2 错误 `0x80070005` | 上一次启动的 WebView2 进程尚未退出。请等待几秒后重试。 |
| 暂停游戏时崩溃 | 缺少字体。请通过 winetricks 安装 allfonts。 |
| 服务器上不显示登录提示 | 尝试在 Lutris 中切换“Prefer system libraries”设置。 |
| 出现黑色方块，游戏无法加载 | CLI 启动参数可能不完整。请检查启动命令。 |
