---
title: GetObjectMaterialText
sidebar_label: GetObjectMaterialText
description: 从物体的材质索引获取文本材质数据
tags: ["物体"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

从物体的材质索引获取文本材质数据。

| 参数                                      | 说明                                 |
| ----------------------------------------- | ------------------------------------ |
| objectid                                  | 物体 ID                              |
| materialIndex                             | 物体的材质索引 (0 至 15)             |
| text[]                                    | 存储文本内容的数组，通过引用传递     |
| textSize                                  | 文本数组的尺寸                       |
| &OBJECT_MATERIAL_SIZE:materialSize        | 存储材质尺寸的变量，通过引用传递     |
| fontFace[]                                | 存储字体名称的数组，通过引用传递     |
| fontFaceSize                              | 字体名称数组的尺寸                   |
| &fontSize                                 | 存储字号的变量，通过引用传递         |
| &bool:bold                                | 存储粗体效果的布尔变量，通过引用传递 |
| &fontColour                               | 存储字体颜色的变量，通过引用传递     |
| &backgroundColour                         | 存储背景颜色的变量，通过引用传递     |
| &OBJECT_MATERIAL_TEXT_ALIGN:textAlignment | 存储文本对齐方式的变量，通过引用传递 |

## 返回值

`true` - 函数执行成功

`false` - 函数执行失败（指定物体不存在或使用无效的材质索引）

## 示例代码

```c
new objectid = CreateObject(19174, 986.42767, -983.14850, 40.95220,   0.00000, 0.00000, 186.00000);
SetObjectMaterialText(objectid, "OPEN.MP", 0, OBJECT_MATERIAL_SIZE_256x128, "Arial", 38, true, 0xFF0000FF, 0x00000000, OBJECT_MATERIAL_TEXT_ALIGN_LEFT);

new
    text[16],
    OBJECT_MATERIAL_SIZE:materialSize,
    fontFace[16],
    fontSize,
    bool:bold,
    fontColour,
    backgroundColour,
    OBJECT_MATERIAL_TEXT_ALIGN:textAlignment;

GetObjectMaterialText(objectid, 0, text, sizeof(text), materialSize, fontFace, sizeof(fontFace), fontSize, bold, fontColour, backgroundColour, textAlignment);
// text = "OPEN.MP"
// materialSize = OBJECT_MATERIAL_SIZE_256x128
// fontFace = "Arial"
// fontSize = 38
// bold = true
// fontColour = 0xFF0000FF
// backgroundColour = 0x00000000
// textAlignment = OBJECT_MATERIAL_TEXT_ALIGN_LEFT
```

## 相关函数

- [SetObjectMaterial](SetObjectMaterial): 用游戏内其他模型的纹理替换物体材质
- [SetObjectMaterialText](SetObjectMaterialText): 使用文本替换物体的材质纹理
- [IsObjectMaterialSlotUsed](IsObjectMaterialSlotUsed): 检查物体材质槽位是否被使用
- [GetObjectMaterial](GetObjectMaterial): 从物体的材质索引获取材质数据
- [GetPlayerObjectMaterialText](GetPlayerObjectMaterialText): 从玩家物体的材质索引获取文本材质数据
