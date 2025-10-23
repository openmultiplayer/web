---
title: AddStaticPickup
sidebar_label: AddStaticPickup
description: 在游戏中添加一个静态拾取物
tags: ["拾取物"]
---

## 描述

本函数用于在游戏中添加「静态」拾取物。这类拾取物支持武器、生命值、护甲等类型，无需额外脚本即可自动生效（武器/生命值/护甲会自动给予玩家）。

| 参数名                           | 说明                                         |
| -------------------------------- | -------------------------------------------- |
| [model](../resources/pickupids)  | 拾取物模型 ID                                |
| [type](../resources/pickuptypes) | 拾取物类型，决定被拾取时的响应方式           |
| Float:x                          | 拾取物生成的 X 坐标                          |
| Float:y                          | 拾取物生成的 Y 坐标                          |
| Float:z                          | 拾取物生成的 Z 坐标                          |
| virtualWorld                     | 生效的虚拟世界 ID，使用-1 表示全虚拟世界生效 |

## 返回值

**1** - 创建成功

**0** - 创建失败

## 示例

```c
public OnGameModeInit()
{
    // 创建护甲拾取物
    AddStaticPickup(1242, 2, 1503.3359, 1432.3585, 10.1191, 0);

    // 在护甲旁创建生命值拾取物
    AddStaticPickup(1240, 2, 1506.3359, 1432.3585, 10.1191, 0);

    return 1;
}
```

## 注意事项

:::tip

本函数不会返回可用于 OnPlayerPickUpPickup 等回调的拾取物 ID。若需要分配 ID，请使用[CreatePickup](CreatePickup)函数。

:::

## 相关函数

- [CreatePickup](CreatePickup): 创建可追踪的拾取物
- [DestroyPickup](DestroyPickup): 销毁拾取物

## 相关资源

- [拾取物 ID 列表](../resources/pickupids)
