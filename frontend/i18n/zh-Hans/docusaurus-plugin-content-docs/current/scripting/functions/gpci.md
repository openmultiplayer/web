---
title: gpci
sidebar_label: gpci
description: 获取玩家的客户端识别码（CI），该编码关联玩家的SAMP/GTA客户端实例。
tags: []
---

<LowercaseNoteZH_CN />

## 描述

获取玩家的客户端识别码（Computer/Client Identification），该编码与玩家计算机上的 SAMP/GTA 客户端绑定。

:::warning

客户端识别码不具备唯一性，不同玩家可能拥有相同或相似的 CI，禁止仅凭 CI 匹配进行封禁操作

:::

## 参数

| 参数名                | 说明                                 |
| --------------------- | ------------------------------------ |
| playerid              | 目标玩家的 ID 编号                   |
| serial[]              | 存储 CI 的字符串数组（通过引用传递） |
| len = sizeof (serial) | 数组容量（建议使用 sizeof 获取）     |

## 返回值

返回玩家客户端识别码的字符串形式

## 使用示例

**SA-MP 服务器:**

```c
#include <a_samp>

#if !defined gpci
    native gpci(playerid, serial[], len);
#endif

public OnPlayerConnect(playerid)
{
    new serial[41]; // 40字符长度 + 终止符\0
    gpci(playerid, serial, sizeof(serial));

    new string[128];
    format(string, sizeof(string), "您的客户端识别码: %s", serial);
    SendClientMessage(playerid, -1, string);
    return 1;
}
```

**open.mp 服务器:**

```c
#include <open.mp>

public OnPlayerConnect(playerid)
{
    new serial[41]; // 40字符长度 + 终止符\0
    GPCI(playerid, serial, sizeof(serial));
    SendClientMessage(playerid, -1, "您的客户端识别码: %s", serial);
    return 1;
}
```

## 注意事项

:::warning

在 SA-MP 服务器使用时，必须在脚本顶部添加 'native gpci(playerid, serial[], len);' 声明

:::

## 相关函数

- [GetNetworkStats](GetNetworkStats): 获取服务器网络状态统计信息
- [GetPlayerNetworkStats](GetPlayerNetworkStats): 获取玩家网络状态统计信息
