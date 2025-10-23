---
title: GetPlayerVersion
sidebar_label: GetPlayerVersion
description: 返回玩家客户端的SA-MP版本信息
tags: ["玩家"]
---

## 描述

获取玩家当前连接的 SA-MP 客户端版本信息

| 名称                   | 说明                             |
| ---------------------- | -------------------------------- |
| playerid               | 需要获取版本信息的玩家 ID        |
| version[]              | 存储版本信息的字符串（引用传递） |
| len = sizeof (version) | 版本信息的最大存储长度           |

## 返回值

客户端版本信息将存储在指定的字符数组中

## 示例代码

```c
public OnPlayerConnect(playerid)
{
    new version[24];
    GetPlayerVersion(playerid, version, sizeof(version));

    new string[64];
    format(string, sizeof(string), "您的SA-MP客户端版本：%s", version);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    // 可能显示："您的SA-MP客户端版本：0.3.7"
    return 1;
}
```

## 注意事项

:::tip

客户端版本字符串最长 24 字符，超长会导致连接被拒绝。常规玩家版本长度通常在 5 字符（0.3.7）至 9 字符（0.3.DL-R1）之间

:::

:::warning

当指定玩家是 NPC 时，版本信息字符串将返回空值

:::

## 相关函数

- [GetPlayerName](GetPlayerName): 获取玩家昵称
- [GetPlayerPing](GetPlayerPing): 获取玩家网络延迟
- [GetPlayerIp](GetPlayerIp): 获取玩家 IP 地址
