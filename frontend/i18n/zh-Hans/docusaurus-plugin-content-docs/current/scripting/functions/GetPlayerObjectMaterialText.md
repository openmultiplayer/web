---
title: GetPlayerObjectMaterialText
sidebar_label: GetPlayerObjectMaterialText
description: 获取玩家物体指定索引的材质文本数据
tags: ["玩家", "物体", "玩家物体"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家物体指定索引的材质文本数据

| 参数名                                    | 说明                                   |
| ----------------------------------------- | -------------------------------------- |
| playerid                                  | 玩家 ID                                |
| objectid                                  | 玩家物体 ID                            |
| materialIndex                             | 材质索引号（0-15）                     |
| text[]                                    | 存储文本内容的数组（通过引用传递）     |
| textSize                                  | 文本数组的缓冲区大小                   |
| &OBJECT_MATERIAL_SIZE:materialSize        | 存储材质尺寸枚举的变量（通过引用传递） |
| fontFace[]                                | 存储字体名称的数组（通过引用传递）     |
| fontFaceSize                              | 字体名称数组的缓冲区大小               |
| &fontSize                                 | 存储字体大小的变量（通过引用传递）     |
| &bool:bold                                | 存储粗体状态的布尔变量（通过引用传递） |
| &fontColour                               | 存储字体颜色的变量（通过引用传递）     |
| &backgroundColour                         | 存储背景颜色的变量（通过引用传递）     |
| &OBJECT_MATERIAL_TEXT_ALIGN:textAlignment | 存储文本对齐方式的变量（通过引用传递） |

## 返回值

`true` - 函数执行成功

`false` - 函数执行失败（指定物体不存在或材质索引无效）

## 示例代码

```c
new playerobjectid = CreatePlayerObject(playerid, 19174, 986.42767, -983.14850, 40.95220,   0.00000, 0.00000, 186.00000);
SetPlayerObjectMaterialText(playerid, playerobjectid, "OPEN.MP", 0, OBJECT_MATERIAL_SIZE_256x128, "Arial", 38, true, 0xFF0000FF, 0x00000000, OBJECT_MATERIAL_TEXT_ALIGN_LEFT);

new
    text[16],
    OBJECT_MATERIAL_SIZE:materialSize,
    fontFace[16],
    fontSize,
    bool:bold,
    fontColour,
    backgroundColour,
    OBJECT_MATERIAL_TEXT_ALIGN:textAlignment;

GetPlayerObjectMaterialText(playerid, playerobjectid, 0, text, sizeof(text), materialSize, fontFace, sizeof(fontFace), fontSize, bold, fontColour, backgroundColour, textAlignment);
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

- [SetPlayerObjectMaterial](SetPlayerObjectMaterial): 替换玩家物体的材质纹理
- [SetPlayerObjectMaterialText](SetPlayerObjectMaterialText): 为玩家物体设置材质文本
- [IsPlayerObjectMaterialSlotUsed](IsPlayerObjectMaterialSlotUsed): 检查玩家物体材质槽是否被使用
- [GetPlayerObjectMaterial](GetPlayerObjectMaterial): 获取玩家物体的材质数据
- [GetObjectMaterialText](GetObjectMaterialText): 获取全局物体的材质文本数据
