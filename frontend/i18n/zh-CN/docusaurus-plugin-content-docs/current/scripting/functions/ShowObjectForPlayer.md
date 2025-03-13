---
title: ShowObjectForPlayer
sidebar_label: ShowObjectForPlayer
description: 向玩家显示一个被隐藏的物体。
tags: ["玩家", "物体"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

向玩家显示一个通过 [HideObjectForPlayer](HideObjectForPlayer) 函数隐藏的物体。

## 参数

| 名称     | 说明                    |
| -------- | ----------------------- |
| playerid | 玩家的 ID。             |
| objectid | 要显示给玩家的物体 ID。 |

## 返回值

`true` - 函数执行成功。

`false` - 函数执行失败。指定的 playerid 或 objectid 不存在。

## 示例

```c
new gObject;

public OnGameModeInit()
{
    gObject = CreateObject(1431, 921.12201, -1206.78613, 16.52670,   0.00000, 0.00000, 90.00000);
    return 1;
}

public OnPlayerConnect(playerid)
{
    HideObjectForPlayer(playerid, gObject);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    ShowObjectForPlayer(playerid, gObject);
    return 1;
}
```

## 相关函数

- [HideObjectForPlayer](HideObjectForPlayer): 对玩家隐藏物体
- [IsObjectHiddenForPlayer](IsObjectHiddenForPlayer): 检查物体是否对玩家隐藏
- [CreateObject](CreateObject): 创建物体
