---
title: strunpack
sidebar_label: strunpack
description: 该函数用于解包字符串。
tags: ["字符串"]
---

<LowercaseNoteZH_CN />

## 描述

该函数用于解包字符串。

## 参数

| 名称                        | 说明                                         |
| --------------------------- | -------------------------------------------- |
| dest[]                      | 目标字符串（引用传递），用于存储解包后的内容 |
| const source[]              | 源字符串（已打包的原始字符串）               |
| maxlength = sizeof (string) | 最大解包长度（默认取目标字符串容量）         |

## 返回值

解包的字符数量。

## 示例

```c
new string[17];
new pstring[17 char] = !"Hi, how are you?";
strunpack(string, pstring);  // 解包已压缩字符串
```

## 相关函数

- [ispacked](ispacked): 检测字符串是否已打包
- [strpack](strpack): 打包字符串
- [strcmp](strcmp): 比较字符串是否相同
- [strfind](strfind): 在字符串中搜索子串
- [strins](strins): 插入字符串内容
- [strlen](strlen): 获取字符串长度
- [strmid](strmid): 截取子字符串
- [strval](strval): 字符串转整型
- [strcat](strcat): 字符串拼接
- [strdel](strdel): 删除字符串片段
