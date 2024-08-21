---
title: "Controlling a Server"
description: Useful commands for controlling a server.
---

## 更改游戏模式

### 运行自定义/下载的游戏模式

- 打开你安装服务器的目录 (例如：/Rockstar Games/GTA San Andreas/server)
- 将下载/编译好的 .amx 文件放在你安装服务器的 gamemodes 文件夹中
- 使用 RCON 更改游戏模式.
- 或者, 你可以将新模式添加到轮换列表中.

### 使用过滤脚本

和运行自定义游戏模式相同, 除了以下不同点:

- 将 .amx 文件放在名为 `filterscripts` 的文件夹中
- 在 server.cfg 中添加以下内容：`filterscripts <scriptname>`

## 给服务器设置密码

- 如果你想添加密码以便只有你的朋友能加入, 在 [server.cfg](server.cfg) 中添加以下内容:

```
password whatever
```

- 这将使你的服务器受密码保护, 密码为 'whatever'——你可以将其改为你想要的任何密码.
- 你也可以在游戏中使用 `/rcon password newpasswordhere` 更改密码
- 你可以使用 `/rcon password 0` 移除密码, 或者重启服务器.

## 使用 RCON

### 登录 RCON

你可以在游戏中通过输入 `/rcon login password` 或者在游戏外使用 [远程控制台](RemoteConsole) 中的 RCON 模式登录.

密码与你在 [server.cfg](server.cfg) 中设置的相同

### 添加封禁

##### samp.ban

`samp.ban` 文件用于存储封禁信息, 包括以下信息:

- IP
- 日期
- 时间
- 名称 (人名或原因, 详见 [BanEx](../../functions/BanEx))
- 封禁类型

要添加封禁, 只需添加如下内容：

```
IP_HERE [28/05/09 | 13:37:00] PLAYER - BAN REASON
```

在 `IP_HERE` 处填写你想封禁的IP地址.

##### Ban() 函数

[Ban](../scripting/functions/Ban) 函数可用于通过脚本封禁玩家. [BanEx](../scripting/functions/BanEx) 函数可以添加可选的封禁原因, 如下所示:

```
13.37.13.37 [28/05/09 | 13:37:00] 作弊者 - INGAME BAN
```

##### RCON ban 命令

RCON ban 命令可以通过在游戏中输入 `/rcon ban` 或在控制台中输入 "ban" 来执行, 用于封禁服务器上的特定玩家. 要封禁IP地址, 请参见下一节.

简单地输入:

```
# 游戏中:
/rcon ban PLAYERID

# 控制台:
ban PLAYERID
```

##### banip

RCON banip 命令可以通过在游戏中输入 `/rcon banip` 或在控制台中输入 "banip" 来执行, 用于封禁特定的IP地址. 要通过ID封禁服务器上的玩家, 请参见上一节. 可以接受范围封禁的通配符.

简单地输入:

```
# 游戏中:
/rcon banip IP

# 控制台:
banip IP
```

### 解除封禁

当有人被封禁后, 有两种方法可以解除封禁.

- 从 `samp.ban` 文件中删除
- 使用 RCON `unbanip` 命令

#### samp.ban

`samp.ban` 文件可以在你的 sa-mp 服务器目录中找到, 它包含每个封禁的以下信息:

- IP
- 日期
- 时间
- 名称 (人名或原因 (详见 [BanEx](../scripting/functions/BanEx)))
- 封禁类型 (游戏内封禁、IP封禁等)

示例:

```
127.8.57.32 [13/06/09 | 69:69:69] NONE - IP BAN
13.37.13.37 [28/05/09 | 13:37:00] Kyeman - INGAME BAN
```

要解除封禁, 只需移除对应的那一行, 然后执行 RCON `reloadbans` 命令以使服务器重新读取 `samp.ban` 文件.

#### unbanip

RCON unbanip 命令可以在游戏中或通过服务器控制台 (黑框)使用. 要解除封禁IP地址, 只需在游戏中输入 `/rcon unbanip IP_HERE` 或在控制台中输入 `unbanip IP_HERE`.

示例:

```
13.37.13.37 [28/05/09 | 13:37:00] Kyeman - INGAME BAN
```

```
# 游戏中:
/rcon unbanip 13.37.13.37

# 控制台
unbanip 13.37.13.37
```

要解除封禁, 只需使用 `unbanip` 命令, 然后执行 RCON `reloadbans` 命令以使服务器重新读取 `samp.ban` 文件.

#### reloadbans

`samp.ban` 是一个文件, 用于存储当前从服务器中封禁的IP地址的信息. 该文件在服务器启动时读取, 因此如果你解除了一个IP/玩家的封禁, 你必须输入RCON `reloadbans` 命令以使服务器重新读取 `samp.ban` 文件从而允许他们再次加入服务器.

### RCON 命令

输入 cmdlist 以查看命令列表 (或者输入 varlist 以查看变量列表), 可以在游戏中使用 RCON (`/rcon cmdlist`).

