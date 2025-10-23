---
title: GetPlayerObjectModel
sidebar_label: GetPlayerObjectModel
description: 获取玩家物体的模型ID
tags: ["玩家", "物体", "玩家物体"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

获取玩家物体的模型 ID

| 参数名   | 说明                          |
| -------- | ----------------------------- |
| playerid | 需要查询的玩家 ID             |
| objectid | 需要获取模型 ID 的玩家物体 ID |

## 返回值

玩家物体的模型 ID

若玩家或物体不存在，返回**-1**或**0**

## 示例代码

```c
public OnPlayerConnect(playerid)
{
    new objectid = CreatePlayerObject(playerid, 19609, 666.57239, 1750.79749, 4.95627,   0.00000, 0.00000, -156.00000);

    new modelid = GetPlayerObjectModel(playerid, objectid);
    printf("物体模型ID: %d", modelid); // 输出: "物体模型ID: 19609"
    return 1;
}
```

## 相关函数

- [GetObjectModel](GetObjectModel): 获取全局物体的模型 ID
