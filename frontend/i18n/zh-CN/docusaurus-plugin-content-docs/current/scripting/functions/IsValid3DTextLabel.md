---
title: IsValid3DTextLabel
sidebar_label: IsValid3DTextLabel
description: 检测3D文本标签是否有效。
tags: ["3D文本标签"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测指定的全局 3D 文本标签是否有效。

| 参数名        | 说明                    |
| ------------- | ----------------------- |
| Text3D:textid | 要检测的 3D 文本标签 ID |

## 返回值

当 3D 文本标签有效时返回 **true**，无效时返回 **false**

## 示例代码

```c
new Text3D:gMyLabel; // 声明全局3D文本标签变量

public OnGameModeInit()
{
    gMyLabel = Create3DTextLabel("当前坐标：\n30.0, 40.0, 50.0", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, false);

    if (IsValid3DTextLabel(gMyLabel))
    {
        // 执行相关逻辑
    }
    return 1;
}
```

## 相关函数

- [Create3DTextLabel](Create3DTextLabel): 在指定坐标创建全局 3D 文本标签
- [IsValidPlayer3DTextLabel](IsValidPlayer3DTextLabel): 检测玩家 3D 文本标签有效性
