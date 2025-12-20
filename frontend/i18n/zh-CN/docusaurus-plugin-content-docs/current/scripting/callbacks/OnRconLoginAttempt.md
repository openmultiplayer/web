---
title: OnRconLoginAttempt
sidebar_label: OnRconLoginAttempt
description: 当玩家尝试在游戏中登录RCON时触发此回调函数（无论成功与否）。
tags: ["远程控制台", "管理"]
---

## 描述

当玩家在游戏内尝试登录RCON时触发此回调函数，无论登录是否成功。

| 参数       | 说明                       |
| ---------- | -------------------------- |
| ip[]       | 尝试登录的玩家IP地址       |
| password[] | 使用的登录密码             |
| success    | 登录结果（0=失败，1=成功） |

## 返回值

此回调始终在滤镜脚本中优先触发。

## 示例

```c
public OnRconLoginAttempt(ip[], password[], success)
{
    if (!success) // 若密码错误
    {
        printf("RCON登录失败：IP %s 使用密码 %s", ip, password);

        new ipAddress[16];

        for (new i = 0; i < MAX_PLAYERS; i++) // 遍历所有玩家
        {
            if (!IsPlayerConnected(i))
            {
                continue;
            }

            GetPlayerIp(i, ipAddress, sizeof(ipAddress));

            if (!strcmp(ip, ipAddress, true)) // 匹配IP地址
            {
                SendClientMessage(i, 0xFFFFFFFF, "密码错误，即将踢出！");
                Kick(i); // 踢出玩家
                break;
            }
        }
    }
    return 1;
}
```

## 注意事项

:::tip

- 此回调仅在游戏内使用`/rcon login`时触发
- 仅在玩家未登录RCON时触发，登录成功后触发[OnRconCommand](OnRconCommand)

:::

## 相关回调

以下回调可能与此回调存在关联：

- [OnRconCommand](OnRconCommand): 当发送RCON命令时触发

## 相关函数

以下函数可能与此回调存在关联：

- [IsPlayerAdmin](../functions/IsPlayerAdmin): 检测玩家是否为RCON管理员
- [SetPlayerAdmin](../functions/SetPlayerAdmin): 设置玩家为RCON管理员
- [SendRconCommand](../functions/SendRconCommand): 通过脚本发送RCON命令
