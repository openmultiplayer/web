---
title: GangZoneShowForAll
sidebar_label: GangZoneShowForAll
description: 为所有玩家显示指定颜色的帮派区域。
tags: ["帮派区域"]
---

## 描述

为所有玩家显示指定颜色的帮派区域。

| 参数   | 说明                                                              |
| ------ | ----------------------------------------------------------------- |
| zoneid | 要显示的帮派区域 ID（由[GangZoneCreate](GangZoneCreate)创建返回） |
| colour | 显示颜色（RGBA 格式的整型或十六进制值，支持透明度通道）           |

## 返回值

1：函数执行成功。帮派区域已对所有玩家显示。

0：函数执行失败。指定的帮派区域不存在。

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
    if (IsPlayerAdmin(playerid))
    {
        GangZoneShowForAll(gGangZoneId, 0xFF0000FF);
    }
    return 1;
}
```

## 相关函数

- [GangZoneCreate](GangZoneCreate): 创建帮派区域
- [GangZoneDestroy](GangZoneDestroy): 销毁帮派区域
- [GangZoneShowForPlayer](GangZoneShowForPlayer): 为单个玩家显示帮派区域
- [GangZoneHideForPlayer](GangZoneHideForPlayer): 为玩家隐藏帮派区域
- [GangZoneHideForAll](GangZoneHideForAll): 为所有玩家隐藏帮派区域
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): 使帮派区域对玩家闪烁
- [GangZoneFlashForAll](GangZoneFlashForAll): 使帮派区域对所有玩家闪烁
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): 停止帮派区域对玩家闪烁
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): 停止帮派区域对所有玩家闪烁
