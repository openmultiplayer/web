---
title: SetPlayerInterior
description: 设置某个玩家的内部空间。
tags: ["player"]
---

## 描述

设置某个玩家的内部空间。目前已知的内部空间及其位置可以在[这里](../resources/interiorids)找到。

| 参数名     | 说明                                              |
| ---------- | ------------------------------------------------- |
| playerid   | 要设置内部空间的玩家 ID。                         |
| interiorid | 要设置的[内部空间 ID](../resources/interiorids)。 |

## 返回值

1:函数执行成功。

0:函数执行失败，这意味着玩家没有连接到服务器。

## 案例

```c
// 将玩家的内部空间设置为默认值（外部）。
SetPlayerInterior(playerid, 0);
```

## 相关函数

- [GetPlayerInterior](GetPlayerInterior): 获取某个玩家目前的内部空间。
- [LinkVehicleToInterior](LinkVehicleToInterior): 改变某个载具所处的内部空间。
- [OnPlayerInteriorChange](../callbacks/OnPlayerInteriorChange): 当某个玩家的内部空间改变时调用。
