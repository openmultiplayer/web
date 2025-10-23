---
title: strlen
sidebar_label: strlen
description: 获取字符串长度。
tags: ["字符串"]
---

<LowercaseNoteZH_CN />

## 描述

获取指定字符串的长度。

| 参数名称       | 说明                     |
| -------------- | ------------------------ |
| const string[] | 需要获取长度的目标字符串 |

## 返回值

返回字符串的长度（整数值）。

## 示例代码

```c
new stringLength = strlen("This is an example string."); // stringLength的值将被设为26
```

## 相关函数

- [strcmp](strcmp): 比较两个字符串是否相同
- [strfind](strfind): 在字符串中搜索子字符串
- [strins](strins): 向字符串插入内容
- [strmid](strmid): 截取字符串片段
- [strpack](strpack): 压缩字符串到目标变量
- [strval](strval): 将字符串转为整数值
- [strcat](strcat): 连接两个字符串到目标引用
- [strdel](strdel): 删除字符串指定部分
