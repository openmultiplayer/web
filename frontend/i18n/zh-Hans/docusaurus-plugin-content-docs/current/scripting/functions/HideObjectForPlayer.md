---
title: HideObjectForPlayer
sidebar_label: HideObjectForPlayer
description: 对玩家隐藏物体
tags: ["玩家", "物体"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

对指定玩家隐藏物体。

## 参数

| 参数     | 说明              |
| -------- | ----------------- |
| playerid | 玩家 ID           |
| objectid | 需要隐藏的物体 ID |

## 返回值

`true` - 函数执行成功

`false` - 函数执行失败（指定的玩家或物体不存在）

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
```

## 相关函数

- [ShowObjectForPlayer](ShowObjectForPlayer): 对玩家显示物体
- [IsObjectHiddenForPlayer](IsObjectHiddenForPlayer): 检查物体是否对玩家隐藏
- [CreateObject](CreateObject): 创建物体
