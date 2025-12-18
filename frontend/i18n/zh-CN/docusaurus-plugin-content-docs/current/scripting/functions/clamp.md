---
title: clamp
sidebar_label: clamp
description: 将数值强制限制在指定范围内
tags: ["核心"]
---

<LowercaseNoteZH_CN />

## 描述

将输入的数值强制限制在指定的区间范围内

| 参数  | 说明                                    |
| ----- | --------------------------------------- |
| value | 需要限制范围的数值                      |
| min   | 区间下限值（可选参数，默认值：cellmin） |
| max   | 区间上限值（可选参数，默认值：cellmax） |

## 返回值

- 当数值在 min~max 区间时，返回原值
- 当数值小于 min 时，返回 min
- 当数值大于 max 时，返回 max

## 示例代码

```c
new
    valueA = 3,
    valueB = 7,
    valueC = 100
;
printf("计算结果：%d", clamp(valueA, 5, 10)); // 输出："计算结果：5"（3小于下限5）
printf("计算结果：%d", clamp(valueB, 5, 10)); // 输出："计算结果：7"（7在5~10区间）
printf("计算结果：%d", clamp(valueC, 5, 10)); // 输出："计算结果：10"（100超过上限10）
```
