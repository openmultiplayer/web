---
title: floattan
sidebar_label: floattan
description: 获取指定角度的正切值
tags: ["数学", "浮点"]
---

<LowercaseNoteZH_CN />

## 描述

获取指定角度的正切值。输入角度可使用弧度、角度或梯度单位。

| 参数        | 说明                                                                          |
| ----------- | ----------------------------------------------------------------------------- |
| Float:value | 需要计算正切值的角度                                                          |
| anglemode   | 使用的[角度模式](../resources/anglemodes)，根据输入值的单位而定（默认：弧度） |

## 返回值

输入值的正切值。

## 示例

```c
public OnGameModeInit()
{
    printf("30°的正切值为 %.0f", floattan(30.0, degrees));
    // 输出：1
    return 1;
}
```

## 注意事项

:::warning

在大多数情况下，GTA/SA-MP 使用角度制表示方向，例如[GetPlayerFacingAngle](GetPlayerFacingAngle)。因此建议优先使用'degrees'角度模式而非弧度制。同时注意 GTA 的角度系统采用逆时针方向：270° 为东方，90° 为西方，南方仍为 180°，北方仍为 0°/360°。

:::

## 相关函数

- [floatsin](floatsin): 获取指定角度的正弦值
- [floatcos](floatcos): 获取指定角度的余弦值

## 相关资源

- [角度模式](../resources/anglemodes): 测量角度的国际单位常量
