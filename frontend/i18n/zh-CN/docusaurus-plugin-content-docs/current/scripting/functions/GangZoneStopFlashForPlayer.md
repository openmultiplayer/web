---
title: GangZoneStopFlashForPlayer
sidebar_label: GangZoneStopFlashForPlayer
description: 停止指定玩家的帮派区域闪烁效果。
tags: ["玩家", "帮派区域"]
---

## 描述

停止对指定玩家的帮派区域闪烁效果。

| 参数     | 说明                    |
| -------- | ----------------------- |
| playerid | 目标玩家 ID             |
| zoneid   | 要停止闪烁的帮派区域 ID |

## 返回值

此函数不返回特定值。

## 示例

```c
new gGangZoneId;

public OnGameModeInit()
{
    gGangZoneId = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    GangZoneFlashForPlayer(playerid, gGangZoneId, 0xFF0000FF);
    return 1;
}

public OnPlayerEnterVehicle(playerid, vehicleid)
{
    GangZoneStopFlashForPlayer(playerid, gGangZoneId);
    return 1;
}
```

## 相关函数

- [GangZoneCreate](GangZoneCreate): 创建帮派区域
- [GangZoneDestroy](GangZoneDestroy): 销毁帮派区域
- [GangZoneShowForPlayer](GangZoneShowForPlayer): 为玩家显示帮派区域
- [GangZoneShowForAll](GangZoneShowForAll): 为所有玩家显示帮派区域
- [GangZoneHideForPlayer](GangZoneHideForPlayer): 为玩家隐藏帮派区域
- [GangZoneHideForAll](GangZoneHideForAll): 为所有玩家隐藏帮派区域
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): 使帮派区域对玩家闪烁
- [GangZoneFlashForAll](GangZoneFlashForAll): 使帮派区域对所有玩家闪烁
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): 停止所有玩家的帮派区域闪烁
