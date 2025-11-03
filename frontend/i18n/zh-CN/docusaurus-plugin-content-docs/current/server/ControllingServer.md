---
title: 控制服务器
sidebar_label: 控制服务器
description: 控制服务器的实用命令。
---

## 更改游戏模式

### 运行自定义/下载的游戏模式

- 打开你安装服务器的目录（例如：/Rockstar Games/GTA San Andreas/server）
- 将下载/编译的 .amx 文件放入服务器安装目录中的 `gamemodes` 文件夹
- 使用 RCON 更改模式。
- 或者，你可以将新模式添加到轮换队列中。

### 使用滤镜脚本

与运行自定义游戏模式相同，除了：

- 将 .amx 文件放入名为 `filterscripts` 的文件夹中
- 在 server.cfg 中添加以下内容：`filterscripts <脚本名称>`

## 为服务器设置密码

- 如果你想添加密码，只有你的朋友可以加入，请在 [server.cfg](server.cfg) 中添加以下内容：

```
password whatever
```

- 这将使你的服务器受密码保护，密码设置为 'whatever' —— 你可以将其更改为你想要的任何内容。
- 你也可以在游戏中使用 `/rcon password 新密码` 更改密码。
- 你可以通过使用 `/rcon password 0` 或重启服务器来移除密码。

## 使用 RCON

### 登录

你可以在游戏内通过输入 `/rcon login 密码` 登录，也可以在游戏外使用 [远程控制台](RemoteConsole) 中的 RCON 模式登录。

密码与你在 [server.cfg](server.cfg) 中设置的密码相同。

### 添加封禁

##### samp.ban

samp.ban 是用于存储封禁信息的文件，包括以下内容：

- IP
- 日期
- 时间
- 名称（人名或原因，参见 [BanEx](../scripting/functions/BanEx)）
- 封禁类型

要添加封禁，只需添加如下一行：

```
IP_HERE [28/05/09 | 13:37:00] PLAYER - 封禁原因
```

其中 `IP_HERE` 是你想要封禁的 IP 地址。

##### Ban() 函数

[Ban](../scripting/functions/Ban) 函数可用于从脚本中封禁玩家。[BanEx](../scripting/functions/BanEx) 函数将添加一个可选的原因，如下所示：

```
13.37.13.37 [28/05/09 | 13:37:00] 作弊者 - 游戏内封禁
```

##### RCON 封禁命令

RCON 封禁命令通过在游戏中输入 `/rcon ban` 或在控制台中输入 "ban" 来执行，用于封禁服务器上的特定玩家，要封禁 IP 请参见下一节。

只需输入：

```
# 游戏内：
/rcon ban 玩家ID

# 控制台：
ban 玩家ID
```

##### banip

RCON banip 命令通过在游戏中输入 `/rcon banip` 或在控制台中输入 "banip" 来执行，用于封禁特定 IP 地址，要封禁服务器上的玩家 ID，请参见上一节。支持通配符进行范围封禁。

只需输入：

```
# 游戏内：
/rcon banip IP

# 控制台：
banip IP
```

### 移除封禁

一旦某人被封禁，有两种方法可以解封。

- 从 samp.ban 中移除
- 使用 RCON `unbanip` 命令

#### samp.ban

samp.ban 可以在你的 SA-MP 服务器目录中找到，它包含以下信息的行：

- IP
- 日期
- 时间
- 名称（人名或原因（参见 [BanEx](../scripting/functions/BanEx)））
- 封禁类型（游戏内、IP 封禁等）

示例：

```
127.8.57.32 [13/06/09 | 69:69:69] 无 - IP 封禁
13.37.13.37 [28/05/09 | 13:37:00] Kyeman - 游戏内封禁
```

要解封，只需移除该行，然后执行 RCON reloadbans 命令使服务器重新读取 samp.ban。

#### unbanip

RCON unbanip 命令可以在游戏内或服务器控制台（黑框）中使用。要解封 IP，只需在游戏内输入 `/rcon unbanip IP_HERE` 或在控制台中输入 `unbanip IP_HERE`。

示例：

```
13.37.13.37 [28/05/09 | 13:37:00] Kyeman - 游戏内封禁
```

```
# 游戏内：
/rcon unbanip 13.37.13.37

# 控制台：
unbanip 13.37.13.37
```

要解封，只需使用 `unbanip` 命令，然后执行 RCON `reloadbans` 命令使服务器重新读取 samp.ban。

#### reloadbans

`samp.ban` 是一个存储当前被封禁 IP 信息的文件。该文件在服务器启动时读取，因此如果你解封了一个 IP/人，你必须输入 RCON `reloadbans` 命令使服务器重新读取 `samp.ban` 并允许他们加入服务器。

### RCON 命令

输入 cmdlist 查看命令（或 varlist 查看变量），在游戏内使用 RCON（`/rcon cmdlist`）。

