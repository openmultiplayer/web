---
title: SetPlayerTeam
sidebar_label: SetPlayerTeam
description: 设置玩家所属的队伍。
tags: ["玩家"]
---

## 描述

设置玩家所属的队伍。

| 参数名   | 说明                                              |
| -------- | ------------------------------------------------- |
| playerid | 需要设置队伍的玩家 ID                             |
| teamid   | 目标队伍编号。使用 NO_TEAM 可移除玩家当前队伍归属 |

## 返回值

此函数不返回特定值。

## 示例代码

```c
public OnPlayerSpawn(playerid)
{
    // 玩家生成时将其队伍设为4
    SetPlayerTeam(playerid, 4);
    return 1;
}
```

## 注意事项

:::tip

- 同队伍玩家之间无法造成伤害（使用割喉刀除外）
- 同队伍玩家驾驶的车辆默认免疫友方伤害，可通过[EnableVehicleFriendlyFire](EnableVehicleFriendlyFire)启用
- 默认无队伍状态使用 255（或 NO_TEAM），而非 0 号队伍

:::

## 相关函数

- [GetPlayerTeam](GetPlayerTeam): 获取玩家当前所属队伍
- [SetTeamCount](SetTeamCount): 设置服务器队伍总数
- [EnableVehicleFriendlyFire](EnableVehicleFriendlyFire): 启用车辆友军伤害功能
