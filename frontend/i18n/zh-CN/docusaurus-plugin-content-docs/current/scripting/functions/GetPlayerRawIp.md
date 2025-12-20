---
title: GetPlayerRawIp
sidebar_label: GetPlayerRawIp
description: 获取玩家的原始IPv4地址（整数形式）
tags: ["玩家", "IP地址"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取指定玩家的原始 IPv4 地址（以整数形式表示）

| 参数名   | 说明                          |
| -------- | ----------------------------- |
| playerid | 需要获取原始 IP 地址的玩家 ID |

## 返回值

以整数形式返回玩家的原始 IPv4 地址

## 示例代码

```c
public OnPlayerConnect(playerid)
{
    new rawIp = GetPlayerRawIp(playerid);
    SendClientMessage(playerid, 0xFFFF00FF, "服务器：你的原始IP地址：%d", rawIp);
    return 1;
}
```

## 注意事项

:::tip

PAWN 语言区分大小写。使用 GetPlayerRawIP（带大写 IP）将无法生效

:::

## 相关函数

- [GetPlayerIp](GetPlayerIp): 获取玩家的字符串形式 IP 地址
- [NetStats_GetIpPort](NetStats_GetIpPort): 获取玩家的 IP 地址和端口号
