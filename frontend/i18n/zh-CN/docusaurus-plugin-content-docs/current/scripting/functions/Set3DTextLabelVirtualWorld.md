---
title: Set3DTextLabelVirtualWorld
sidebar_label: Set3DTextLabelVirtualWorld
description: 设置3D文本标签的虚拟世界ID。
tags: ["3D文本标签"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

设置 3D 文本标签的虚拟世界 ID。

| 参数          | 说明                                |
| ------------- | ----------------------------------- |
| Text3D:textid | 要设置虚拟世界 ID 的 3D 文本标签 ID |
| virtualWorld  | 可以看见该 3D 文本的虚拟世界 ID     |

## 示例代码

```c
new Text3D:gMyLabel;

gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 10.0, 20, false);

Set3DTextLabelVirtualWorld(gMyLabel, 60);
// 虚拟世界ID从'20'更改为'60'
```

## 相关函数

- [Get3DTextLabelVirtualWorld](Get3DTextLabelVirtualWorld): 获取 3D 文本标签的虚拟世界 ID
- [SetPlayer3DTextLabelVirtualWorld](SetPlayer3DTextLabelVirtualWorld): 设置玩家 3D 文本标签的虚拟世界 ID
