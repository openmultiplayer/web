---
title: strval
sidebar_label: strval
description: 将字符串转换为整数值
tags: ["字符串"]
---

<LowercaseNoteZH_CN />

## 描述

将字符串转换为整数值。

| 参数           | 说明             |
| -------------- | ---------------- |
| const string[] | 需要转换的字符串 |

## 返回值

字符串对应的整数值（若字符串非数字格式则返回 0）

## 示例代码

```c
new string[4] = "250";
new iValue = strval(string); // 此时iValue的值为250
```

## 相关函数

- [strcmp](strcmp): 比较两个字符串是否相同
- [strfind](strfind): 在字符串中搜索子串
- [strdel](strdel): 删除字符串片段
- [strins](strins): 向字符串插入内容
- [strlen](strlen): 获取字符串长度
- [strmid](strmid): 提取字符串片段
- [strpack](strpack): 压缩字符串到目标地址
- [strcat](strcat): 拼接两个字符串到目标地址
