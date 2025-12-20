---
title: Set3DTextLabelDrawDistance
sidebar_label: Set3DTextLabelDrawDistance
description: 设置3D文本标签的可视距离
tags: ["3d文本标签"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

设置 3D 文本标签的可视渲染距离。

| 参数               | 说明                                               |
| ------------------ | -------------------------------------------------- |
| Text3D:textid      | 要设置的可视距离的 3D 文本标签 ID                  |
| Float:drawDistance | 能够看到该 3D 文本标签的最远距离（单位：游戏单位） |

## 返回值

此函数始终返回 true。

## 示例

```c
new Text3D:gMyLabel;

gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 10.0, 0, false);

Set3DTextLabelDrawDistance(gMyLabel, 20.0);
// 可视距离从10.0调整为20.0
```

## 相关函数

- [Get3DTextLabelDrawDistance](Get3DTextLabelDrawDistance): 获取 3D 文本标签的可视距离
- [SetPlayer3DTextLabelDrawDistance](SetPlayer3DTextLabelDrawDistance): 设置玩家视角下的 3D 文本标签可视距离
