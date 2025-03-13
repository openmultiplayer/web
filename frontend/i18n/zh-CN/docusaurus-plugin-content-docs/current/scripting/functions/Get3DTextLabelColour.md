---
title: Get3DTextLabelColour
sidebar_label: Get3DTextLabelColour
description: 获取3D文本标签颜色
tags: ["3D文本标签"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取 3D 文本标签的颜色值。

| 参数名        | 说明                        |
| ------------- | --------------------------- |
| Text3D:textid | 要获取颜色的 3D 文本标签 ID |

## 返回值

返回 3D 文本标签的 RGBA 颜色值（十六进制格式）。

## 示例

```c
new Text3D:gMyLabel;

gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, false);

new colour = Get3DTextLabelColour(gMyLabel);
// colour = 0x008080FF
```

## 相关函数

- [GetPlayer3DTextLabelColour](GetPlayer3DTextLabelColour): 获取玩家专属 3D 文本标签颜色
