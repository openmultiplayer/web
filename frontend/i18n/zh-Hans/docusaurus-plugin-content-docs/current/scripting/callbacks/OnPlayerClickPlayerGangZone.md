---
title: OnPlayerClickPlayerGangZone
sidebar_label: OnPlayerClickPlayerGangZone
description: 当玩家在暂停菜单地图上右键点击个人帮派区域时触发该回调
tags: ["玩家", "帮派区域"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

当玩家在暂停菜单地图上右键点击个人帮派区域时触发该回调。

| 参数     | 说明                   |
| -------- | ---------------------- |
| playerid | 触发点击操作的玩家ID   |
| zoneid   | 被点击的个人帮派区域ID |

## 返回值

本回调不处理返回值。

该回调在游戏模式中总是优先触发。

## 示例

```c
public OnPlayerClickPlayerGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "您点击了个人帮派区域 %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## 相关函数

以下函数可能与当前回调相关：

- [CreatePlayerGangZone](../functions/CreatePlayerGangZone)：创建个人帮派区域
- [PlayerGangZoneDestroy](../functions/PlayerGangZoneDestroy)：销毁个人帮派区域
