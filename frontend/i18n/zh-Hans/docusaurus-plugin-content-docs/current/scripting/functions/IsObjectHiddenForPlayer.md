---
title: IsObjectHiddenForPlayer
sidebar_label: IsObjectHiddenForPlayer
description: 检查物体是否对指定玩家隐藏
tags: ["玩家", "物体"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检查指定物体是否对玩家处于隐藏状态。

## 参数

| 参数     | 说明              |
| -------- | ----------------- |
| playerid | 玩家 ID           |
| objectid | 需要检查的物体 ID |

## 返回值

`true` - 物体对玩家处于隐藏状态  
`false` - 物体对玩家可见

## 示例

```c
new gObject;

public OnGameModeInit()
{
    // 在坐标921.12, -1206.78, 16.52创建木箱物体
    gObject = CreateObject(1431, 921.12201, -1206.78613, 16.52670, 0.0, 0.0, 90.0);
    return 1;
}

public OnPlayerConnect(playerid)
{
    HideObjectForPlayer(playerid, gObject);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    if (IsObjectHiddenForPlayer(playerid, gObject))
    {
        printf("物体 %d 对玩家 %d 处于隐藏状态", gObject, playerid);
    }
    return 1;
}
```

## 注意事项

:::提示

可通过[HideObjectForPlayer](HideObjectForPlayer)函数为指定玩家隐藏物体

:::

## 相关函数

- [HideObjectForPlayer](HideObjectForPlayer): 对玩家隐藏物体
- [ShowObjectForPlayer](ShowObjectForPlayer): 对玩家显示物体
- [CreateObject](CreateObject): 创建新物体
