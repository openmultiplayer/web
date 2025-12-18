---
title: IsPlayerInGangZone
sidebar_label: IsPlayerInGangZone
description: 检测玩家是否处于帮派区域内
tags: ["玩家", "帮派区域"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测玩家是否处于帮派区域内

| 参数名   | 说明              |
| -------- | ----------------- |
| playerid | 需要检测的玩家 ID |
| zoneid   | 帮派区域 ID       |

## 返回值

**true** - 玩家处于帮派区域内

**false** - 玩家未处于帮派区域内

## 注意事项

:::warning

此函数仅适用于 open.mp 平台，SA-MP 需使用[YSF 插件](https://github.com/IS4Code/YSF/releases)

:::

:::warning

必须预先调用[UseGangZoneCheck](UseGangZoneCheck)函数方可使用本检测功能

:::

## 相关函数

- [GangZoneDestroy](GangZoneDestroy): 销毁帮派区域
- [GangZoneShowForPlayer](GangZoneShowForPlayer): 为玩家显示帮派区域
- [GangZoneShowForAll](GangZoneShowForAll): 为全体玩家显示帮派区域
- [GangZoneHideForPlayer](GangZoneHideForPlayer): 为玩家隐藏帮派区域
- [GangZoneHideForAll](GangZoneHideForAll): 为全体玩家隐藏帮派区域
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): 使帮派区域对玩家闪烁
- [GangZoneFlashForAll](GangZoneFlashForAll): 使帮派区域对所有玩家闪烁
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): 停止帮派区域对玩家闪烁
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): 停止帮派区域对所有玩家闪烁
- [IsValidGangZone](IsValidGangZone): 验证帮派区域有效性
