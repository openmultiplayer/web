---
title: GangZoneStopFlashForAll
sidebar_label: GangZoneStopFlashForAll
description: 停止所有玩家的帮派区域闪烁。
tags: ["帮派区域"]
---

## 描述

停止指定帮派区域对所有玩家的闪烁效果。

| 参数   | 说明                                              |
| ------ | ------------------------------------------------- |
| zoneid | 要停止闪烁的区域 ID（由 GangZoneCreate 创建返回） |

## 返回值

**1**: 函数执行成功（即使该区域原本未处于闪烁状态也会返回成功）

**0**: 函数执行失败（指定的帮派区域不存在）

## 示例

```c
new gGangZoneId;

public OnGameModeInit()
{
    gGangZoneId = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);
    return 1;
}

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    GangZoneFlashForAll(gGangZoneId, COLOR_RED);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    GangZoneStopFlashForAll(gGangZoneId);
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
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): 停止帮派区域对玩家闪烁
