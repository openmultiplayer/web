---
title: strcmp
sidebar_label: strcmp
description: 比较两个字符串是否相同。
tags: ["字符串"]
---

<LowercaseNoteZH_CN />

## 描述

比较两个字符串是否相同。

## 参数

| 参数                     | 说明                                                                                 |
| ------------------------ | ------------------------------------------------------------------------------------ |
| const string1[]          | 要比较的第一个字符串                                                                 |
| const string2[]          | 要比较的第二个字符串                                                                 |
| bool:ignorecase _(可选)_ | 设为 **true** 时忽略大小写（HeLLo 与 Hello 视为相同），设为 **false** 时区分大小写   |
| length _(可选)_          | 设置比较长度，仅比较前 X 个字符（如用长度 4 比较 "Hello" 和 "Hell No" 将判定为相同） |

## 返回值

- **0**：在指定长度内字符串完全匹配
- **1** 或 **-1**：存在不匹配字符（计算方式为 `string1[i] - string2[i]`，i 表示从 0 开始的字符索引）
- **字符数差异**：当某一字符串仅部分匹配另一字符串时返回字符数量差

## 示例

```c
new string1[] = "Hello World";
new string2[] = "Hello World";

// 检查字符串是否相同
if (!strcmp(string1, string2))

new string3[] = "Hell";

// 检查前4个字符是否匹配
if (!strcmp(string2, string3, false, 4))

// 使用 isnull() 检查空字符串
if (!strcmp(string1, string2) && !isnull(string1) && !isnull(string2))

// isnull() 宏定义：
#if !defined isnull
    #define isnull(%1) ((!(%1[0])) || (((%1[0]) == '\1') && (!(%1[1]))))
#endif
```

## 注意事项

:::warning

- 当任一字符串为空时此函数会返回 **0**，请使用 `isnull()` 进行空值检测
- 比较来自文本文件的字符串时需注意回车符 (`\r`) 和换行符 (`\n`)，使用 [fread](fread) 读取时会包含这些特殊字符

:::

## 相关函数

- [strfind](strfind): 在字符串中搜索子串
- [strequal](strequal): 判断两个字符串是否相同
- [strdel](strdel): 删除字符串片段
- [strins](strins): 插入字符串内容
- [strlen](strlen): 获取字符串长度
- [strmid](strmid): 截取子字符串
- [strpack](strpack): 打包字符串
- [strval](strval): 字符串转整型
- [strcat](strcat): 字符串拼接

## 教程指南

- [字符串操作技巧](../../tutorials/stringmanipulation)
