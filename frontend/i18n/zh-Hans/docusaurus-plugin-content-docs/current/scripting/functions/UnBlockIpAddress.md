---
title: UnBlockIpAddress
sidebar_label: UnBlockIpAddress
description: 解除通过BlockIpAddress封禁的IP地址。
tags: ["管理", "IP地址"]
---

## 描述

解除通过[BlockIpAddress](BlockIpAddress)封禁的 IP 地址。

| 参数              | 说明                   |
| ----------------- | ---------------------- |
| const ipAddress[] | 需要解除封禁的 IP 地址 |

## 返回值

此函数不返回特定值。

## 示例

```c
public OnGameModeInit()
{
    UnBlockIpAddress("127.0.0.1"); // 解除本地IP地址的封禁
    return 1;
}
```

## 相关函数

- [BlockIpAddress](BlockIpAddress): 封禁 IP 地址禁止连接服务器
- [IsBanned](IsBanned): 检测指定 IP 是否被封禁

## 相关回调

- [OnIncomingConnection](../callbacks/OnIncomingConnection): 当玩家尝试连接服务器时触发
