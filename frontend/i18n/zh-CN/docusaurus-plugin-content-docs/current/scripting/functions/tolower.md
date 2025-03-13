---
title: tolower
sidebar_label: tolower
description: 将单个字符转换为小写形式
tags: ["字符串处理"]
---

<LowercaseNoteZH_CN />

## 描述

将指定字符转换为小写形式。

| 参数名 | 说明           |
| ------ | -------------- |
| c      | 需要转换的字符 |

## 返回值

返回对应字符的小写 ASCII 编码值

## 示例代码

```c
public OnPlayerText(playerid, text[])
{
    text[0] = tolower(text[0]);
    // 将输入文本的首字母转换为小写
    return 1;
}
```

## 相关函数

- [toupper](toupper): 将单个字符转换为大写形式
