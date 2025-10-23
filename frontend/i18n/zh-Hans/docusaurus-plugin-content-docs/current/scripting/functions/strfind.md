---
title: strfind
sidebar_label: strfind
description: 在字符串中搜索子字符串。
tags: ["字符串"]
---

<LowercaseNoteZH_CN />

## 描述

在字符串中搜索指定子字符串。

| 参数名称                     | 说明                                                                       |
| ---------------------------- | -------------------------------------------------------------------------- |
| const string[]               | 被搜索的目标字符串（haystack）                                             |
| const sub[]                  | 需要查找的子字符串（needle）                                               |
| bool:ignorecase _(可选参数)_ | 设为 true 时忽略大小写（HeLLo 与 Hello 视为相同），设为 false 时区分大小写 |
| Position _(可选参数)_        | 指定搜索起始位置的字符偏移量                                               |

## 返回值

返回子字符串的起始字符位置索引，若未找到则返回-1。

## 示例代码

```c
if (strfind("Are you in here?", "you", true) != -1) // 返回4，因为子字符串'you'的起始位置在索引4
{
    SendClientMessageToAll(0xFFFFFFFF, "找到目标字符串！");
}
```

## 相关函数

- [strcmp](strcmp): 比较两个字符串是否相同
- [strdel](strdel): 删除字符串指定部分
- [strins](strins): 向字符串插入内容
- [strlen](strlen): 获取字符串长度
- [strmid](strmid): 截取字符串片段
- [strpack](strpack): 压缩字符串到目标变量
- [strval](strval): 将字符串转为整数值
- [strcat](strcat): 连接两个字符串到目标引用
