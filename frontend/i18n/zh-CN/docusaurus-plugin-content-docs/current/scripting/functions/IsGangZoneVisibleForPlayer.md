---
title: IsGangZoneVisibleForPlayer
sidebar_label: IsGangZoneVisibleForPlayer
description: 检查帮派区域是否对玩家可见
tags: ["玩家", "帮派区域"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检查指定帮派区域是否对玩家可见。

| 参数     | 说明              |
| -------- | ----------------- |
| playerid | 需要检查的玩家 ID |
| zoneid   | 帮派区域 ID       |

## 返回值

**true** - 帮派区域对玩家可见  
**false** - 帮派区域不可见或未加载

## 相关函数

- [GangZoneDestroy](GangZoneDestroy): 销毁帮派区域
- [GangZoneShowForPlayer](GangZoneShowForPlayer): 为玩家显示帮派区域
- [GangZoneShowForAll](GangZoneShowForAll): 为所有玩家显示帮派区域
- [GangZoneHideForPlayer](GangZoneHideForPlayer): 对玩家隐藏帮派区域
- [GangZoneHideForAll](GangZoneHideForAll): 对所有玩家隐藏帮派区域
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): 使帮派区域对玩家闪烁
- [GangZoneFlashForAll](GangZoneFlashForAll): 使帮派区域对所有玩家闪烁
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): 停止帮派区域对玩家闪烁
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): 停止帮派区域对所有玩家闪烁
- [IsValidGangZone](IsValidGangZone): 验证帮派区域有效性
- [IsPlayerInGangZone](IsPlayerInGangZone): 检查玩家是否在帮派区域内
