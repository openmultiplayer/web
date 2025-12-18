---
title: funcidx
sidebar_label: funcidx
description: 通过函数名获取公共函数的ID。
tags: ["核心"]
---

<LowercaseNoteZH_CN />

## 描述

通过函数名获取公共函数的唯一标识符(ID)。

| 参数         | 说明                   |
| ------------ | ---------------------- |
| const name[] | 要查询的公共函数名称。 |

## 返回值

- 成功时返回函数 ID（ID 从**0**开始）
- 函数不存在时返回 **-1**

## 示例

```c
public OnFilterScriptInit()
{
    printf("OnFilterScriptInit的ID: %d", funcidx("OnFilterScriptInit"));
    return 1;
}
```

## 相关函数

- [CallLocalFunction](CallLocalFunction): 调用脚本内的函数
- [CallRemoteFunction](CallRemoteFunction): 跨脚本调用函数
