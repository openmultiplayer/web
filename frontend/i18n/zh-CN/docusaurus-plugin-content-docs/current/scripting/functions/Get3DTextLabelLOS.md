---
title: Get3DTextLabelLOS
sidebar_label: Get3DTextLabelLOS
description: 获取3D文本标签的视线检测设置
tags: ["3D文本标签"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取 3D 文本标签的视线检测设置（是否在物体遮挡时隐藏）。

| 参数名        | 说明                                |
| ------------- | ----------------------------------- |
| Text3D:textid | 要获取视线检测设置的 3D 文本标签 ID |

## 返回值

返回布尔值表示视线检测状态（`false`=禁用/`true`=启用）

## 示例

```c
new Text3D:gMyLabel;
new bool:testLOS;

gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 10.0, 0, true);

testLOS = Get3DTextLabelLOS(gMyLabel);
// testLOS = true
```

## 相关函数

- [Set3DTextLabelLOS](Set3DTextLabelLOS): 设置 3D 文本标签的视线检测
- [GetPlayer3DTextLabelLOS](GetPlayer3DTextLabelLOS): 获取玩家专属 3D 文本标签的视线检测设置
