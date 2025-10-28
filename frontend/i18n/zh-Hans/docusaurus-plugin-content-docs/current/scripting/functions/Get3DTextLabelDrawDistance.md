---
title: Get3DTextLabelDrawDistance
sidebar_label: Get3DTextLabelDrawDistance
description: 获取3D文本标签的可见绘制距离
tags: ["3D文本标签"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取 3D 文本标签的可见绘制距离。

| 参数          | 说明                            |
| ------------- | ------------------------------- |
| Text3D:textid | 要获取绘制距离的 3D 文本标签 ID |

## 返回值

以浮点数形式返回 3D 文本标签的可见范围（单位：游戏单位）

## 示例

```c
new Text3D:gMyLabel;
new Float:drawDistance;

gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 10.0, 0, false);

drawDistance = Get3DTextLabelDrawDistance(gMyLabel);
// drawDistance = 10.0
```

## 相关函数

- [Set3DTextLabelDrawDistance](Set3DTextLabelDrawDistance): 设置 3D 文本标签绘制距离
- [GetPlayer3DTextLabelDrawDistance](GetPlayer3DTextLabelDrawDistance): 获取玩家专属 3D 文本标签绘制距离
