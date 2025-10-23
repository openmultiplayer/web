---
title: SetPlayerObjectMaterialText
sidebar_label: SetPlayerObjectMaterialText
description: 将玩家物体的材质替换为文本。
tags: ["玩家", "物体", "玩家物体"]
---

## 描述

将玩家物体的材质替换为文本。

| 参数名                                   | 说明                                                           |
| ---------------------------------------- | -------------------------------------------------------------- |
| playerid                                 | 目标玩家 ID                                                    |
| objectid                                 | 要设置文本的物体 ID                                            |
| text[]                                   | 要显示的文本内容                                               |
| materialIndex                            | 材质索引（默认：0）                                            |
| OBJECT_MATERIAL_SIZE:materialSize        | 材质[尺寸](../resources/materialtextsizes)（默认：256x128）    |
| const fontFace[]                         | 字体名称（默认：Arial）                                        |
| fontSize                                 | 字体大小（默认：24）（最大值 255）                             |
| bool:bold                                | 粗体显示（1 启用/0 禁用，默认：1）                             |
| fontColour                               | 字体颜色（默认：白色）                                         |
| backgroundColour                         | 背景颜色（默认：透明）                                         |
| OBJECT_MATERIAL_TEXT_ALIGN:textAlignment | 文本[对齐方式](../resources/materialtextsizes)（默认：左对齐） |
| OPEN_MP_TAGS:...                         | 不定数量的任意标签参数                                         |

## 返回值

本函数没有返回值。

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp("/text", cmdtext, true) == 0)
    {
        new myObject = CreatePlayerObject(playerid, 19353, 0.0, 0.0, 10.0, 0.0, 0.0, 90.0); // 创建物体
        SetPlayerObjectMaterialText(playerid, myObject, "SA-MP {FFFFFF}0.{008500}3.{FF8200}DL", 0, OBJECT_MATERIAL_SIZE_256x128, "Arial", 28, 0, 0xFFFF8200, 0xFF000000, OBJECT_MATERIAL_TEXT_ALIGN_CENTER);
        // 在物体上显示"SA-MP 0.3.DL"，橙色字体配黑色背景
        return 1;
    }
    return 1;
}
```

## 注意事项

:::tip

可使用颜色嵌入语法实现多色文本效果

:::

## 相关函数

- [SetObjectMaterialText](SetObjectMaterialText): 替换全局物体的材质文本
- [SetPlayerObjectMaterial](SetPlayerObjectMaterial): 替换玩家物体的游戏内材质

## 高级地图编辑器

- [Texture Studio](https://github.com/Pottus/Texture-Studio) 作者：Pottus
- [Ultimate Creator](https://github.com/NexiusTailer/Ultimate-Creator) 作者：Nexius
- [Fusez's Map Editor](https://github.com/fusez/Map-Editor-V3) 作者：RedFusion
