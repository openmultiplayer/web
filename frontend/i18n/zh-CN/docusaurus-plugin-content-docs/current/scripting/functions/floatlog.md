---
title: floatlog
sidebar_label: floatlog
description: 计算浮点数的对数。
tags: ["数学", "浮点数"]
---

<LowercaseNoteZH_CN />

## 描述

此函数用于计算以指定底数的浮点数对数。

| 参数        | 说明                   |
| ----------- | ---------------------- |
| Float:value | 需要计算对数的浮点数值 |
| Float:base  | 对数的底数             |

## 返回值

计算结果（以浮点数形式返回）

## 示例

```c
public OnGameModeInit()
{
    printf("数值15.0以10.0为底的对数结果为 %.1f", floatlog(15.0, 10.0));
    return 1;
}
```

## 相关函数

- [floatsqroot](floatsqroot): 计算浮点数的平方根
- [floatpower](floatpower): 计算浮点数的幂运算
- [floatabs](floatabs): 获取浮点数的绝对值
