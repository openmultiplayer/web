---
title: CallLocalFunction
sidebar_label: CallLocalFunction
description: 调用当前脚本中的公共函数。
tags: ["核心"]
---

## 描述

调用当前脚本中的公共函数。

| 参数                 | 说明                                     |
| -------------------- | ---------------------------------------- |
| const functionName[] | 目标公共函数名称                         |
| const specifiers[]   | 参数格式说明符（指定每个参数的数据类型） |
| OPEN_MP_TAGS:...     | 不定数量且任意标签类型的参数             |

## 返回值

若函数存在，返回被调用函数的执行结果

若函数不存在，返回 0

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
forward publicFunc(number, Float:flt, const string[]);
public publicFunc(number, Float:flt, const string[])
{
    printf("接收整型 %i，浮点型 %f，字符串 %s", number, flt, string);
    return 1;
}

CallLocalFunction("publicFunc", "ifs", 420, 68.999999999, "Hello world");
```

## 注意事项

:::warning

在传递空字符串时原版 SA-MP 会导致服务器崩溃（open.mp 版本已修复此问题）

:::

## 相关函数

- [CallRemoteFunction](CallRemoteFunction): 调用任意已加载脚本中的函数
