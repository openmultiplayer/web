---
title: floatstr
sidebar_label: floatstr
description: 将字符串转换为浮点数。
tags: ["字符串", "浮点数"]
---

<LowercaseNoteZH_CN />

## 描述

将字符串转换为浮点数。

| 参数           | 说明             |
| -------------- | ---------------- |
| const string[] | 需要转换的字符串 |

## 返回值

转换后的浮点数值

## 示例

```c
new string[4] = "6.9"; // 存储浮点数的字符串

new Float:value = floatstr(string);

SetPlayerPos(playerid, 0.0, 0.0, value); // 使用转换后的浮点数值设置玩家Z坐标
```

## 注意事项

:::warning

如果字符串包含非数字字符（除数字、小数点和正负号外），转换结果可能不可预测

:::

## 相关函数

- [floatround](floatround): 将浮点数转换为整数（四舍五入）
- [float](float): 将整数转换为浮点数
- [strval](strval): 将字符串转换为整数值
