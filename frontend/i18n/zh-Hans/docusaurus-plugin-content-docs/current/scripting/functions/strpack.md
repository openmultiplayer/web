---
title: strpack
sidebar_label: strpack
description: 压缩字符串。
tags: ["字符串"]
---

<LowercaseNoteZH_CN />

## 描述

压缩字符串。压缩后的字符串可减少 75%的内存占用。

| 参数名称                    | 说明                                     |
| --------------------------- | ---------------------------------------- |
| dest[]                      | 目标字符串（用于存储压缩结果的引用）     |
| const source[]              | 源字符串（需压缩的原始内容）             |
| maxlength = sizeof (string) | 最大压缩长度限制（默认为目标字符串容量） |

## 返回值

返回实际压缩的字符数量。

## 示例代码

```c
new string[32 char];
strpack(string, "Hi, how are you?");
```

## 相关函数

- [strcmp](strcmp): 比较两个字符串是否相同
- [strfind](strfind): 在字符串中搜索子字符串
- [strins](strins): 向字符串插入内容
- [strlen](strlen): 获取字符串长度
- [strmid](strmid): 截取字符串片段
- [strval](strval): 将字符串转为整数值
- [strcat](strcat): 连接两个字符串到目标引用
- [strdel](strdel): 删除字符串指定部分
