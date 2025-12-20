---
title: OnPlayerCommandText
sidebar_label: OnPlayerCommandText
description: 当玩家在聊天窗口输入命令时触发此回调
tags: ["玩家"]
---

## 描述

当玩家在客户端聊天窗口输入命令时触发此回调。命令需以斜杠`/`开头，例如`/help`。

| 参数      | 说明                             |
| --------- | -------------------------------- |
| playerid  | 输入命令的玩家ID                 |
| cmdtext[] | 输入的命令内容（包含开头的斜杠） |

## 返回值

此回调在滤镜脚本中总是优先触发，返回1将阻止其他脚本处理此命令。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/help", true))
    {
        SendClientMessage(playerid, -1, "服务器：这是 /help 命令！");
        return 1;
        // 返回1表示命令已被处理
        // 其他脚本将不会触发OnPlayerCommandText
    }
    return 0;
    // 返回0表示命令未被当前脚本处理
    // 其他脚本将继续尝试处理该命令
    // 若所有脚本均未处理，玩家将看到'SERVER: Unknown Command'提示
}
```

## 注意

<TipNPCCallbacksZH_CN />

## 相关回调

以下回调可能与当前回调存在关联：

- [OnPlayerText](OnPlayerText)：当玩家发送聊天消息时触发
- [OnRconCommand](OnRconCommand)：当通过服务器控制台、远程RCON或游戏内/rcon命令执行时触发

## 相关函数

以下函数可能与当前回调相关：

- [SendRconCommand](../functions/SendRconCommand)：通过脚本发送RCON命令
