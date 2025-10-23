---
title: GetGravity
sidebar_label: GetGravity
description: 获取当前服务器的全局重力值。
tags: []
---

## 描述

获取当前服务器的全局重力值。

## 示例代码

**SA-MP 服务器示例：**

```c
#include <a_samp>

#if !defined GetGravity
    native Float:GetGravity();
#endif

public OnGameModeInit()
{
    printf("当前重力值：%f", GetGravity());  // 输出浮点型重力值
    return 1;
}
```

**open.mp 服务器示例：**

```c
#include <open.mp>

public OnGameModeInit()
{
    printf("当前重力值：%f", GetGravity());  // 直接调用函数获取重力值
    return 1;
}
```

## 注意事项

:::warning

在 SA-MP 服务器中，该函数默认未定义。需在包含 a_samp.inc 后添加 'native Float:GetGravity();' 声明方可使用。

:::

## 相关函数

- [SetGravity](SetGravity.md): 设置全局重力值
- [GetPlayerGravity](GetPlayerGravity.md): 获取玩家个体重力值
