---
title: GangZoneShowForPlayer
sidebar_label: GangZoneShowForPlayer
description: 为指定玩家显示帮派区域。
tags: ["玩家", "帮派区域"]
---

## 描述

为指定玩家显示帮派区域。需预先使用[GangZoneCreate](GangZoneCreate)创建。

| 参数     | 说明                                                              |
| -------- | ----------------------------------------------------------------- |
| playerid | 目标玩家 ID                                                       |
| zoneid   | 要显示的帮派区域 ID（由[GangZoneCreate](GangZoneCreate)创建返回） |
| colour   | 显示颜色（RGBA 格式的整型或十六进制值，支持透明度通道）           |

## 返回值

显示成功返回**1**，否则返回**0**（帮派区域不存在）

## 示例

```c
new gGangZoneId;

public OnGameModeInit()
{
    gGangZoneId = GangZoneCreate(1082.962, -2787.229, 2942.549, -1859.51);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    GangZoneShowForPlayer(playerid, gGangZoneId, 0xFFFF0096);
    return 1;
}
```

## 相关函数

- [GangZoneCreate](GangZoneCreate): 创建帮派区域
- [GangZoneDestroy](GangZoneDestroy): 销毁帮派区域
- [GangZoneShowForPlayer](GangZoneShowForPlayer): 为玩家显示帮派区域
- [GangZoneHideForPlayer](GangZoneHideForPlayer): 为玩家隐藏帮派区域
- [GangZoneHideForAll](GangZoneHideForAll): 为所有玩家隐藏帮派区域
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): 使帮派区域对玩家闪烁
- [GangZoneFlashForAll](GangZoneFlashForAll): 使帮派区域对所有玩家闪烁
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): 停止帮派区域对玩家闪烁
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): 停止帮派区域对所有玩家闪烁
