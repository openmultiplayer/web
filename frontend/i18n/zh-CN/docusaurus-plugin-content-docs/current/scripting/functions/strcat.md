---
title: strcat
sidebar_label: strcat
description: 此函数用于将两个字符串拼接（连接）到目标字符串中。
tags: ["字符串"]
---

<LowercaseNoteZH_CN />

## 描述

此函数用于将两个字符串拼接（连接）到目标字符串中。

| 参数                      | 说明                     |
| ------------------------- | ------------------------ |
| dest[]                    | 存储拼接结果的目标字符串 |
| const source[]            | 源字符串                 |
| maxlength = sizeof (dest) | 目标字符串的最大容量     |

## 返回值

新目标字符串的长度。

## 示例代码

```c
new string[40] = "Hello";
strcat(string, " World!");

// 字符串现在变为'Hello World!'
```

## 相关函数

- [strcmp](strcmp): 比较两个字符串是否相同
- [strfind](strfind): 在字符串中搜索子串
- [strdel](strdel): 删除字符串片段
- [strins](strins): 向字符串插入内容
- [strlen](strlen): 获取字符串长度
- [strmid](strmid): 提取字符串片段
- [strpack](strpack): 压缩字符串到目标地址
- [strval](strval): 将字符串转换为整数值
