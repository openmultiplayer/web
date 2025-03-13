---
title: min
sidebar_label: min
description: 返回两个数值中的较小者
tags: ["核心"]
---

<LowercaseNoteZH_CN />

## 描述

用于比较数值的函数

| 参数   | 说明                  |
| ------ | --------------------- |
| value1 | 待比较的第一个值（a） |
| value1 | 待比较的第二个值（b） |

## 返回值

`value1` 与 `value2` 中的较小值

若两者相等，则返回 `value1`

## 示例

```c
public OnGameModeInit()
{
    new a, b, result;

    a = 5;
    b = 10;
    result = min(a, b);

    printf("min(%d, %d) = %d", a, b, result);
    // 由于a小于b，结果将为5

    return 1;
}
```

## 相关函数

- [max](max): 比较并获取最大值
