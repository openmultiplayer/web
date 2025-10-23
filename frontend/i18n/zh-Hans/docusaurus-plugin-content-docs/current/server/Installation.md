---
title: 从 SA:MP 服务器迁移游戏模式到 open.mp 的完整指南
sidebar_label: 服务器迁移指南
description: 本教程面向需要将游戏模式从 SA:MP 服务器迁移至 open.mp 服务器的开发者。
---

**本教程适用于需要将游戏模式从 SA:MP 服务器迁移至 open.mp 服务器的开发者**

:::note

如果您正在使用 FCNPC 插件，请暂时停止使用，因为该插件目前不兼容 open.mp。

:::

## 步骤 1

从 [https://github.com/openmultiplayer/open.mp/releases](https://github.com/openmultiplayer/open.mp/releases/latest) 下载最新版 open.mp 服务器文件

![](<https://raw.githubusercontent.com/adib-yg/openmp-server-installation/refs/heads/main/screenshots/Screenshot%20(1).png>)

- `open.mp-win-x86.zip` **Windows** 服务器
- `open.mp-linux-x86.tar.gz` **Linux** 服务器
- `open.mp-linux-x86-dynssl.tar.gz` **Linux** 服务器 (动态 SSL)

## 步骤 2

解压 `.zip` 或 `.tar.gz` 压缩包到本地磁盘

![](<https://raw.githubusercontent.com/adib-yg/openmp-server-installation/refs/heads/main/screenshots/Screenshot%20(3).png>)

:::note

- **components:** open.mp 核心组件
- **filterscripts:** 服务器滤镜脚本文件（辅助脚本）
- **gamemodes:** 服务器游戏模式文件（主脚本）
- **models:** 服务器自定义模型（纹理 .txd .dff）
- **plugins:** 服务器插件文件（传统插件）
- **qawno:** Pawn 编辑器程序及包含文件
- **scriptfiles:** INI 配置文件及其他资源
- **bans.json:** 封禁列表文件
- **config.json:** 服务器配置文件
- **omp-server.exe:** open.mp 服务器主程序
- **omp-server.pdb:** open.mp 调试文件

:::

## 步骤 3

将游戏模式 `.pwn` 文件放入 **gamemodes** 文件夹

## 步骤 4

将所需包含文件（如 `sscanf2.inc`, `streamer.inc`）放入 **qawno/include** 目录

:::note

如果使用 YSI-4 包含文件，请升级至 [YSI-5.x](https://github.com/pawn-lang/YSI-Includes/releases)

:::

## 步骤 5

将所需插件（如 `sscanf.dll`, `streamer.dll`）放入 **plugins** 文件夹

<hr />

:::warning

下表所列插件必须使用兼容 omp 的版本！

请将以下插件放入 **../components** 目录而非 **../plugins**！

:::

| 插件              | OMP 兼容版本                                                                 |
| ----------------- | ---------------------------------------------------------------------------- |
| Pawn.CMD          | https://github.com/katursis/Pawn.CMD/releases/tag/3.4.0-omp                  |
| Pawn.RakNet       | https://github.com/katursis/Pawn.RakNet/releases/tag/1.6.0-omp               |
| sampvoice         | https://github.com/AmyrAhmady/sampvoice/releases/tag/v3.1.5-omp              |
| discord-connector | https://github.com/maddinat0r/samp-discord-connector/releases/tag/v0.3.6-pre |
| SKY               | 改用 Pawn.RakNet                                                             |
| YSF               | 无需使用，open.mp 已原生支持大部分功能                                       |
| FCNPC             | 当前暂不支持                                                                 |

## 步骤 6

运行位于 **Server/qawno/qawno.exe** 的集成开发环境

![](<https://raw.githubusercontent.com/adib-yg/openmp-server-installation/refs/heads/main/screenshots/Screenshot%20(5).png>)

## 步骤 7

按 **CTRL + O** 打开 **../gamemodes** 目录下的游戏模式 `.pwn` 文件

## 步骤 8

查找

```pawn
#include <a_samp>
```

替换为

```pawn
#include <open.mp>
```

按 **F5** 编译

## 步骤 9

使用记事本或其他 IDE 打开 **[config.json](https://www.open.mp/docs/server/config.json)** 文件

![](<https://raw.githubusercontent.com/adib-yg/openmp-server-installation/refs/heads/main/screenshots/Screenshot%20(9).png>)

## 步骤 10

编辑 **config.json**

![](<https://raw.githubusercontent.com/adib-yg/openmp-server-installation/refs/heads/main/screenshots/Screenshot%20(11).png>)

查找

```json
"main_scripts": [
    "gungame 1"
],
```

替换为

```json
"main_scripts": [
    "你的游戏模式_amx_文件名 1"
],
```

<hr />

查找

```json
"legacy_plugins": [],
```

添加所需插件

```json
"legacy_plugins": [
    "crashdetect",
    "mysql",
    "sscanf",
    "streamer",
    "PawnPlus",
    "pawn-memory"
],
```

<hr />

查找

```json
"side_scripts": []
```

添加滤镜脚本

```json
"side_scripts": [
    "filterscripts/文件名"
]
```

<hr />

查找

```json
"rcon": {
    "allow_teleport": false,
    "enable": false,
    "password": "changeme1"
},
```

设置高强度 RCON 密码：

```json
"rcon": {
    "allow_teleport": false,
    "enable": false,
    "password": "151sd80hgse32q1oi0v8dsge166"
},
```

按 **CTRL + S** 保存修改

:::tip

查看如何将 `server.cfg` 转换为 `config.json` 的指南：https://www.open.mp/docs/server/config.json

:::

## 步骤 11

启动服务器

- **Windows**

运行 `omp-server.exe`

![](<https://raw.githubusercontent.com/adib-yg/openmp-server-installation/refs/heads/main/screenshots/Screenshot%20(10).png>)

- **Linux**

```bash
./omp-server
```

## 编译错误与警告处理

- **warning 213: 标签不匹配: 预期标签 "?"，但未找到 ("\_")**：

示例：

```pawn
TogglePlayerControllable(playerid, 1);
// 改为 ->
TogglePlayerControllable(playerid, true);
```

<br />

```pawn
TextDrawFont(textid, 1);
// 改为 ->
TextDrawFont(textid, TEXT_DRAW_FONT_1);
```

<br />

```pawn
GivePlayerWeapon(playerid, 4, 1);
// 改为 ->
GivePlayerWeapon(playerid, WEAPON_KNIFE, 1);
```

可暂时忽略：

```pawn
#define NO_TAGS
#include <open.mp>

// 若警告仍存在
// 使用 #pragma warning disable 213
```

<br />

<hr />

- **warning 234: 函数已弃用 (符号 "TextDrawColor") 请使用 `TextDrawColour`**

在 qawno 中按 **CTRL + F** 全局替换 `TextDrawColor` 为 `TextDrawColour`

![](<https://raw.githubusercontent.com/adib-yg/openmp-server-installation/refs/heads/main/screenshots/Screenshot%20(7).png>)

<br />

或启用混合拼写模式：

```pawn
#define MIXED_SPELLINGS
#include <open.mp>
```

<br />

<hr />

- **warning 234: 函数已弃用 (符号 "GetPlayerPoolSize") 此函数存在根本性缺陷**
- **warning 234: 函数已弃用 (符号 "GetVehiclePoolSize") 此函数存在根本性缺陷**
- **warning 234: 函数已弃用 (符号 "GetActorPoolSize") 此函数存在根本性缺陷**

替换方案：

`GetPlayerPoolSize()` → `MAX_PLAYERS`

`GetVehiclePoolSize()` → `MAX_VEHICLES`

`GetActorPoolSize()` → `MAX_ACTORS`

<hr />

- **warning 234: 函数已弃用 (符号 "SHA256_PassHash") 请使用 BCrypt 进行密码哈希**

推荐使用 [samp-bcrypt](https://github.com/Sreyas-Sreelal/samp-bcrypt) 插件，SHA-256 已不安全

<hr />

- **warning 214: 可能需要 "const" 数组参数: "?"**
- **warning 239: 字面量数组/字符串传递给非 const 参数**

示例修正：

```pawn
public MyFunction(string[])
// 改为 ->
public MyFunction(const string[])
```

<br />

<hr />

- **error 025: 函数头与原型声明不匹配**

示例修正：

```pawn
public OnPlayerDeath(playerid, killerid, reason)
// 改为 ->
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
```

<br />

```pawn
public OnPlayerEditAttachedObject(playerid, response, index, modelid, boneid, Float:fOffsetX, Float:fOffsetY, Float:fOffsetZ, Float:fRotX, Float:fRotY, Float:fRotZ, Float:fScaleX, Float:fScaleY, Float:fScaleZ)
// 改为 ->
public OnPlayerEditAttachedObject(playerid, EDIT_RESPONSE:response, index, modelid, boneid, Float:fOffsetX, Float:fOffsetY, Float:fOffsetZ, Float:fRotX, Float:fRotY, Float:fRotZ, Float:fScaleX, Float:fScaleY, Float:fScaleZ)
```

<br />

<hr />

:::note

open.mp 提供自动升级工具用于修复旧版代码问题：

https://github.com/openmultiplayer/upgrade

工具已包含在 `/qawno/upgrader` 目录

:::

## 运行时错误与警告

```
[信息] 无法向 open.mp 列表注册传统网络
[信息] [服务器错误] 状态码: 406
[信息] [服务器错误] 消息: {"error":"failed to query server: socket read timed out"}
[信息] 此错误不会影响服务器运行
```

- 服务器无法被 open.mp 网站访问
- 可能运行在本地环境
- 防火墙可能阻止了连接

**此警告不会影响服务器正常运行**

<br />

<hr />

```
[警告] format 格式说明符不足: "?" < 1
```

格式字符串参数数量不匹配示例：

```pawn
new string[32];
new mp[32] = ".MP";

format(string, sizeof(string), "OPEN", mp);
// [警告] format 格式说明符不足: "OPEN" < 1

// 正确写法：
format(string, sizeof(string), "OPEN%s", mp);
//                                  ^^
```

## 参考文档

查看新脚本函数与回调：https://www.open.mp/docs/server/omp-functions

新手入门指南：[readme-beginner](https://github.com/openmultiplayer/omp-stdlib/blob/master/documentation/readme-beginner.md)

中级开发者指南：[readme-intermediate](https://github.com/openmultiplayer/omp-stdlib/blob/master/documentation/readme-intermediate.md)

高级开发者指南：[readme-expert](https://github.com/openmultiplayer/omp-stdlib/blob/master/documentation/readme-expert.md)

技术博客：[迁移至 open.mp](https://www.open.mp/blog/porting)

## 获取帮助

如遇其他问题，请加入 open.mp 官方 Discord 服务器：https://discord.gg/samp

在 [#openmp-support](https://discord.com/channels/231799104731217931/966398440051445790) 频道咨询
