---
title: SetPlayerInterior
sidebar_label: SetPlayerInterior
description: 设置玩家的室内场景。
tags: ["玩家"]
---

## 描述

设置玩家的室内场景。当前已知室内场景及其坐标的完整列表可在此处查看。

| 参数       | 说明                                        |
| ---------- | ------------------------------------------- |
| playerid   | 要设置室内场景的玩家 ID                     |
| interiorid | 要设置的[场景 ID](../resources/interiorids) |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（玩家未连接）

## 示例代码

```c
// 将玩家设为默认室内场景（室外）
SetPlayerInterior(playerid, 0);
```

## 相关函数

- [GetPlayerInterior](GetPlayerInterior): 获取玩家当前室内场景
- [LinkVehicleToInterior](LinkVehicleToInterior): 设置车辆关联的室内场景
- [OnPlayerInteriorChange](../callbacks/OnPlayerInteriorChange): 玩家切换室内场景时触发

## 相关资源

- [场景 ID 列表](../resources/interiorids)
