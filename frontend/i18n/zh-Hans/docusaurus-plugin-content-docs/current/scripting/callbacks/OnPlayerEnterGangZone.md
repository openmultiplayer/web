---
title: OnPlayerEnterGangZone
sidebar_label: OnPlayerEnterGangZone
description: 当玩家进入帮派区域时触发该回调函数
tags: ["玩家", "帮派区域"]
---

<VersionWarnZH_CN name='回调' version='omp v1.1.0.2612' />

## 描述

当玩家进入帮派区域时触发该回调函数

| 参数名   | 说明                 |
| -------- | -------------------- |
| playerid | 进入帮派区域的玩家ID |
| zoneid   | 玩家进入的帮派区域ID |

## 返回值

该回调始终在游戏模式中优先触发

## 示例

```c
public OnPlayerEnterGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "你正在进入帮派区域 %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## 相关回调

以下回调函数可能与本回调相关：

- [OnPlayerLeaveGangZone](OnPlayerLeaveGangZone): 当玩家离开帮派区域时触发

## 相关函数

以下函数可能与本回调函数相关：

- [GangZoneCreate](../functions/GangZoneCreate): 创建帮派区域（彩色雷达区域）
- [GangZoneDestroy](../functions/GangZoneDestroy): 销毁帮派区域
- [UseGangZoneCheck](../functions/UseGangZoneCheck): 启用玩家进入该区域时的回调检测
