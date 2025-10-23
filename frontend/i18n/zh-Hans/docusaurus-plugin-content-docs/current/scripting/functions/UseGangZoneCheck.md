---
title: UseGangZoneCheck
sidebar_label: UseGangZoneCheck
description: 启用当玩家进入/离开该区域时的回调触发
tags: ["玩家", "帮派区域"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

启用当玩家进入/离开指定帮派区域时的回调触发功能。

| 名称        | 描述                                           |
| ----------- | ---------------------------------------------- |
| zoneid      | 需要启用区域检测的帮派区域 ID                  |
| bool:enable | 是否启用区域检测功能（`true`启用/`false`停用） |

## 返回值

**1:** 函数执行成功

**0:** 函数执行失败（指定的帮派区域不存在）

## 示例

```c
new gGangZoneID = INVALID_GANG_ZONE;

public OnGameModeInit()
{
    gGangZoneID = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);

    // 启用该区域的进出检测回调
    UseGangZoneCheck(gGangZoneID, true);
}

public OnPlayerEnterGangZone(playerid, zoneid)
{
    if (zoneid == gGangZoneID)
    {
        new string[64];
        format(string, sizeof(string), "你正在进入帮派区域 %i", zoneid);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
    }
    return 1;
}

public OnPlayerLeaveGangZone(playerid, zoneid)
{
    if (zoneid == gGangZoneID)
    {
        new string[64];
        format(string, sizeof(string), "你正在离开帮派区域 %i", zoneid);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
    }
    return 1;
}
```

## 相关回调

以下回调函数与本文档功能相关：

- [OnPlayerEnterGangZone](../callbacks/OnPlayerEnterGangZone): 当玩家进入帮派区域时触发
- [OnPlayerLeaveGangZone](../callbacks/OnPlayerLeaveGangZone): 当玩家离开帮派区域时触发

## 相关函数

以下函数与本文档功能相关：

- [GangZoneCreate](GangZoneCreate): 创建帮派区域
- [GangZoneDestroy](GangZoneDestroy): 销毁帮派区域
- [GangZoneShowForPlayer](GangZoneShowForPlayer): 为玩家显示帮派区域
- [GangZoneShowForAll](GangZoneShowForAll): 全体显示帮派区域
- [GangZoneHideForPlayer](GangZoneHideForPlayer): 对玩家隐藏帮派区域
- [GangZoneHideForAll](GangZoneHideForAll): 全体隐藏帮派区域
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): 为玩家闪烁显示区域
- [GangZoneFlashForAll](GangZoneFlashForAll): 全体闪烁显示区域
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): 停止玩家区域闪烁
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): 停止全体区域闪烁
- [IsValidGangZone](IsValidGangZone): 验证帮派区域有效性
- [IsPlayerInGangZone](IsPlayerInGangZone): 检测玩家是否在区域内
- [IsGangZoneVisibleForPlayer](IsGangZoneVisibleForPlayer): 检测区域对玩家可见性
