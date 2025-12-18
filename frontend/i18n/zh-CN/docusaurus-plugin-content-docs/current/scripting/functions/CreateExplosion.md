---
title: CreateExplosion
sidebar_label: CreateExplosion
description: 在指定坐标位置创建爆炸效果。
tags: []
---

## 描述

在三维空间指定坐标生成爆炸特效。

| 参数         | 说明                                       |
| ------------ | ------------------------------------------ |
| Float:x      | 爆炸效果的 X 轴坐标                        |
| Float:y      | 爆炸效果的 Y 轴坐标                        |
| Float:z      | 爆炸效果的 Z 轴坐标                        |
| type         | 爆炸[类型编号](../resources/explosionlist) |
| Float:radius | 爆炸影响半径（单位：游戏单位）             |

## 返回值

此函数始终返回 1，即使爆炸类型或半径参数值无效。

## 应用示例

```c
public OnPlayerEnterCheckpoint(playerid)
{
    // 获取玩家当前位置坐标
    new Float:x, Float:y, Float:z;
    GetPlayerPos(playerid, x, y, z);

    // 在玩家位置创建中型爆炸
    CreateExplosion(x, y, z, 12, 10.0);

    return 1;
}
```

## 注意事项

:::tip

单个玩家同时可见的爆炸效果存在数量限制（约 10 个）

:::

## 关联函数

- [CreateExplosionForPlayer](CreateExplosionForPlayer): 为指定玩家单独创建爆炸效果

## 扩展阅读

- [爆炸类型列表](../resources/explosionlist): 所有可用爆炸效果类型对照表
