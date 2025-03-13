---
title: GetPlayerIp
sidebar_label: GetPlayerIp
description: 获取指定玩家的IP地址并存储到字符串中
tags: ["玩家", "IP地址"]
---

## 描述

获取指定玩家的 IP 地址并存储到字符串数组中

| 参数名           | 说明                                     |
| ---------------- | ---------------------------------------- |
| playerid         | 需要获取 IP 地址的玩家 ID                |
| ip[]             | 存储 IP 地址的字符串数组（通过引用传递） |
| len = sizeof(ip) | IP 地址的最大存储长度（推荐 16 字节）    |

## 返回值

玩家的 IP 地址将存储在指定的数组中

## 示例代码

```c
public OnPlayerConnect(playerid)
{
    new ipAddress[16];
    GetPlayerIp(playerid, ipAddress, sizeof(ipAddress));
    if (!strcmp(ipAddress, "127.0.0.1"))
    {
        SendClientMessage(playerid, 0xFFFFFFFF, "欢迎来到您的服务器，管理员 :)");
    }
    return 1;
}
```

## 注意事项

:::tip

PAWN 语言区分大小写，错误使用 GetPlayerIP（大写）将无法正常工作

:::

:::warning

**SA-MP 服务端**：在[OnPlayerDisconnect](../callbacks/OnPlayerDisconnect)回调中使用时将返回无效 IP（255.255.255.255），建议在[OnPlayerConnect](../callbacks/OnPlayerConnect)中保存 IP 地址

**open.mp 服务端**：支持在[OnPlayerDisconnect](../callbacks/OnPlayerDisconnect)回调中正常获取 IP

:::

## 相关函数

- [NetStats_GetIpPort](NetStats_GetIpPort): 获取玩家的 IP 和端口
- [GetPlayerRawIp](GetPlayerRawIp): 获取玩家原始 IP 地址
- [GetPlayerName](GetPlayerName): 获取玩家昵称
- [GetPlayerPing](GetPlayerPing): 获取玩家网络延迟
- [GetPlayerVersion](GetPlayerVersion): 获取玩家客户端版本

## 相关回调

- [OnIncomingConnection](../callbacks/OnIncomingConnection): 玩家尝试连接服务器时触发
- [OnPlayerConnect](../callbacks/OnPlayerConnect): 玩家成功连接时触发
- [OnPlayerDisconnect](../callbacks/OnPlayerDisconnect): 玩家断开连接时触发
