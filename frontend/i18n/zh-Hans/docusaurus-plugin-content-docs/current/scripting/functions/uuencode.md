---
title: uuencode
sidebar_label: uuencode
description: 将字符串编码为UU格式字符串。
tags: ["字符串处理", "加密"]
---

<LowercaseNoteZH_CN />

## 描述

将原始字符串编码为 UU 格式字符串。

| 名称                      | 描述                                 |
| ------------------------- | ------------------------------------ |
| dest[]                    | 用于存储编码后字符串的目标数组       |
| const source[]            | 需要编码的原始字符串                 |
| numbytes                  | 要编码的字节数（建议不超过 45 字节） |
| maxlength = sizeof (dest) | 目标数组的最大存储容量               |

## 返回值

该函数不返回特定值。

## 示例

```c
uuencode(encodedString, normalString, 45); // 将普通字符串编码为UU格式
```

## 相关函数

- [uudecode](uudecode): 解码 UU 编码字符串
- [memcpy](memcpy): 内存复制函数
