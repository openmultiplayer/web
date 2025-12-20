---
title: uudecode
sidebar_label: uudecode
description: 解码UU编码字符串
tags: ["字符串", "加密"]
---

<LowercaseNoteZH_CN />

## 描述

解码 UU 编码格式的字符串。

| 参数                      | 说明                     |
| ------------------------- | ------------------------ |
| dest[]                    | 存储解码结果的数组       |
| const source[]            | 需要解码的 UU 编码字符串 |
| maxlength = sizeof (dest) | 目标数组的最大可用长度   |

## 返回值

此函数不返回特定值。

## 示例

```c
uudecode(normalString, encodedString); // 将encodedString解码到normalString数组
```

## 相关函数

- [uuencode](uuencode): 将字符串编码为 UU 格式
- [memcpy](memcpy): 内存数据复制函数
