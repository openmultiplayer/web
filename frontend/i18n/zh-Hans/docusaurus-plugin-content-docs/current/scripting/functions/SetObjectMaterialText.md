---
title: SetObjectMaterialText
sidebar_label: SetObjectMaterialText
description: 用文本替换物体的材质纹理。
tags: ["物体"]
---

## 描述

用自定义文本替换指定物体的材质纹理。

| 参数名                                   | 描述                                                                            |
| ---------------------------------------- | ------------------------------------------------------------------------------- |
| objectid                                 | 要设置材质文本的物体 ID                                                         |
| const text[]                             | 要显示的文本内容（最大 2048 字符）                                              |
| materialIndex                            | 要替换的材质索引                                                                |
| OBJECT_MATERIAL_SIZE:materialsize        | 材质[尺寸](/docs/scripting/resources/materialtextsizes)                         |
| const fontFace[]                         | 使用的字体名称                                                                  |
| fontSize                                 | 字体大小（最大 255）                                                            |
| bool:bold                                | 是否加粗（true 为加粗，false 为正常）                                           |
| fontColour                               | 文本颜色（ARGB 格式）                                                           |
| backgroundColour                         | 背景颜色（ARGB 格式）                                                           |
| OBJECT_MATERIAL_TEXT_ALIGN:textAlignment | 文本[对齐方式](/docs/scripting/resources/materialtextalignment)（默认：左对齐） |
| OPEN_MP_TAGS:...                         | 可变参数（支持多种标签类型的参数）                                              |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp("/text", cmdtext, true) == 0)
    {
        new objectId = CreateObject(19353, 0, 0, 10, 0.0, 0.0, 90.0); // 创建物体
        SetObjectMaterialText(objectId, "SA-MP {FFFFFF}0.{008500}3.{FF8200}DL", 0, OBJECT_MATERIAL_SIZE_256x128, "Arial", 28, false, 0xFFFF8200, 0xFF000000, OBJECT_MATERIAL_TEXT_ALIGN_CENT);
        // 在物体上显示"SA-MP 0.3.DL"文本，橙色字体黑色背景
        return 1;
    }
    return 0;
}
```

## 注意事项

:::tip

可使用颜色嵌入代码实现文本多色效果

:::

:::warning

必须使用 ARGB 颜色格式（不同于客户端消息使用的 RGBA 格式）
同一物体最多只能应用 16 次材质文本修改
:::

## 相关函数

- [SetPlayerObjectMaterialText](SetPlayerObjectMaterialText): 设置玩家专属物体的材质文本
- [SetObjectMaterial](SetObjectMaterial): 用其他模型纹理替换物体材质

## 进阶地图编辑器

- [Texture Studio](https://github.com/Pottus/Texture-Studio) 作者：Pottus
- [Ultimate Creator](https://github.com/NexiusTailer/Ultimate-Creator) 作者：Nexius
- [Fusez's Map Editor](https://github.com/fusez/Map-Editor-V3) 作者：RedFusion
- [SetObjectMaterialText 编辑器](https://sampforum.blast.hk/showthread.php?tid=614667) 作者：RIDE2DAY

## 相关资源

- [材质文本尺寸](../resources/materialtextsizes)
- [材质文本对齐方式](../resources/materialtextalignment)
