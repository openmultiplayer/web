---
title: IsValidPlayer3DTextLabel
sidebar_label: IsValidPlayer3DTextLabel
description: 检测玩家的3D文本标签是否有效。
tags: ["玩家", "3D文本标签"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测指定玩家的专属 3D 文本标签是否有效。

| 参数                | 说明                  |
| ------------------- | --------------------- |
| playerid            | 要检测的玩家 ID       |
| PlayerText3D:textid | 玩家的 3D 文本标签 ID |

## 返回值

当 3D 文本标签有效时返回 **true**，无效时返回 **false**

## 示例代码

```c
new PlayerText3D:playerTextId; // 声明玩家3D文本标签变量
new Float:X, Float:Y, Float:Z;

GetPlayerPos(playerid, X, Y, Z); // 获取玩家当前位置
playerTextId = CreatePlayer3DTextLabel(playerid, "你好\n我在你的位置", 0x008080FF, X, Y, Z, 40.0);

if (IsValidPlayer3DTextLabel(playerid, playerTextId))
{
    // 执行有效状态处理
}
```

## 相关函数

- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): 创建玩家专属 3D 文本标签
- [IsValid3DTextLabel](IsValid3DTextLabel): 检测全局 3D 文本标签有效性
