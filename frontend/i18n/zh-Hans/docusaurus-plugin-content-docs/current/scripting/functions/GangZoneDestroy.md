---
title: GangZoneDestroy
sidebar_label: GangZoneDestroy
description: 销毁帮派区域。
tags: ["帮派区域"]
---

## 描述

销毁帮派区域。

| 参数   | 说明            |
| ------ | --------------- |
| zoneid | 要销毁的区域 ID |

## 返回值

1：函数执行成功。

0：函数执行失败。指定的帮派区域 ID 不存在。

## 示例

```c
new gangZone;

public OnGameModeInit()
{
    gangZone = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);
    return 1;
}

public OnGameModeExit()
{
    GangZoneDestroy(gangZone);
    return 1;
}
```

## 相关函数

- [GangZoneCreate](GangZoneCreate): 创建帮派区域
- [GangZoneShowForPlayer](GangZoneShowForPlayer): 为玩家显示帮派区域
- [GangZoneShowForAll](GangZoneShowForAll): 为所有玩家显示帮派区域
- [GangZoneHideForPlayer](GangZoneHideForPlayer): 为玩家隐藏帮派区域
- [GangZoneHideForAll](GangZoneHideForAll): 为所有玩家隐藏帮派区域
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): 使帮派区域对玩家闪烁
- [GangZoneFlashForAll](GangZoneFlashForAll): 使帮派区域对所有玩家闪烁
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): 停止帮派区域对玩家闪烁
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): 停止帮派区域对所有玩家闪烁
