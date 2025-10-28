---
title: GetPlayerAttachedObject
sidebar_label: GetPlayerAttachedObject
description: 通过索引获取玩家附加物体的数据
tags: ["玩家", "物体", "附加"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

通过索引获取玩家附加物体的详细数据。

| 参数             | 说明                     |
| ---------------- | ------------------------ |
| playerid         | 要获取数据的玩家 ID      |
| index            | 物体附加的索引位置 (0-9) |
| &modelid         | 附加物体的模型 ID        |
| &bone            | 附加的骨骼位置           |
| &Float:offsetX   | 物体 X 轴偏移量          |
| &Float:offsetY   | 物体 Y 轴偏移量          |
| &Float:offsetZ   | 物体 Z 轴偏移量          |
| &Float:rotationX | 物体 X 轴旋转角度        |
| &Float:rotationY | 物体 Y 轴旋转角度        |
| &Float:rotationZ | 物体 Z 轴旋转角度        |
| &Float:scaleX    | 物体 X 轴缩放比例        |
| &Float:scaleY    | 物体 Y 轴缩放比例        |
| &Float:scaleZ    | 物体 Z 轴缩放比例        |
| &materialColour1 | 物体材质颜色 1           |
| &materialColour2 | 物体材质颜色 2           |

## 返回值

总是返回 true。

## 示例代码

```c
new
	modelid,
	bone,
	Float:offsetX, Float:offsetY, Float:offsetZ,
	Float:rotationX, Float:rotationY, Float:rotationZ,
	Float:scaleX, Float:scaleY, Float:scaleZ,
	materialColour1, materialColour2;

// 获取索引3的附加物体数据
GetPlayerAttachedObject(playerid, 3, modelid, bone, offsetX, offsetY, offsetZ,
    rotationX, rotationY, rotationZ, scaleX, scaleY, scaleZ,
    materialColour1, materialColour2);
```

## 注意事项

:::tip

- 索引范围为 0-9，对应玩家可附加物体的 10 个插槽
- 偏移量和旋转参数使用浮点数存储，精确到小数点后 4 位
- 材质颜色使用 32 位 ARGB 格式存储 (0xAARRGGBB)
  :::

## 相关函数

- [SetPlayerAttachedObject](SetPlayerAttachedObject): 给玩家附加物体
- [RemovePlayerAttachedObject](RemovePlayerAttachedObject): 移除玩家的附加物体
- [IsPlayerAttachedObjectSlotUsed](IsPlayerAttachedObjectSlotUsed): 检测物体附加插槽是否被占用
- [EditAttachedObject](EditAttachedObject): 编辑已附加的物体
