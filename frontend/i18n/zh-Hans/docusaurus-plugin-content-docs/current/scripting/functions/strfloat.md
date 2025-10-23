---
title: strfloat
sidebar_label: strfloat
description: 将字符串转换为浮点数。
tags: ["字符串", "浮点数"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

<LowercaseNoteZH_CN />

## 描述

将字符串转换为浮点数。

## 参数

| 名称           | 说明           |
| -------------- | -------------- |
| const string[] | 待转换的字符串 |

## 返回值

转换后的浮点数值。

## 示例

```c
new string[4] = "6.9"; // 存储浮点数的字符串

new Float:value = strfloat(string);

SetPlayerPos(playerid, 0.0, 0.0, value);
```

## 注意事项

:::tip

此函数功能与 [floatstr](floatstr) 完全一致。

:::

## 相关函数

- [floatround](floatround): 将浮点数转换为整数（四舍五入）
- [float](float): 将整数转换为浮点数
