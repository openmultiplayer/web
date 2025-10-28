---
title: TogglePlayerSpectating
sidebar_label: TogglePlayerSpectating
description: 切换玩家观察者模式状态
tags: ["玩家"]
---

## 描述

切换玩家是否处于观察者模式。在该模式下可观察其他玩家或车辆，使用后需配合[PlayerSpectatePlayer](PlayerSpectatePlayer)或[PlayerSpectateVehicle](PlayerSpectateVehicle)实现观察功能。

| 参数        | 说明                            |
| ----------- | ------------------------------- |
| playerid    | 需要设置观察模式的玩家 ID       |
| bool:toggle | 'true'启用观察模式，'false'禁用 |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（玩家不存在）

## 示例

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    TogglePlayerSpectating(playerid, true); // 开启观察模式
    PlayerSpectatePlayer(playerid, killerid); // 观察击杀者视角
    return 1;
}
```

## 注意事项

:::tip

禁用观察模式时会自动触发 OnPlayerSpawn 回调。若需恢复玩家原始状态，需在 OnPlayerSpawn 中处理。注意玩家可能通过 F4 进入选角界面，且观察模式中可能因漏洞导致死亡。

:::

:::tip

观察模式下会隐藏 HUD 界面，适合需要纯净视角控制的场景。玩家视角附近的物体会自动流加载，适用于视角插值功能。

:::

:::warning

如果玩家在关闭观察模式前未加载完毕，连接可能会意外关闭。

:::

## 相关函数

- [PlayerSpectatePlayer](PlayerSpectatePlayer): 观察指定玩家
- [PlayerSpectateVehicle](PlayerSpectateVehicle): 观察指定车辆
