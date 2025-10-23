---
title: GetPlayerObjectMaterial
sidebar_label: GetPlayerObjectMaterial
description: 获取玩家物体指定索引的材质数据
tags: ["玩家", "物体", "玩家物体"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家物体指定索引的材质数据

| 参数名             | 说明                                 |
| ------------------ | ------------------------------------ |
| playerid           | 玩家 ID                              |
| objectid           | 玩家物体 ID                          |
| materialIndex      | 材质索引号（0-15）                   |
| &modelid           | 存储模型 ID 的变量（通过引用传递）   |
| textureLibrary[]   | 存储纹理库名称的数组（通过引用传递） |
| textureLibrarySize | 纹理库数组的缓冲区大小               |
| textureName[]      | 存储纹理名称的数组（通过引用传递）   |
| textureNameSize    | 纹理名称数组的缓冲区大小             |
| &materialColour    | 存储材质颜色的变量（通过引用传递）   |

## 返回值

`true` - 函数执行成功

`false` - 函数执行失败（指定物体不存在或材质索引无效）

## 示例代码

```c
new playerobjectid = CreatePlayerObject(playerid, 19371, 978.71143, -925.25708, 42.63720,   0.00000, 0.00000, 2.00000);
SetPlayerObjectMaterial(playerid, playerobjectid, 0, 19341, "egg_texts", "easter_egg01", 0xFFFFFFFF);

new
    modelid,
    textureLibrary[16],
    textureName[16],
    materialColour;

GetPlayerObjectMaterial(playerid, playerobjectid, 0, modelid, textureLibrary, sizeof(textureLibrary), textureName, sizeof(textureName), materialColour);
// modelid = 19341
// textureLibrary = "egg_texts"
// textureName = "easter_egg01"
// materialColour = 0xFFFFFFFF
```

## 相关函数

- [SetPlayerObjectMaterial](SetPlayerObjectMaterial): 替换玩家物体的材质纹理
- [SetPlayerObjectMaterialText](SetPlayerObjectMaterialText): 为玩家物体设置材质文本
- [IsPlayerObjectMaterialSlotUsed](IsPlayerObjectMaterialSlotUsed): 检查玩家物体材质槽是否被使用
- [GetPlayerObjectMaterialText](GetPlayerObjectMaterialText): 获取玩家物体的材质文本数据
- [GetObjectMaterial](GetObjectMaterial): 获取全局物体的材质数据
