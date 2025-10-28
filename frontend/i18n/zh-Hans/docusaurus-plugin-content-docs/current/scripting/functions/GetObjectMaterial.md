---
title: GetObjectMaterial
sidebar_label: GetObjectMaterial
description: 从物体的材质索引获取材质数据
tags: ["物体"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

从物体的材质索引获取材质数据。

| 参数               | 说明                               |
| ------------------ | ---------------------------------- |
| objectid           | 物体 ID                            |
| materialIndex      | 物体的材质索引 (0 至 15)           |
| &modelid           | 存储模型 ID 的变量，通过引用传递   |
| textureLibrary[]   | 存储纹理库名称的数组，通过引用传递 |
| textureLibrarySize | 纹理库数组的尺寸                   |
| textureName[]      | 存储纹理名称的数组，通过引用传递   |
| textureNameSize    | 纹理名称数组的尺寸                 |
| &materialColour    | 存储材质颜色的变量，通过引用传递   |

## 返回值

`true` - 函数执行成功

`false` - 函数执行失败（指定物体不存在或使用无效的材质索引）

## 示例代码

```c
new objectid = CreateObject(19371, 978.71143, -925.25708, 42.63720,   0.00000, 0.00000, 2.00000);
SetObjectMaterial(objectid, 0, 19341, "egg_texts", "easter_egg01", 0xFFFFFFFF);

new
    modelid,
    textureLibrary[16],
    textureName[16],
    materialColour;

GetObjectMaterial(objectid, 0, modelid, textureLibrary, sizeof(textureLibrary), textureName, sizeof(textureName), materialColour);
// modelid = 19341
// textureLibrary = "egg_texts"
// textureName = "easter_egg01"
// materialColour = 0xFFFFFFFF
```

## 相关函数

- [SetObjectMaterial](SetObjectMaterial): 用游戏中其他模型的纹理替换物体的材质
- [SetObjectMaterialText](SetObjectMaterialText): 使用文本替换物体的材质纹理
- [IsObjectMaterialSlotUsed](IsObjectMaterialSlotUsed): 检查物体材质槽位是否被使用
- [GetObjectMaterialText](GetObjectMaterialText): 从物体的材质索引获取文本材质数据
- [GetPlayerObjectMaterial](GetPlayerObjectMaterial): 从玩家物体的材质索引获取材质数据
