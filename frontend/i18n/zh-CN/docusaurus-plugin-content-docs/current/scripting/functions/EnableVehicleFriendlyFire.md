---
title: EnableVehicleFriendlyFire
sidebar_label: EnableVehicleFriendlyFire
description: 启用队伍车辆的友军伤害机制。
tags: ["车辆"]
---

## 描述

启用队伍车辆的友军伤害机制。玩家将能够攻击同队成员的车辆（必须使用 [SetPlayerTeam](SetPlayerTeam) 设置队伍）。

## 返回值

此函数不返回特定值。

## 示例

```c
public OnGameModeInit()
{
    EnableVehicleFriendlyFire(); // 启用友军伤害
    return 1;
}
```

## 相关函数

- [SetPlayerTeam](SetPlayerTeam): 设置玩家队伍
