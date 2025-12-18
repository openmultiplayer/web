---
title: DeleteSVar
sidebar_label: DeleteSVar
description: 删除先前设置的服务器变量。
tags: ["服务器变量"]
---

## 描述

删除先前设置的服务器变量。

| 参数         | 说明                     |
| ------------ | ------------------------ |
| const svar[] | 要删除的服务器变量名称。 |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败。可能原因：不存在指定名称的变量。

## 示例

```c
SetSVarInt("SomeVarName", 69);

// 后续操作，当不再需要该变量时...

DeleteSVar("SomeVarName");
```

## 注意事项

:::tip

变量被删除后，尝试获取其值将返回：整型返回 0，浮点数返回 0.0，字符串返回空值。

:::

## 相关函数

- [SetSVarInt](SetSVarInt): 为服务器变量设置整型值
- [GetSVarInt](GetSVarInt): 获取服务器变量的整数值
- [SetSVarString](SetSVarString): 为服务器变量设置字符串值
- [GetSVarString](GetSVarString): 从服务器变量获取字符串值
- [SetSVarFloat](SetSVarFloat): 为服务器变量设置浮点数值
- [GetSVarFloat](GetSVarFloat): 从服务器变量获取浮点数值
