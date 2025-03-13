---
title: Get3DTextLabelPos
sidebar_label: Get3DTextLabelPos
description: 获取3D文本标签的位置坐标
tags: ["3D文本标签"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取 3D 文本标签的当前位置坐标。

| 参数名        | 说明                                    |
| ------------- | --------------------------------------- |
| Text3D:textid | 要获取位置的 3D 文本标签 ID             |
| &Float:x      | 用于存储 X 坐标的浮点变量（按引用传递） |
| &Float:y      | 用于存储 Y 坐标的浮点变量（按引用传递） |
| &Float:z      | 用于存储 Z 坐标的浮点变量（按引用传递） |

## 示例

```c
new Text3D:gMyLabel;

public OnGameModeInit()
{
    gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 10.0, 0, false);

    new Float:x, Float:y, Float:z;
    Get3DTextLabelPos(gMyLabel, x, y, z);
    // x = 30.0
    // y = 40.0
    // z = 50.0
    return 1;
}
```

## 相关函数

- [GetPlayer3DTextLabelPos](GetPlayer3DTextLabelPos): 获取玩家专属 3D 文本标签的位置坐标
