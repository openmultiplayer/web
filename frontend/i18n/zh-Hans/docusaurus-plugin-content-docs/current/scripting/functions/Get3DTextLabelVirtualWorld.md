---
title: Get3DTextLabelVirtualWorld
sidebar_label: Get3DTextLabelVirtualWorld
description: 获取3D文本标签的虚拟世界ID
tags: ["3D文本标签"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取 3D 文本标签所属的虚拟世界 ID。

| 参数          | 说明                                |
| ------------- | ----------------------------------- |
| Text3D:textid | 要获取虚拟世界 ID 的 3D 文本标签 ID |

## 返回值

返回 3D 文本标签所在的虚拟世界 ID 数值

## 示例

```c
new Text3D:gMyLabel;
new worldid;

gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 10.0, 20, false);

worldid = Get3DTextLabelVirtualWorld(gMyLabel);
// worldid = 20
```

## 相关函数

- [Set3DTextLabelVirtualWorld](Set3DTextLabelVirtualWorld): 设置 3D 文本标签的虚拟世界 ID
- [GetPlayer3DTextLabelVirtualWorld](GetPlayer3DTextLabelVirtualWorld): 获取玩家专属 3D 文本标签的虚拟世界 ID
