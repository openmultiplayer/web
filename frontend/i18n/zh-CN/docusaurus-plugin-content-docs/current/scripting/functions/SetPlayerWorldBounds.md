---
title: SetPlayerWorldBounds
sidebar_label: SetPlayerWorldBounds
description: 设置玩家的世界边界。
tags: ["玩家"]
---

## 描述

设置玩家的世界边界。玩家无法越出边界（越界时将被推回）。

| 参数       | 说明                    |
| ---------- | ----------------------- |
| playerid   | 要设置边界的玩家 ID     |
| Float:maxX | 玩家可到达的最大 X 坐标 |
| Float:minX | 玩家可到达的最小 X 坐标 |
| Float:maxY | 玩家可到达的最大 Y 坐标 |
| Float:minY | 玩家可到达的最小 Y 坐标 |

## 返回值

此函数不返回特定值。

## 示例

```c
public OnPlayerSpawn(playerid)
{
    SetPlayerWorldBounds(playerid, 20.0, 0.0, 20.0, 0.0);
    return 1;
}
```

```
               (北)
                ymax
            |----------|
            |          |
(西) xmin |          | xmax (东)
            |          |
            |----------|
                ymin
               (南)
```

## 注意

:::tip

可通过设置边界为 20000.0000, -20000.0000, 20000.0000, -20000.0000 来重置默认值，或使用 [ClearPlayerWorldBounds](ClearPlayerWorldBounds)。

:::

:::warning

此函数在室内环境中无效！

:::

## 相关函数

- [ClearPlayerWorldBounds](ClearPlayerWorldBounds): 重置玩家的世界边界至默认值
- [GetPlayerWorldBounds](GetPlayerWorldBounds): 获取玩家的世界边界
- [GangZoneCreate](GangZoneCreate): 创建帮派区域
