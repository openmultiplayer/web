---
title: VectorSize
sidebar_label: VectorSize
description: 返回指定向量的范数（长度）。
tags: ["数学"]
---

## 描述

返回指定向量的范数（长度）。

| 名称    | 说明                |
| ------- | ------------------- |
| Float:x | 向量在 X 轴的分量值 |
| Float:y | 向量在 Y 轴的分量值 |
| Float:z | 向量在 Z 轴的分量值 |

## 返回值

以浮点数形式返回指定向量的范数（长度）。

## 示例

```c
stock Float:GetDistanceBetweenPoints(Float:x1, Float:y1, Float:z1, Float:x2, Float:y2, Float:z2)
{
    return VectorSize(x1-x2, y1-y2, z1-z2);
}
```

## 相关函数

- [GetPlayerDistanceFromPoint](GetPlayerDistanceFromPoint): 获取玩家与坐标点之间的距离
- [GetVehicleDistanceFromPoint](GetVehicleDistanceFromPoint): 获取车辆与坐标点之间的距离
- [floatsqroot](floatsqroot): 计算浮点数的平方根
