---
title: OnRconCommand
sidebar_label: OnRconCommand
description: 当通过服务器控制台、RCON或游戏内"/rcon command"发送命令时触发此回调函数。
tags: ["远程控制台", "管理"]
---

## 描述

当通过以下方式发送命令时触发此回调函数：

- 服务器控制台
- RCON远程控制台
- 游戏内指令`/rcon command`

| 参数  | 说明                       |
| ----- | -------------------------- |
| cmd[] | 包含完整命令及参数的字符串 |

## 返回值

此回调始终在滤镜脚本中优先触发，返回1将阻止主脚本处理该命令。

## 示例

```c
public OnRconCommand(cmd[])
{
    printf("[RCON]: 你输入了 '/rcon %s'!", cmd);
    return 0;
}

public OnRconCommand(cmd[])
{
    if (!strcmp(cmd, "hello", true))
    {
        SendClientMessageToAll(0xFFFFFFAA, "Hello World!");
        print("你向世界打了招呼"); // 该消息会显示在输入者的聊天框（白色文字）
        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

- 当玩家输入指令时，`/rcon`前缀不会包含在cmd参数中
- 在此回调中使用`print`函数会同时向玩家聊天框和服务器日志输出信息
- 仅当玩家已登录RCON管理员时才会触发此回调
- 玩家使用`/rcon login`登录时会触发[OnRconLoginAttempt](OnRconLoginAttempt)而非此回调

:::

:::warning

**版本差异**  
SA-MP需在滤镜脚本中实现此回调才能生效，该问题已在open.mp修复

:::

## 相关回调

以下回调可能与此回调存在关联：

- [OnRconLoginAttempt](OnRconLoginAttempt): 当尝试登录RCON时触发

## 相关函数

以下函数可能与此回调存在关联：

- [IsPlayerAdmin](../functions/IsPlayerAdmin): 检测玩家是否为RCON管理员
- [SetPlayerAdmin](../functions/SetPlayerAdmin): 设置玩家为RCON管理员
