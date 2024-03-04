---
title: OnEnterExitModShop
description: 当玩家进入或离开改装店时，这个回调函数被调用。
tags: []
---

## 描述

当玩家进入或离开改装店时，这个回调函数被调用。

| 参数名     | 描述                                        |
| ---------- | ------------------------------------------- |
| playerid   | 进入或离开改装店的玩家的 ID                 |
| enterexit  | 1 表示玩家进入，0 表示玩家离开              |
| interiorid | 玩家正在进入改装店的内部空间 ID(离开时为 0) |

## 返回值

它在过滤脚本中总是先被调用。

## 案例

```c
public OnEnterExitModShop(playerid, enterexit, interiorid)
{
    if (enterexit == 0) // 如果enterexit返回为0，则表示它们正在离开
    {
        SendClientMessage(playerid, COLOR_WHITE, "好车！您付了一百美元的税。");
        GivePlayerMoney(playerid, -100);
    }
    return 1;
}
```

## 要点

:::warning

已知的 Bug:玩家进入同一个改装店时会发生碰撞。

:::

## 相关函数

- [AddVehicleComponent](../functions/AddVehicleComponent): 向车辆添加零部件。
