---
title: OnPlayerEnterPlayerGangZone
sidebar_label: OnPlayerEnterPlayerGangZone
description: 当玩家进入玩家帮派区域时触发此回调函数
tags: ["玩家", "帮派区域"]
---

<VersionWarnZH_CN name='回调' version='omp v1.1.0.2612' />

## 描述

当玩家进入玩家帮派区域时触发此回调函数

| 参数     | 说明                     |
| -------- | ------------------------ |
| playerid | 进入玩家帮派区域的玩家ID |
| zoneid   | 玩家进入的玩家帮派区域ID |

## 返回值

此回调始终在游戏模式中优先触发

## 示例

```c
public OnPlayerEnterPlayerGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "你正在进入玩家帮派区域 %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## 相关回调

以下回调函数可能与此回调相关：

- [OnPlayerLeavePlayerGangZone](OnPlayerLeavePlayerGangZone): 当玩家离开玩家帮派区域时触发

## 相关函数

以下函数可能与此回调函数相关：

- [CreatePlayerGangZone](../functions/CreatePlayerGangZone): 创建玩家帮派区域
- [PlayerGangZoneDestroy](../functions/PlayerGangZoneDestroy): 销毁玩家帮派区域
- [UsePlayerGangZoneCheck](../functions/UsePlayerGangZoneCheck): 启用玩家进入该区域时的回调检测
