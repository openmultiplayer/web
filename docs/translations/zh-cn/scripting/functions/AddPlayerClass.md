---
title: AddPlayerClass
description: 向玩家类选择器添加一个类。
tags: ["player"]
---

## 描述

向玩家类选择器添加一个类。类的作用是为了让玩家选择皮肤并重生。

| 参数名        | 说明                          |
| ------------- | ----------------------------- |
| modelid       | 玩家将用来重生的皮肤模型 id。 |
| Float:spawn_x | 该类的重生点的 X 坐标。       |
| Float:spawn_y | 该类的重生点的 Y 坐标。       |
| Float:spawn_z | 该类的重生点的 Z 坐标。       |
| Float:z_angle | 重生后玩家面对的方向。        |
| weapon1       | 玩家的第一个重生武器。        |
| weapon1_ammo  | 第一个重生武器的弹药量。      |
| weapon2       | 玩家的第二个重生武器。        |
| weapon2_ammo  | 第二个重生武器的弹药量。      |
| weapon3       | 玩家的第三个重生武器。        |
| weapon3_ammo  | 第三个重生武器的弹药量。      |

## 返回值

刚添加的类的 ID。

如果达到类的最大数量限制(320)，则为 319(最大的类 ID 是 319)。

## 案例

```c
public OnGameModeInit()
{
    // 玩家可以选择 CJ (0) 或 The Truth (1) 的皮肤.
    AddPlayerClass(0, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0); // CJ
    AddPlayerClass(1, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0); // The Truth
    return 1;
}
```

## 要点

:::tip

最大类 ID 为 319(从 0 开始，共 320 个类)。上限之后添加的任何类都将替换 ID 319。

:::

## 相关函数

- [AddPlayerClassEx](AddPlayerClassEx): 添加具有默认团队的玩家类。
- [SetSpawnInfo](SetSpawnInfo): 设置玩家的重生信息。
- [SetPlayerSkin](SetPlayerSkin): 设置玩家的皮肤。
