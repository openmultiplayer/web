---
title: SetPlayerAttachedObject
sidebar_label: SetPlayerAttachedObject
description: 将物体附加到玩家指定骨骼上。
tags: ["玩家", "物体", "附加物"]
---

## 描述

将物体附加到玩家指定骨骼上。

| 参数名          | 说明                                              |
| --------------- | ------------------------------------------------- |
| playerid        | 目标玩家 ID                                       |
| index           | 附加槽位索引（0-9）                               |
| modelid         | 要附加的物体模型 ID                               |
| bone            | 目标[骨骼 ID](../resources/boneid)                |
| Float:offsetX   | (可选) X 轴位置偏移量                             |
| Float:offsetY   | (可选) Y 轴位置偏移量                             |
| Float:offsetZ   | (可选) Z 轴位置偏移量                             |
| Float:rotationX | (可选) X 轴旋转角度                               |
| Float:rotationY | (可选) Y 轴旋转角度                               |
| Float:rotationZ | (可选) Z 轴旋转角度                               |
| Float:scaleX    | (可选) X 轴缩放比例                               |
| Float:scaleY    | (可选) Y 轴缩放比例                               |
| Float:scaleZ    | (可选) Z 轴缩放比例                               |
| materialColour1 | (可选) 第一材质颜色（整数或 ARGB 十六进制颜色值） |
| materialColour2 | (可选) 第二材质颜色（整数或 ARGB 十六进制颜色值） |

## 返回值

成功返回 **1**，失败返回 **0**。

## 示例代码

```c
public OnPlayerSpawn(playerid)
{
    SetPlayerAttachedObject(playerid, 3, 1609, 2); // 在槽位3附加乌龟到玩家头部

    // 带颜色参数的附加示例：
    SetPlayerAttachedObject(playerid, 3, 19487, 2, 0.101, -0.0, 0.0, 5.50, 84.60, 83.7, 1.0, 1.0, 1.0, 0xFF00FF00);
    // 给玩家附加白色帽子并染成绿色
    return 1;
}
```

## 注意事项

:::tip

本函数与 CreateObject/CreatePlayerObject 物体池相互独立

:::

:::warning

单个玩家最多附加 10 个物体（槽位 0-9）

:::

## 相关函数

- [RemovePlayerAttachedObject](RemovePlayerAttachedObject): 移除玩家附加物体
- [IsPlayerAttachedObjectSlotUsed](IsPlayerAttachedObjectSlotUsed): 检测指定槽位是否被占用
- [GetPlayerAttachedObject](GetPlayerAttachedObject): 获取指定槽位的附加物体数据
- [EditAttachedObject](EditAttachedObject): 编辑已附加物体

## 相关资源

- [骨骼 ID 列表](../resources/boneid)
