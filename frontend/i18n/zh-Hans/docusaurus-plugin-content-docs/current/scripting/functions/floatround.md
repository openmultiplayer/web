---
title: floatround
sidebar_label: floatround
description: 将浮点数四舍五入为整数值。
tags: ["数学", "浮点数"]
---

<LowercaseNoteZH_CN />

## 描述

将浮点数按照指定模式舍入为整数值。

| 名称                   | 描述                                                                                       |
| ---------------------- | ------------------------------------------------------------------------------------------ |
| Float:数值             | 需要进行舍入的浮点数值                                                                     |
| floatround_method:模式 | 使用的[舍入模式](../resources/floatroundmodes)<br />默认值：`floatround_round`（四舍五入） |

## 返回值

四舍五入后的整数值

## 示例

```c
new value = floatround(3.3, floatround_ceil);  // 使用向上取整模式
printf("3.3四舍五入为 %d", value); // 输出：3.3四舍五入为 4
```

<br />

```c
new value = floatround(50.996229);  // 使用默认四舍五入模式
printf("50.996229四舍五入为 %d", value); // 输出：50.996229四舍五入为 51
```

<br />

```c
new value = floatround(270.0034);  // 使用默认四舍五入模式
printf("270.0034四舍五入为 %d", value); // 输出：270.0034四舍五入为 270
```

## 相关函数

- [float](float): 将整数转换为浮点数
- [floatstr](floatstr): 将字符串转换为浮点数

## 相关资源

- [浮点数舍入模式](../resources/floatroundmodes)