以下是你作为管理员可以使用的功能:

| 命令                           | 描述                                                                                                                                           |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/rcon cmdlist`                   | 显示命令列表.                                                                                                                           |
| `/rcon varlist`                   | 显示当前变量列表.                                                                                                              |
| `/rcon exit`                      | 关闭服务器.                                                                                                                                    |
| `/rcon echo [text]`               | 在服务器的控制台中显示 `[text]` (不是游戏内的客户端控制台)                                                                     |
| `/rcon hostname [name]`           | 更改服务器名称 (_示例: /rcon hostname my server_).                                                                                       |
| `/rcon gamemodetext [name]`       | 更改游戏模式文本 (_示例: /rcon gamemodetext my gamemode_).                                                                                 |
| `/rcon mapname [name]`            | 更改地图名称文本 (_示例: /rcon mapname San Andreas_).                                                                                      |
| `/rcon exec [filename]`           | 执行包含服务器配置的文件 (_示例: /rcon exec blah.cfg_).                                                                         |
| `/rcon kick [ID]`                 | 踢掉指定ID的玩家 (_示例: /rcon kick 2_).                                                                                          |
| `/rcon ban [ID]`                  | 封禁指定ID的玩家 (_示例: /rcon ban 2_).                                                                                            |
| `/rcon changemode [mode]`         | 此命令将当前的游戏模式更改为指定的模式 (_示例: 如果你想玩 sftdm: /rcon changemode sftdm_).                        |
| `/rcon gmx`                       | 将加载 [server.cfg](server.cfg) 中的下一个游戏模式.                                                                                              |
| `/rcon reloadbans`                | 重新加载存储封禁IP地址的 `samp.ban` 文件. 应在解除封禁后使用.                                  |
| `/rcon reloadlog`                 | 重新加载 `server_log.txt`. 对自动日志轮换有用. 可以通过向服务器发送 `SIGUSR1` 信号触发 (仅适用于Linux服务器).  |
| `/rcon say`                       | 在客户端控制台向玩家显示消息 (_示例: `/rcon say hello` 将显示为 `Admin: hello`).                                        |
| `/rcon players`                   | 显示服务器中的玩家 (包括他们的名字、IP地址和延迟).                                                                                |
| `/rcon banip [IP]`                | 封禁指定的IP地址 (_示例: /rcon banip 127.0.0.1_).                                                                                                  |
| `/rcon unbanip [IP]`              | 解除指定IP地址的封禁 (_示例: /rcon unbanip 127.0.0.1_).                                                                                              |
| `/rcon gravity`                   | 更改重力 (_示例: /rcon gravity 0.008_).                                                                                                 |
| `/rcon weather [ID]`              | 更改天气 (_示例: /rcon weather 1_).                                                                                                     |
| `/rcon loadfs`                    | 加载指定的过滤脚本 (_示例: /rcon loadfs adminfs_).                                                                                       |
| `/rcon weburl [server url]`       | 在服务器浏览器中显示的服务器URL 地址                                                                                                |
| `/rcon unloadfs`                  | 卸载指定的过滤脚本 (_示例: /rcon unloadfs adminfs_).                                                                                    |
| `/rcon reloadfs`                  | 重新加载指定的过滤脚本 (_示例: /rcon reloadfs adminfs_).                                                                                   |
| `/rcon rcon\_password [PASSWORD]` | 更改 RCON 密码                                                                                                                            |
| `/rcon password [password]`       | 设置/重置服务器密码                                                                                                                       |
| `/rcon messageslimit [count]`     | 更改客户端每秒向服务器发送的信息数量. (默认为 500)                 |
| `/rcon ackslimit [count]`         | 更改 acks 的限制 (默认为 3000)                      |
| `/rcon messageholelimit [count]`  | 更改信息孔数限制 (默认为 3000)                         |
| `/rcon playertimeout [limit m/s]` | 更改玩家不发送任何数据包时的超时时间 (毫秒). (默认为 10000) |
| `/rcon language [language]`       | 更改在服务器浏览器中显示的服务器语言 (_示例: /rcon language English_).             |

上述四个限制/数量只是为了避免一些工具通过冻结或崩溃来攻击任何 SA-MP 服务器. 因此, 只需根据你的服务器设置即可. 默认值是默认的, 如果你发现任何错误的踢人行为, 请尽快提高数值, 以避免无辜的玩家被踢.

### 相关回调和函数

以下回调和函数可能会有用, 因为它们与此文档有这样或那样的关联.

#### 回调

- [OnRconLoginAttempt](../scripting/callbacks/OnRconLoginAttempt): 尝试登录 RCON 时调用.

#### 函数

- [IsPlayerAdmin](../scripting/functions/IsPlayerAdmin): 检查玩家是否已登录 RCON.

- [SendRconCommand](../scripting/functions/SendRconCommand): 通过脚本发送 RCON 命令.
