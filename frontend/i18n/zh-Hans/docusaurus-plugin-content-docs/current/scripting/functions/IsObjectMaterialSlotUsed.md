---
title: IsObjectMaterialSlotUsed
sidebar_label: IsObjectMaterialSlotUsed
description: 检查物体材质槽位是否被使用
tags: ["物体"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测物体指定材质槽位的使用类型。

| 参数          | 说明                 |
| ------------- | -------------------- |
| objectid      | 物体 ID              |
| materialIndex | 材质槽位索引（0-15） |

## 返回值

返回材质槽位使用类型：

`0` - 未使用
`1` - 材质贴图
`2` - 文本贴图

## 示例

```c
// 创建物体并设置标准材质
new objectid = CreateObject(19371, 978.71143, -925.25708, 42.63720, 0.0, 0.0, 2.0);
SetObjectMaterial(objectid, 0, 19341, "egg_texts", "easter_egg01", 0xFFFFFFFF);

new type = IsObjectMaterialSlotUsed(objectid, 0); // 返回1
```

```c
// 创建物体并设置文本材质
new objectid = CreateObject(19174, 986.42767, -983.14850, 40.95220, 0.0, 0.0, 186.0);
SetObjectMaterialText(objectid, "OPEN.MP", 0, OBJECT_MATERIAL_SIZE_256x128, "Arial", 38, true, 0xFF0000FF, 0x00000000, OBJECT_MATERIAL_TEXT_ALIGN_LEFT);

new type = IsObjectMaterialSlotUsed(objectid, 0); // 返回2
```

## 相关函数

- [SetObjectMaterial](SetObjectMaterial): 为物体设置游戏内建材质
- [SetObjectMaterialText](SetObjectMaterialText): 为物体设置文本材质
- [GetObjectMaterial](GetObjectMaterial): 获取物体材质数据
- [GetObjectMaterialText](GetObjectMaterialText): 获取物体文本材质数据
- [IsPlayerObjectMaterialSlotUsed](IsPlayerObjectMaterialSlotUsed): 检查玩家物体材质槽位使用状态
