---
title: Set3DTextLabelLOS
sidebar_label: Set3DTextLabelLOS
description: 设置3D文本标签视线检测功能
tags: ["3D文本标签"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

设置 3D 文本标签的视线检测功能，控制标签是否会被物体遮挡

| 参数          | 说明                                                       |
| ------------- | ---------------------------------------------------------- |
| Text3D:textid | 需要设置视线检测的 3D 文本标签 ID                          |
| bool:enable   | 启用状态（false=禁用/true=启用）控制标签是否可穿透物体显示 |

## 示例代码

```c
new Text3D:gMyLabel;

gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, true);

Set3DTextLabelLOS(gMyLabel, false);
// 视线检测功能从启用状态切换为禁用状态
```

## 相关函数

- [Get3DTextLabelLOS](Get3DTextLabelLOS): 获取 3D 文本标签当前视线检测状态
- [SetPlayer3DTextLabelLOS](SetPlayer3DTextLabelLOS): 设置玩家专属 3D 文本标签的视线检测
