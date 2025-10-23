---
title: strmid
sidebar_label: strmid
description: 从字符串中提取指定范围的字符
tags: ["字符串"]
---

<LowercaseNoteZH_CN />

## 描述

该函数用于从字符串中提取指定范围的字符。

| 参数                      | 说明                                         |
| ------------------------- | -------------------------------------------- |
| dest[]                    | 存储提取结果的目标字符串                     |
| const source[]            | 源字符串                                     |
| start                     | 起始位置（基于 0 的索引）                    |
| end                       | 结束位置（基于 0 的索引）                    |
| maxlength = sizeof (dest) | 目标字符串的最大容量（默认为 dest 数组长度） |

## 返回值

存入目标字符串的字符数量。

## 示例代码

```c
new string[6];
// 从字符串提取'HELLO'并去除感叹号
strmid(string, "Extract 'HELLO' without the !!!!: HELLO!!!!", 34, 39);
// 字符串将包含"HELLO"
```

## 相关函数

- [strcmp](strcmp): 比较两个字符串是否相同
- [strfind](strfind): 在字符串中搜索子串
- [strins](strins): 向字符串插入内容
- [strlen](strlen): 获取字符串长度
- [strpack](strpack): 压缩字符串到目标地址
- [strval](strval): 将字符串转换为整数值
- [strcat](strcat): 拼接两个字符串到目标地址
- [strdel](strdel): 删除字符串片段
