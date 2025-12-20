---
title: PlayerSpectatePlayer
sidebar_label: PlayerSpectatePlayer
description: 使玩家观战其他玩家
tags: ["玩家"]
---

## 描述

此函数用于使指定玩家进入旁观模式并观察另一玩家

| 参数               | 说明                                                           |
| ------------------ | -------------------------------------------------------------- |
| playerid           | 观战者玩家 ID                                                  |
| targetplayerid     | 被观战目标玩家 ID                                              |
| SPECTATE_MODE:mode | [旁观模式](../resources/spectatemodes)（可选，默认为普通模式） |

## 返回值

**true** - 函数执行成功

**false** - 执行失败（目标玩家不存在或参数无效）

## 示例

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    TogglePlayerSpectating(playerid, 1); // 启用旁观模式
    PlayerSpectatePlayer(playerid, killerid); // 观察击杀者视角
    return 1;
}
```

## 注意事项

:::warning

- 调用顺序至关重要！必须先使用 TogglePlayerSpectating 启用旁观模式
- 观战者与被观战者必须处于相同虚拟世界和室内环境

:::

## 相关函数

- [PlayerSpectateVehicle](PlayerSpectateVehicle): 观战车辆
- [TogglePlayerSpectating](TogglePlayerSpectating): 切换观战状态
- [GetPlayerSpectateID](GetPlayerSpectateID): 获取当前观战目标 ID
- [GetPlayerSpectateType](GetPlayerSpectateType): 获取观战类型

## 相关资源

- [旁观模式说明](../resources/spectatemodes)
