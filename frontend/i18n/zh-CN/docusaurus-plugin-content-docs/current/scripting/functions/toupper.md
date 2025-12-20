---
title: toupper
sidebar_label: toupper
description: 将单个字符转换为大写形式。
tags: ["字符串处理"]
---

<LowercaseNoteZH_CN />

## 描述

此函数用于将单个字符转换为大写形式。

| 参数 | 说明                 |
| ---- | -------------------- |
| c    | 需要转换为大写的字符 |

## 返回值

返回输入字符对应的大写 ASCII 码值。

## 示例

```c
public OnPlayerText(playerid, text[])
{
    text[0] = toupper(text[0]);
    // 将玩家输入的首字母转换为大写
    return 1;
}
```

## 相关函数

- [tolower](tolower): 将单个字符转换为小写形式
