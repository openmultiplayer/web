---
title: BlockIpAddress
sidebar_label: BlockIpAddress
description: 阻止指定IP地址与服务器通信（允许使用通配符），持续指定时长。
tags: ["ip地址"]
---

## 描述

阻止指定 IP 地址与服务器通信（允许使用通配符），持续指定时长。被封锁 IP 的玩家尝试连接时会收到通用提示信息"您已被封禁"。已在线的该 IP 玩家将在数秒后超时断开连接，重新连接时也会收到相同提示。

| 参数名            | 说明                                  |
| ----------------- | ------------------------------------- |
| const ipAddress[] | 要封锁的 IP 地址                      |
| timeMS            | 封锁时长（毫秒）。使用 0 表示永久封锁 |

## 返回值

本函数没有特定返回值

## 示例代码

```c
public OnRconLoginAttempt(ip[], password[], success)
{
    if (!success) // 如果输入了错误密码
    {
        BlockIpAddress(ip, 60 * 1000); // 封锁该IP地址1分钟
    }
    return 1;
}
```

## 注意事项

:::tip

本函数支持通配符使用，例如封锁'6.9._._'将匹配前两组为 6 和 9 的所有 IP 地址。下划线可替代任意数字组合

:::

## 相关函数

- [UnBlockIpAddress](UnBlockIpAddress): 解除 IP 地址封锁
- [IsBanned](IsBanned): 检测指定 IP 是否被封禁

## 相关回调

- [OnRconLoginAttempt](../callbacks/OnRconLoginAttempt): 当有人尝试登录 RCON 时触发
- [OnIncomingConnection](../callbacks/OnIncomingConnection): 当玩家尝试连接服务器时触发
