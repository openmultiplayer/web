---
title: OnRconCommand
description: 当通过服务器控制台、远程RCON或通过游戏内“/RCON 指令”发送指令时，调用该回调。
tags: []
---

## 描述

当通过服务器控制台、远程 RCON 或通过游戏内“/RCON 指令”发送指令时，调用该回调。

| 参数名 | 描述                                             |
| ------ | ------------------------------------------------ |
| cmd[]  | 一个字符串，其中包含输入的指令和传递的任何参数。 |

## 返回值

它在过滤脚本中总是先被调用，所以返回 1 会阻止游戏模式看到它。

## 案例

```c
public OnRconCommand(cmd[])
{
    printf("[RCON]: 你输入了'/rcon %s'!", cmd);
    return 0;
}

public OnRconCommand(cmd[])
{
    if (!strcmp(cmd, "hello", true))
    {
        SendClientMessageToAll(0xFFFFFFAA, "你好 世界！");
        print("你向世界问好。"); // 对于在聊天中输入rcon指令的玩家，将以白色文字显示。
        return 1;
    }
    return 0;
}
```

## 要点

:::tip

当玩家输入指令时，“/rcon”不包含在“cmd”中。

如果你在这里使用“print”函数，它将向在游戏中输入指令的玩家发送消息以及日志。

当玩家没有以 RCON 管理员身份登录时，这个回调函数不会被调用。

如果玩家未以 RCON 管理员身份登录，并且使用/rcon login 指令，则不会调用此回调，而 OnRconLoginAttempt 将调用此回调。

然而，当玩家以 RCON 管理员的身份登录时，使用这个指令将调用这个回调。

:::

:::warning

你需要将这个回调包含在加载的过滤脚本中，以便它在游戏模式下工作!

:::

## 相关回调/函数

- [IsPlayerAdmin](../functions/IsPlayerAdmin): 检查一个玩家是否登录到 RCON。
- [OnRconLoginAttempt](OnRconLoginAttempt): 当试图登录到 RCON 时调用。
