---
title: GangZoneGetPos
sidebar_label: GangZoneGetPos
description: 获取帮派区域的坐标位置
tags: ["玩家", "帮派区域"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取帮派区域的坐标位置，包括最小 X、最小 Y、最大 X、最大 Y 坐标。

| 参数        | 说明                                                    |
| ----------- | ------------------------------------------------------- |
| zoneid      | 需要获取坐标的帮派区域 ID                               |
| &Float:minX | 用于存储帮派区域西侧边界 X 坐标的浮点变量（按引用传递） |
| &Float:minY | 用于存储帮派区域南侧边界 Y 坐标的浮点变量（按引用传递） |
| &Float:maxX | 用于存储帮派区域东侧边界 X 坐标的浮点变量（按引用传递） |
| &Float:maxY | 用于存储帮派区域北侧边界 Y 坐标的浮点变量（按引用传递） |

## 返回值

此函数总是返回 **true**。

## 示例

```c
new gangZone;

public OnGameModeInit()
{
    gangZone = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);

    new
        Float:minX,
        Float:minY,
        Float:maxX,
        Float:maxY;

    GangZoneGetPos(gangZone, minX, minY, maxX, maxY);
    return 1;
}
```

## 相关函数

- [GangZoneDestroy](GangZoneDestroy): 销毁帮派区域
- [GangZoneShowForPlayer](GangZoneShowForPlayer): 为玩家显示帮派区域
- [GangZoneShowForAll](GangZoneShowForAll): 为所有玩家显示帮派区域
- [GangZoneHideForPlayer](GangZoneHideForPlayer): 为玩家隐藏帮派区域
- [GangZoneHideForAll](GangZoneHideForAll): 为所有玩家隐藏帮派区域
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): 使帮派区域对玩家闪烁
- [GangZoneFlashForAll](GangZoneFlashForAll): 使帮派区域对所有玩家闪烁
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): 停止帮派区域对玩家闪烁
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): 停止帮派区域对所有玩家闪烁
- [IsValidGangZone](IsValidGangZone): 检查帮派区域是否有效
- [IsPlayerInGangZone](IsPlayerInGangZone): 检查玩家是否在帮派区域内
- [IsGangZoneVisibleForPlayer](IsGangZoneVisibleForPlayer): 检查帮派区域对玩家是否可见
- [GangZoneGetFlashColourForPlayer](GangZoneGetFlashColourForPlayer): 获取玩家帮派区域的闪烁颜色
- [IsGangZoneFlashingForPlayer](IsGangZoneFlashingForPlayer): 检查帮派区域是否对玩家闪烁
