---
title: SetServerRule
sidebar_label: SetServerRule
description: 添加服务器规则。
tags: ["规则"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

添加服务器规则。

## 参数

| 名称             | 说明                       |
| ---------------- | -------------------------- |
| const rule[]     | 要添加的服务器规则名称     |
| const format[]   | 服务器规则的值             |
| OPEN_MP_TAGS:... | 任意标签类型的不定数量参数 |

## 返回值

函数执行成功返回 true，否则返回 false。

## 示例

```c
public OnGameModeInit()
{
    SetServerRule("discord", "discord.gg/samp");
    return 1;
}
```

## 注意

:::tip

本函数与[AddServerRule](AddServerRule)功能相同。

:::

## 相关函数

- [RemoveServerRule](RemoveServerRule): 移除服务器规则
- [IsValidServerRule](IsValidServerRule): 检查服务器规则有效性
