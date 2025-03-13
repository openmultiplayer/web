---
title: RemoveBuildingForPlayer
sidebar_label: RemoveBuildingForPlayer
description: 为单个玩家在指定范围内移除圣安地列斯的标准模型。
tags: ["玩家"]
---

## 描述

为单个玩家在指定范围内移除圣安地列斯的标准模型。

| 参数名        | 说明                                           |
| ------------- | ---------------------------------------------- |
| playerid      | 需要移除物体的玩家 ID                          |
| modelid       | 要移除的模型 ID                                |
| Float:centerX | 移除物体范围的 X 轴中心坐标                    |
| Float:centerY | 移除物体范围的 Y 轴中心坐标                    |
| Float:centerZ | 移除物体范围的 Z 轴中心坐标                    |
| Float:radius  | 以指定坐标为中心，移除该模型物体的球形半径范围 |

## 返回值

该函数不返回任何特定值。

## 示例

```c
public OnPlayerConnect(playerid)
{
    // 当玩家连接时，在圣安地列斯中心坐标(0.0, 0.0, 0.0)200.0半径范围内移除615号模型物体
    RemoveBuildingForPlayer(playerid, 615, 0.0, 0.0, 0.0, 200.0);
    return 1;
}

public OnPlayerConnect(playerid)
{
    // 当玩家连接时，移除6000.0半径范围内的所有地图物体
    RemoveBuildingForPlayer(playerid, -1, 0.0, 0.0, 0.0, 6000.0);
    return 1;
}
```

## 注意要点

:::tip

可以使用 **-1** 作为 modelid 参数来移除指定半径内的所有物体。

:::

:::warning

- 存在约 1000 个物体/行的移除限制，目前没有解决方案
- 重复为玩家移除相同物体会导致崩溃。常见于玩家重连服务器时，服务器在 OnPlayerConnect 回调中执行建筑移除的情况

:::

## 相关函数

- [GetPlayerBuildingsRemoved](GetPlayerBuildingsRemoved): 获取玩家已移除的建筑数量
- [DestroyObject](DestroyObject): 销毁一个全局物体
- [DestroyPlayerObject](DestroyPlayerObject): 销毁玩家专属物体
