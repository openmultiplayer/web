---
title: "控制服务器"
description: 用于控制服务器的十分有效的命令. 
---

##  更改游戏模式

### 运行自定义/下载的游戏模式

- 打开您安装服务器的目录 (例如：/Rockstar Games/GTA San Andreas/server)
- 获取下载/编译的 .amx 文件并将其放在服务器的 gamemodes 文件夹中
- 使用 RCON 更改模式，如上所述 (2.1)
- 或者，您可以将新模式添加到循环中，也如上所述（2.3）

### 使用脚本

与运行自定义游戏模式相同，除了:

- 将 .amx 放在名为`filterscripts`的文件夹中
- 将以下内容添加到 server.cfg: `filterscripts <脚本名称>`

## 为您的服务器设置密码

- 如果您想添加密码以便只有您的朋友可以加入，请将其添加到 [server.cfg](server.cfg):

```
password 任意密码
```

- 这将使您的服务器受到密码保护，密码可以设置为任意内容。
- 您也可以在游戏中更改密码，使用`/rcon password 新密码`
- 您可以使用`/rcon password 0` 或通过重新启动服务器来删除密码

## 使用 RCON

### 登录

您可以在游戏中通过输入`/rcon login password` 登录，也可以在 [Remote Console](RemoteConsole) 中使用RCON 模式退出。

密码与您在 [server.cfg](server.cfg) 中设置的密码相同

### 添加封禁

##### samp.ban

samp.ban 是用于存储封禁信息的文件，包括有关封禁的以下信息:

- IP
- 日期
- 时间
- 游戏名 (玩家的游戏名或者封禁原因, 详细请查看 [BanEx](../../functions/BanEx))
- 封禁类型 (游戏内，IP封禁等等)

如果要添加禁令，只需像这样添加一行:

```
IP_HERE [28/05/09 | 13:37:00] PLAYER - BAN REASON
```

`IP_HERE` 写入您要封锁的IP地址

##### Ban() 函数

[Ban](../scripting/functions/Ban) 函数可用于禁止玩家进入脚本。 [BanEx](../scripting/functions/BanEx) 函数将添加一个可选原因，如下所示：

```
13.37.13.37 [28/05/09 | 13:37:00] Cheater - INGAME BAN
```

##### RCON 封禁命令

通过在游戏中输入 /rcon ban 或在控制台中输入“ban”来执行 RCON ban 命令，用于封禁您服务器上的特定玩家，封禁 IP 参见下一节。

只需输入:

```
# 游戏内:
/rcon ban 玩家ID

# 控制台:
ban 玩家ID
```

##### banip

RCON banip命令，通过在游戏中输入/ RCON banip 或在控制台中输入“banip”来执行，用于封禁特定的IP地址，通过ID禁止服务器上的玩家，参见前一节。将接受范围限制通配符。

只需输入:

```
# 游戏内:
/rcon banip IP

# 控制台:
banip IP
```

### 取消封禁

一旦某个玩家被封禁，有两种方法可以解除他们的封禁。

- 从 samp.ban 中移出
- RCON `unbanip`命令

#### samp.ban

samp.ban 可以在您的 sa-mp 服务器目录中找到，它包含有关每个封禁的以下信息：

- IP
- 日期
- 时间
- 游戏名 (玩家的游戏名或者封禁原因, 详细请查看 [BanEx](../../functions/BanEx))
- 封禁类型 (游戏内，IP封禁等等)

例如:

```
127.8.57.32 [13/06/09 | 69:69:69] NONE - IP BAN
13.37.13.37 [28/05/09 | 13:37:00] Kyeman - INGAME BAN
```

要解封他们，只需删除该行，然后执行 RCON reloadbans 命令使服务器重新读取 samp.ban。

#### unbanip

RCON unbnip 命令可以在游戏中使用，也可以从服务器控制台（黑框窗口）使用。 要解封某个 IP，只需在游戏中输入 `/rcon unbanip IP_HERE` 或在控制台中输入 `unbanip IP_HERE`。

例如:

```
13.37.13.37 [28/05/09 | 13:37:00] Kyeman - INGAME BAN
```

```
# 游戏内:
/rcon unbanip 13.37.13.37

# 控制台
unbanip 13.37.13.37
```

要解封他们，只需使用 `unbanip` 命令，然后执行 RCON `reloadbans` 命令使服务器重新读取 samp.ban。

#### reloadbans

`samp.ban` 是一个文件，其中包含当前被服务器封禁的 IP 的信息。 这个文件在服务器启动时被读取，所以如果你解禁一个 IP/玩家，你必须输入 RCON `reloadbans` 命令让服务器再次读取 `samp.ban` 从而允许他们加入服务器。

### RCON Commands

使用游戏中的 RCON (`/rcon cmdlist`) 为命令输入 cmdlist（或为变量输入 varlist）。

