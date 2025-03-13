---
title: strdel
sidebar_label: strdel
description: 删除字符串的一部分。
tags: ["字符串"]
---

<LowercaseNoteZH_CN />

## 描述

删除字符串的指定部分。

## 参数

| 名称     | 说明                   |
| -------- | ---------------------- |
| string[] | 需要操作的字符串       |
| start    | 要删除的起始位置（含） |
| end      | 要删除的结束位置（含） |

## 返回值

此函数不返回任何特定值。

## 示例

```c
new string[42] = "We will delete everything apart from this";
strdel(string, 0, 37); // 字符串现在为 "this"
```

## 相关函数

- [strcmp](strcmp): 比较两个字符串是否相同
- [strfind](strfind): 在字符串中搜索子串
- [strins](strins): 向字符串插入内容
- [strlen](strlen): 获取字符串长度
- [strmid](strmid): 截取子字符串
- [strpack](strpack): 压缩字符串存储
- [strval](strval): 字符串转整型数值
- [strcat](strcat): 字符串拼接操作
