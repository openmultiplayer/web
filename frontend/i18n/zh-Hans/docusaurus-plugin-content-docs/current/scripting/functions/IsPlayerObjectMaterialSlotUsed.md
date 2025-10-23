---
title: IsPlayerObjectMaterialSlotUsed
sidebar_label: IsPlayerObjectMaterialSlotUsed
description: 检测玩家物体材质槽位是否被使用
tags: ["玩家", "物体", "玩家物体"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测指定玩家物体的材质槽位使用状态

| 参数名        | 说明                            |
| ------------- | ------------------------------- |
| playerid      | 目标玩家 ID                     |
| objectid      | 玩家物体 ID                     |
| materialIndex | 材质槽位索引值（有效范围 0-15） |

## 返回值

返回材质槽位使用类型：

`0` - 未使用

`1` - 材质贴图

`2` - 文本贴图

## 示例代码

```c
new playerobjectid = CreatePlayerObject(playerid, 19371, 978.71143, -925.25708, 42.63720, 0.0, 0.0, 2.0);
SetPlayerObjectMaterial(playerid, playerobjectid, 0, 19341, "egg_texts", "easter_egg01", 0xFFFFFFFF);

new type = IsPlayerObjectMaterialSlotUsed(playerid, playerobjectid, 0);
// type值为1
```

另一示例：

```c
new playerobjectid = CreatePlayerObject(playerid, 19174, 986.42767, -983.14850, 40.95220, 0.0, 0.0, 186.0);
SetPlayerObjectMaterialText(playerid, playerobjectid, "OPEN.MP", 0,
    OBJECT_MATERIAL_SIZE_256x128, "Arial", 38, true, 0xFF0000FF, 0x00000000,
    OBJECT_MATERIAL_TEXT_ALIGN_LEFT);

new type = IsPlayerObjectMaterialSlotUsed(playerid, playerobjectid, 0);
// type值为2
```

## 相关函数

- [SetPlayerObjectMaterial](SetPlayerObjectMaterial): 为玩家物体设置游戏内建材质
- [SetPlayerObjectMaterialText](SetPlayerObjectMaterialText): 为玩家物体设置文本材质
- [GetPlayerObjectMaterial](GetPlayerObjectMaterial): 获取玩家物体材质数据
- [GetPlayerObjectMaterialText](GetPlayerObjectMaterialText): 获取玩家物体文本材质数据
- [IsObjectMaterialSlotUsed](IsObjectMaterialSlotUsed): 检测物体材质槽位使用状态
