---
title: GangZoneGetFlashColourForPlayer
sidebar_label: GangZoneGetFlashColourForPlayer
description: 获取玩家帮派区域的闪烁颜色
tags: ["玩家", "帮派区域"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取指定玩家帮派区域的当前闪烁颜色。

| 参数     | 说明        |
| -------- | ----------- |
| playerid | 目标玩家 ID |
| zoneid   | 帮派区域 ID |

## 返回值

返回玩家帮派区域的 RGBA 闪烁颜色值。

**0:** 函数执行失败。该帮派区域未对玩家显示或未设置闪烁。

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
