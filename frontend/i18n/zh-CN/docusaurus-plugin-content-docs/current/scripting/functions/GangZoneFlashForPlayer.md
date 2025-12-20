---
title: GangZoneFlashForPlayer
sidebar_label: GangZoneFlashForPlayer
description: 使帮派区域对指定玩家闪烁显示。
tags: ["玩家", "帮派区域"]
---

## 描述

使指定玩家的帮派区域闪烁显示。

| 参数        | 说明                                                    |
| ----------- | ------------------------------------------------------- |
| playerid    | 目标玩家 ID                                             |
| zoneid      | 要闪烁的区域 ID                                         |
| flashColour | 闪烁颜色（RGBA 格式的整型或十六进制值，支持透明度通道） |

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
```

## 相关函数

- [GangZoneCreate](GangZoneCreate): 创建帮派区域
- [GangZoneDestroy](GangZoneDestroy): 销毁帮派区域
- [GangZoneShowForPlayer](GangZoneShowForPlayer): 为玩家显示帮派区域
- [GangZoneShowForAll](GangZoneShowForAll): 为所有玩家显示帮派区域
- [GangZoneHideForPlayer](GangZoneHideForPlayer): 为玩家隐藏帮派区域
- [GangZoneHideForAll](GangZoneHideForAll): 为所有玩家隐藏帮派区域
- [GangZoneFlashForAll](GangZoneFlashForAll): 为所有玩家闪烁帮派区域
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): 停止为玩家闪烁帮派区域
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): 停止为所有玩家闪烁帮派区域
