---
title: AddStaticPickup
description: 该函数用于给游戏添加一个“静态”拾取器。
tags: []
---

## 描述

该函数用于给游戏添加一个“静态”拾取器。拾取器支持武器、生命值、护甲等，无需编写脚本即可生效(武器/生命值/护甲将自动提供)。

| 参数名                           | 说明                                                      |
| -------------------------------- | --------------------------------------------------------- |
| [model](../resources/pickupids)  | 拾取器的模型。                                            |
| [type](../resources/pickuptypes) | 拾取器的类型。决定了拾取器在被拾起时如何响应。            |
| Float:X                          | 在哪个 X 轴坐标创建。                                     |
| Float:Y                          | 在哪个 Y 轴坐标创建。                                     |
| Float:Z                          | 在哪个 Z 轴坐标创建。                                     |
| virtualworld                     | 要显示拾取器的虚拟世界 ID。使用 -1 表示在所有世界中显示。 |

## 返回值

如果创建成功，则为 1。

如果创建失败，则为 0。

## 案例

```c
public OnGameModeInit()
{
    // 创建一个护甲拾取器
    AddStaticPickup(1242, 2, 1503.3359, 1432.3585, 10.1191, 0);

    // 创建一个生命值拾取器，就在护甲边上
    AddStaticPickup(1240, 2, 1506.3359, 1432.3585, 10.1191, 0);

    return 1;
}
```

## 要点

:::tip

该函数不返回您可以在 OnPlayerPickUpPickup 中使用的拾取 ID。
如果您想分配 ID，请使用 CreatePickup。

:::

## 相关函数

- [CreatePickup](CreatePickup): 创建一个拾取器。
- [DestroyPickup](DestroyPickup): 销毁一个拾取器。
- [OnPlayerPickUpPickup](../callbacks/OnPlayerPickUpPickup): 当某个玩家拾起一个拾取器时调用。
