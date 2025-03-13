---
title: CallRemoteFunction
sidebar_label: CallRemoteFunction
description: 调用任意已加载脚本中的公共函数。
tags: ["核心"]
---

## 描述

调用任意已加载脚本中的公共函数。

| 参数名               | 说明                                     |
| -------------------- | ---------------------------------------- |
| const functionName[] | 目标公共函数名称                         |
| const specifiers[]   | 参数格式说明符（指定每个参数的数据类型） |
| OPEN_MP_TAGS:...     | 不定数量且任意标签类型的参数             |

## 返回值

返回最后一个被调用函数的执行结果

## 格式说明符

| **占位符** | **含义说明**                                                                                                                                                       |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `a`        | 传递数组（需紧跟 d/i 说明符指定数组长度）<br/><br/>**注意**：仅支持一维数组，传递二维数组时需通过计算数组长度（如 sizeof(array) + sizeof(array)\*sizeof(array[])） |
| `c`        | 传递单个字符                                                                                                                                                       |
| `d`,`i`    | 传递整型数值                                                                                                                                                       |
| `x`        | 传递十六进制数值                                                                                                                                                   |
| `f`        | 传递浮点数值                                                                                                                                                       |
| `s`        | 传递字符串                                                                                                                                                         |

## 示例代码

```c
forward CallMe(number, const string[]);
public CallMe(number, const string[])
{
    printf("CallMe被调用。整型参数: %i  字符串参数: %s", number, string);
    return 1;
}

// 在另一个脚本文件中...
CallRemoteFunction("CallMe", "is", 69, "这是一个字符串");
```

## 注意事项

:::warning

在传递空字符串时原版 SA-MP 会导致服务器崩溃（open.mp 版本已修复此问题）

:::

## 相关函数

- [CallLocalFunction](CallLocalFunction): 调用当前脚本中的函数
