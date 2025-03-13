---
title: GetObjectModel
sidebar_label: GetObjectModel
description: 获取物体的模型ID（通过CreateObject创建）
tags: ["物体"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

获取通过 [CreateObject](CreateObject) 创建的物体模型 ID。

| 名称     | 描述                         |
| -------- | ---------------------------- |
| objectid | 需要获取模型 ID 的物体标识符 |

## 返回值

成功返回物体的模型 ID，  
当指定物体不存在时返回 **-1**。

## 示例代码

```c
public OnGameModeInit()
{
    new objectid = CreateObject(19609, 666.57239, 1750.79749, 4.95627,   0.00000, 0.00000, -156.00000);

    new modelid = GetObjectModel(objectid);
    printf("Object model: %d", modelid); // 输出: "Object model: 19609"
    return 1;
}
```

## 相关函数

- [GetPlayerObjectModel](GetPlayerObjectModel): 获取玩家物体的模型 ID
