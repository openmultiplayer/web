---
title: IsPlayerStreamedIn
sidebar_label: IsPlayerStreamedIn
description: 检测玩家是否在另一玩家的客户端中完成流加载。
tags: ["玩家"]
---

## 描述

检测指定玩家是否在目标玩家的客户端中完成流加载。

| 参数名      | 说明                            |
| ----------- | ------------------------------- |
| playerid    | 被检测的玩家 ID                 |
| forplayerid | 目标玩家 ID（检测的客户端主体） |

## 返回值

**true** - 玩家已完成流加载

**false** - 玩家未完成流加载

## 示例代码

```c
if (IsPlayerStreamedIn(playerid, 0))
{
	SendClientMessage(playerid, -1, "ID 0 可以看到你。");
}
```

## 注意事项

:::tip

**SA-MP 服务器:** 玩家距离超过 200 米时自动流卸载（参见[server.cfg](../../server/server.cfg) - **stream_distance**）

**open.mp 服务器:** 玩家距离超过 200 米时自动流卸载（参见[config.json](../../server/config.json) - **network.stream_radius**）

:::

:::warning

玩家无法在自己的客户端流加载自身，当 playerid 与 forplayerid 相同时始终返回 false！

:::

## 相关函数

- [IsActorStreamedIn](IsActorStreamedIn): 检测角色是否已为玩家流加载
- [IsVehicleStreamedIn](IsVehicleStreamedIn): 检测车辆是否已为玩家流加载

## 相关回调

- [OnPlayerStreamIn](../callbacks/OnPlayerStreamIn): 玩家完成流加载时触发
- [OnPlayerStreamOut](../callbacks/OnPlayerStreamOut): 玩家完成流卸载时触发
- [OnVehicleStreamIn](../callbacks/OnVehicleStreamIn): 车辆完成流加载时触发
- [OnVehicleStreamOut](../callbacks/OnVehicleStreamOut): 车辆完成流卸载时触发
