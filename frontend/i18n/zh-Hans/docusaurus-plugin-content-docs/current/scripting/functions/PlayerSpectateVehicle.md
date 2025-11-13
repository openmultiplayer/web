---
title: PlayerSpectateVehicle
sidebar_label: PlayerSpectateVehicle
description: 设置玩家观战指定车辆
tags: ["玩家", "车辆"]
---

## 描述

使玩家进入旁观模式并附着视角到指定车辆，获得类似驾驶位的观察视角

| 参数               | 说明                                                             |
| ------------------ | ---------------------------------------------------------------- |
| playerid           | 观战者玩家 ID                                                    |
| targetvehicleid    | 被观战车辆 ID                                                    |
| SPECTATE_MODE:mode | [旁观模式](../resources/spectatemodes)（可选参数，默认普通模式） |

## 返回值

**true** - 指令执行成功（注意：未启用旁观模式时也会返回成功，但实际无效，必须先调用 TogglePlayerSpectating）

**false** - 执行失败（玩家/车辆不存在或参数无效）

## 示例

```c
TogglePlayerSpectating(playerid, 1);         // 激活旁观模式
PlayerSpectateVehicle(playerid, vehicleid); // 开始观察指定车辆
```

## 注意事项

:::warning

- 调用顺序强制要求：必须先使用 TogglePlayerSpectating 启用观战状态
- 观战者与被观战车辆必须处于相同室内空间和虚拟世界

:::

## 相关函数

- [PlayerSpectatePlayer](PlayerSpectatePlayer): 观战其他玩家
- [TogglePlayerSpectating](TogglePlayerSpectating): 切换观战状态
- [GetPlayerSpectateID](GetPlayerSpectateID): 获取当前观战目标 ID
- [GetPlayerSpectateType](GetPlayerSpectateType): 获取观战实体类型

## 相关资源

- [旁观模式详解](../resources/spectatemodes)
