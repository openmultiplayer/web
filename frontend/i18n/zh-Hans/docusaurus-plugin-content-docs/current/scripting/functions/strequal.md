---
title: strequal
sidebar_label: strequal
description: 比较两个字符串是否相同。
tags: ["字符串"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

<LowercaseNoteZH_CN />

## 描述

比较两个字符串是否相同。

| 参数                     | 说明                                                                                                    |
| ------------------------ | ------------------------------------------------------------------------------------------------------- |
| const string1[]          | 待比较的第一个字符串                                                                                    |
| const string2[]          | 待比较的第二个字符串                                                                                    |
| bool:ignorecase _(可选)_ | 设为**true**时忽略大小写（HeLLo 与 Hello 视为相同），设为**false**时区分大小写                          |
| length _(可选)_          | 设定比较长度时，仅比较前 X 个字符。例如比较 "Hello" 和 "Hell No" 时若 length 设为 4，将判定为相同字符串 |

## 返回值

在指定长度内字符串相同返回**true**，否则返回**false**。

## 示例代码

```c
new string1[] = "Hello World";
new string2[] = "Hello World";

// 检测字符串是否相同
if (strequal(string1, string2))
{
    print("字符串相同。");
}
else
{
    print("字符串不同。");
}
```

## 注意事项

:::tip

本函数是基于[strcmp](strcmp)的便捷封装函数。

:::

## 相关函数

- [strcmp](strcmp): 比较两个字符串是否相同