这些是您作为管理员可以使用的功能:

| 命令                              | 描述                                                         |
| --------------------------------- | ------------------------------------------------------------ |
| `/rcon cmdlist`                   | 显示命令列表。                                               |
| `/rcon varlist`                   | 显示包含当前变量的列表。                                     |
| `/rcon exit`                      | 关闭服务器.                                                  |
| `/rcon echo [text]`               | 在服务器控制台（不是游戏中的公屏）中显示“[text]”。           |
| `/rcon hostname [name]`           | 更改主机名文本（例如：/rcon hostname my server）。           |
| `/rcon gamemodetext [name]`       | 更改游戏模式文本（_例如：/rcon gamemodetext my gamemode_）。 |
| `/rcon mapname [name]`            | 更改地图名称文本（例如：/rcon mapname San Andreas）。        |
| `/rcon exec [filename]`           | 执行包含服务器 cfg 的文件（例如：/rcon exec blah.cfg_）。    |
| `/rcon kick [ID]`                 | 踢出指定 ID 的玩家（_例如: /rcon kick 2_）。                 |
| `/rcon ban [ID]`                  | 封禁指定 ID 的玩家（_例如：/rcon ban 2_）。                  |
| `/rcon changemode [mode]`         | 此命令会将当前游戏模式更改指定模式（_例如：如果您想玩 sftdm：/rcon changemode sftdm_）。 |
| `/rcon gmx`                       | 将在 [server.cfg](server.cfg) 中加载下一个游戏模式。         |
| `/rcon reloadbans`                | 重新加载存储被禁止 IP 地址的 `samp.ban` 文件。 应该在解封玩家后使用。 |
| `/rcon reloadlog`                 | 重新加载“server_log.txt”。 对于自动日志轮换很有用。 可以通过向服务器发送 `SIGUSR1` 信号来触发（仅限 Linux 服务器）。 |
| `/rcon say`                       | 在游戏内公屏中向玩家显示一条消息（例如：`/rcon say hello` 将显示为 `Admin: hello`）。 |
| `/rcon players`                   | 显示服务器中的玩家（包括他们的游戏名、IP 和 ping）。         |
| `/rcon banip [IP]`                | 封禁指定 IP（_例如：/rcon banip 127.0.0.1_）。               |
| `/rcon unbanip [IP]`              | 解封指定 IP（_例如：/rcon unbanip 127.0.0.1_）。             |
| `/rcon gravity`                   | 更改重力（_例如：/rcon gravity 0.008_）。                    |
| `/rcon weather [ID]`              | 更改天气（_例如：/rcon weather 1_）。                        |
| `/rcon loadfs`                    | 加载指定脚本（_例如：/rcon loadfs adminfs_）。               |
| `/rcon weburl [server url]`       | 更改 SA-MP 客户端中显示的服务器 URL                          |
| `/rcon unloadfs`                  | 卸载指定脚本（_例如：/rcon unloadfs adminfs_）。             |
| `/rcon reloadfs`                  | 重新加载指定脚本（_例如：/rcon reloadfs adminfs_）。         |
| `/rcon rcon\_password [PASSWORD]` | 更改 rcon 的密码                                             |
| `/rcon password [password]`       | 设置/重置服务器密码                                          |
| `/rcon messageslimit [count]`     | 修改客户端每秒发送到服务器的最大消息数。 （默认 500）        |
| `/rcon ackslimit [count]`         | 更改 acks 的限制（默认 3000 |
| `/rcon messageholelimit [count]`  | 更改消息洞的限制（默认 3000）         |
| `/rcon playertimeout [limit m/s]` | 更改玩家超时时间。（以毫秒为单位，默认 1000）                |
| `/rcon language [language]`       | 更改服务器语言（_例如：/rcon language Chinese_）。 在服务器信息中显示。 |

上述四个限制只是为了避免一些工具攻击 SA-MP 服务器让服务器崩溃或无法进入。 因此，只需根据您的服务器设置它们即可。如果你看到任何玩家被误踢，只需尽快增加限制值，这样正常的玩家就不会被踢。 [在此处阅读更多内容](http://web-old.archive.org/web/20190426141744/https://forum.sa-mp.com/showpost.php?p=2990193&postcount=47)。

### 相关回调和函数

以下回调和函数可能很有用，因为它们以某种方式与本文相关。

#### 回调

- [OnRconLoginAttempt](../scripting/callbacks/OnRconLoginAttempt): 当尝试登录 RCON 时调用。

#### 函数

- [IsPlayerAdmin](../scripting/functions/IsPlayerAdmin): 检查玩家是否登录到 RCON。

- [SendRconCommand](../scripting/functions/SendRconCommand): 通过脚本发送 RCON 命令。
