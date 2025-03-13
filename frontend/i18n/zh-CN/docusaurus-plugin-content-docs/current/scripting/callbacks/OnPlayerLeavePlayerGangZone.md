---
title: OnPlayerLeavePlayerGangZone
sidebar_label: OnPlayerLeavePlayerGangZone
description: 当玩家退出玩家帮派区域时触发该回调函数
tags: ["玩家", "帮派区域"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

当玩家退出玩家帮派区域时触发该回调函数

| 参数名   | 说明                     |
| -------- | ------------------------ |
| playerid | 退出玩家帮派区域的玩家ID |
| zoneid   | 玩家退出的玩家帮派区域ID |

## 返回值

该回调始终在游戏模式中优先触发

## 示例

```c
public OnPlayerLeavePlayerGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "你正在退出玩家帮派区域 %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## 相关回调

以下回调函数可能与本回调相关：

- [OnPlayerEnterPlayerGangZone](OnPlayerEnterPlayerGangZone): 当玩家进入玩家帮派区域时触发

## 相关函数

以下函数可能与本回调函数相关：

- [CreatePlayerGangZone](../functions/CreatePlayerGangZone): 创建玩家帮派区域
- [PlayerGangZoneDestroy](../functions/PlayerGangZoneDestroy): 销毁玩家帮派区域
- [UsePlayerGangZoneCheck](../functions/UsePlayerGangZoneCheck): 启用玩家退出该区域时的回调检测
