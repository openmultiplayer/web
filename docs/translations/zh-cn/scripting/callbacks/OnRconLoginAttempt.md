---
title: OnRconLoginAttempt
description: 不管成功与否，只要有人尝试登录RCON，就会调用这个回调函数。
tags: []
---

## 描述

不管成功与否，只要有人尝试登录 RCON，就会调用这个回调函数。

| 参数名     | 描述                           |
| ---------- | ------------------------------ |
| ip[]       | 试图登录 RCON 的玩家的 IP。    |
| password[] | 登录时的密码。                 |
| success    | 密码不正确则为 0，正确则为 1。 |

## 返回值

它在过滤脚本中总是先被调用。

## 案例

```c
public OnRconLoginAttempt(ip[], password[], success)
{
    if (!success) //如果输入的密码不正确
    {
        printf("IP %s 尝试使用密码 %s 登录RCON失败",ip, password);
        new pip[16];
        for(new i = GetPlayerPoolSize(); i != -1; --i) //遍历所有玩家
        {
            GetPlayerIp(i, pip, sizeof(pip));
            if (!strcmp(ip, pip, true)) //如果某个玩家的IP是刚刚登录失败的IP
            {
                SendClientMessage(i, 0xFFFFFFFF, "Wrong Password. Bye!"); //发送消息给他
                Kick(i); //他现在被踢出服务器了
            }
        }
    }
    return 1;
}
```

## 要点

:::tip

这个回调函数只在游戏中使用/rcon login 指令时调用。

这个回调函数只在玩家尚未登录时调用。

当玩家登录时，OnRconCommand 回调被调用。

:::

## 相关函数

- [IsPlayerAdmin](../functions/IsPlayerAdmin): 检查一个玩家是否登录到 RCON。
- [SendRconCommand](../functions/SendRconCommand): 通过脚本发送 RCON 指令。
