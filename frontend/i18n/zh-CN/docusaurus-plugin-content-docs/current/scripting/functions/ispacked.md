---
title: ispacked
sidebar_label: ispacked
description: 检查字符串是否已打包
tags: ["字符串"]
---

<函数名小写形式 />

## 描述

检查指定字符串是否处于打包状态。

| 参数           | 说明             |
| -------------- | ---------------- |
| const string[] | 需要检查的字符串 |

## 返回值

**1** - 字符串已打包  
**0** - 字符串未打包

## 示例

```c
// 创建打包字符串
new string[24 char];

if (ispacked(string))
{
   print("该字符串已打包。");
}
```

## 相关函数

- [strpack](strpack): 打包字符串
- [strunpack](strunpack): 解包字符串