以下是你可以作为管理员使用的功能：

| 命令                             | 描述                                                                                                          |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `/rcon cmdlist`                  | 显示命令列表。                                                                                                |
| `/rcon varlist`                  | 显示当前变量列表。                                                                                            |
| `/rcon exit`                     | 关闭服务器。                                                                                                  |
| `/rcon echo [文本]`              | 在服务器控制台中显示 `[文本]`（非游戏内客户端控制台）。                                                       |
| `/rcon hostname [名称]`          | 更改主机名文本（_示例：/rcon hostname 我的服务器_）。                                                         |
| `/rcon gamemodetext [名称]`      | 更改游戏模式文本（_示例：/rcon gamemodetext 我的游戏模式_）。                                                 |
| `/rcon mapname [名称]`           | 更改地图名称文本（_示例：/rcon mapname 圣安地列斯_）。                                                        |
| `/rcon exec [文件名]`            | 执行包含服务器配置的文件（_示例：/rcon exec blah.cfg_）。                                                     |
| `/rcon kick [ID]`                | 踢出指定 ID 的玩家（_示例：/rcon kick 2_）。                                                                  |
| `/rcon ban [ID]`                 | 封禁指定 ID 的玩家（_示例：/rcon ban 2_）。                                                                   |
| `/rcon changemode [模式]`        | 此命令将当前游戏模式更改为指定模式（_示例：如果你想玩 sftdm：/rcon changemode sftdm_）。                      |
| `/rcon gmx`                      | 将加载 [server.cfg](server.cfg) 中的下一个游戏模式。                                                          |
| `/rcon reloadbans`               | 重新加载存储被封禁 IP 地址的 `samp.ban` 文件。解封 IP 地址后应使用此命令。                                    |
| `/rcon reloadlog`                | 重新加载 `server_log.txt`。适用于自动日志轮换。可以通过向服务器发送 `SIGUSR1` 信号触发（仅限 Linux 服务器）。 |
| `/rcon say`                      | 向玩家显示消息到客户端控制台（示例：`/rcon say 你好` 将显示为 `管理员：你好`）。                              |
| `/rcon players`                  | 显示服务器中的玩家（包括他们的名字、IP 和 ping）。                                                            |
| `/rcon banip [IP]`               | 封禁指定 IP（_示例：/rcon banip 127.0.0.1_）。                                                                |
| `/rcon unbanip [IP]`             | 解封指定 IP（_示例：/rcon unbanip 127.0.0.1_）。                                                              |
| `/rcon gravity`                  | 更改重力（_示例：/rcon gravity 0.008_）。                                                                     |
| `/rcon weather [ID]`             | 更改天气（_示例：/rcon weather 1_）。                                                                         |
| `/rcon loadfs`                   | 加载指定滤镜脚本（_示例：/rcon loadfs adminfs_）。                                                            |
| `/rcon weburl [服务器 URL]`      | 更改主列表/SA-MP 客户端中的服务器 URL                                                                         |
| `/rcon unloadfs`                 | 卸载指定滤镜脚本（_示例：/rcon unloadfs adminfs_）。                                                          |
| `/rcon reloadfs`                 | 重新加载指定滤镜脚本（_示例：/rcon reloadfs adminfs_）。                                                      |
| `/rcon rcon\_password [密码]`    | 更改 RCON 密码                                                                                                |
| `/rcon password [密码]`          | 设置/重置服务器密码                                                                                           |
| `/rcon messageslimit [数量]`     | 更改客户端每秒发送到服务器的消息数量。（默认 500）                                                            |
| `/rcon ackslimit [数量]`         | 更改 acks 限制（默认 3000）                                                                                   |
| `/rcon messageholelimit [数量]`  | 更改消息空洞限制（默认 3000）                                                                                 |
| `/rcon playertimeout [限制毫秒]` | 更改玩家在不发送任何数据包时的超时时间（默认 1000）。                                                         |
| `/rcon language [语言]`          | 更改服务器语言（_示例：/rcon language 英语_）。在服务器浏览器中显示。                                         |

上述四个限制/计数参数专门用于防范可能通过冻结或崩溃方式攻击 SA-MP 服务器的各类工具。因此，请根据您的服务器实际需求进行配置。系统默认值已预设为安全基准，若发现存在误踢正常玩家的情况，请立即适当调高相关数值阈值以避免良性玩家遭受影响。

### 相关回调和函数

以下回调和函数可能有用，因为它们以某种方式与本文相关。

#### 回调

- [OnRconLoginAttempt](../scripting/callbacks/OnRconLoginAttempt)：当尝试登录 RCON 时调用。

#### 函数

- [IsPlayerAdmin](../scripting/functions/IsPlayerAdmin)：检查玩家是否登录到 RCON。

- [SendRconCommand](../scripting/functions/SendRconCommand)：通过脚本发送 RCON 命令。
