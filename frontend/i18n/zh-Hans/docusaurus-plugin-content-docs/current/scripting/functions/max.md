---
title: max
sidebar_label: max
description: 返回两个数值中的较大者
tags: ["核心"]
---

<LowercaseNoteZH_CN />

## 描述

用于比较数值的函数

| 参数   | 说明                  |
| ------ | --------------------- |
| value1 | 待比较的第一个值（a） |
| value2 | 待比较的第二个值（b） |

## 返回值

`value1` 与 `value2` 中的较大值

若两者相等，则返回 `value1`

## 示例

```c
public OnGameModeInit()
{
    new a, b, result;

    a = 5;
    b = 10;
    result = max(a, b);

    printf("max(%d, %d) = %d", a, b, result);
    // 由于b大于a，结果将为10

    return 1;
}
```

## 相关函数

- [min](min): 比较并获取最小值
