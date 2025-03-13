---
title: valstr
sidebar_label: valstr
description: 将整数值转换为字符串形式
tags: ["字符串处理"]
---

<LowercaseNoteZH_CN />

## 描述

将整数值转换为字符串形式存储。

| 参数名        | 说明                             |
| ------------- | -------------------------------- |
| dest          | 目标字符串存储位置               |
| value         | 待转换的整数值                   |
| pack _(可选)_ | 是否启用字符串压缩（默认不启用） |

## 返回值

本函数不返回特定值。

## 示例代码

```c
new string[4];
new value = 250;
valstr(string, value); // 字符串内容变为"250"
```

## 注意事项

:::warning

当传入极大整数值时可能导致服务端崩溃，建议使用以下修复方案（需在脚本中预先声明）：

```c
// valstr修复代码 by Slice
stock FIX_valstr(dest[], value, bool:pack = false)
{
    // 处理cellmin特殊值
    static const cellmin_value[] = !"-2147483648";

    if (value == cellmin)
        pack && strpack(dest, cellmin_value, 12) || strunpack(dest, cellmin_value, 12);
    else
        format(dest, 12, "%d", value), pack && strpack(dest, dest, 12);
}
#define valstr FIX_valstr
```

完整修复方案参见[fixes.inc](https://github.com/pawn-lang/sa-mp-fixes)

:::

## 相关函数

- [strval](strval): 将字符串转换为整数值
- [strcmp](strcmp): 对比两个字符串是否相同
