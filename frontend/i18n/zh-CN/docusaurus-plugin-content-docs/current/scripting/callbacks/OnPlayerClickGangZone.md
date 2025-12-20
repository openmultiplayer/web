---
title: OnPlayerClickGangZone
sidebar_label: OnPlayerClickGangZone
description: 当玩家在暂停菜单地图上右键点击帮派区域时触发此回调
tags: ["玩家", "帮派区域"]
---

<VersionWarnZH_CN name='回调' version='omp v1.1.0.2612' />

## 描述

当玩家在暂停菜单地图上右键点击帮派区域时触发此回调。

| 参数     | 说明                 |
| -------- | -------------------- |
| playerid | 点击帮派区域的玩家ID |
| zoneid   | 被点击的帮派区域ID   |

## 返回值

此回调不处理返回值。

此回调在游戏模式中总是优先触发。

## 示例

```c
public OnPlayerClickGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "你点击了帮派区域 %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## 相关函数

以下函数可能与当前回调相关：

- [GangZoneCreate](../functions/GangZoneCreate)：创建帮派区域（彩色雷达区域）
- [GangZoneDestroy](../functions/GangZoneDestroy)：销毁帮派区域
