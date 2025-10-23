---
title: CreateExplosionForPlayer
sidebar_label: CreateExplosionForPlayer
description: 为指定玩家创建仅其可见的爆炸效果。
tags: ["玩家"]
---

## 描述

创建仅对特定玩家可见的爆炸特效。适用于隔离爆炸效果或指定虚拟世界显示。

| 参数名       | 说明                                       |
| ------------ | ------------------------------------------ |
| playerid     | 目标玩家 ID                                |
| Float:x      | 爆炸 X 轴坐标                              |
| Float:y      | 爆炸 Y 轴坐标                              |
| Float:z      | 爆炸 Z 轴坐标                              |
| type         | 爆炸[类型编号](../resources/explosionlist) |
| Float:radius | 爆炸影响半径（单位：游戏单位）             |

## 返回值

始终返回 1（即使玩家不存在/参数无效时仍返回成功状态）。

## 应用示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/burnme", true) == 0)
    {
        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);
        CreateExplosionForPlayer(playerid, x, y, z, 1, 10.0);
        return 1;
    }
    return 0;
}
```

## 注意事项

:::tip

单个玩家同时可见的爆炸效果存在数量限制（约 10 个）

:::

## 关联函数

- [CreateExplosion](CreateExplosion): 创建全局可见的爆炸效果

## 扩展阅读

- [爆炸类型列表](../resources/explosionlist): 所有可用爆炸效果类型对照表
