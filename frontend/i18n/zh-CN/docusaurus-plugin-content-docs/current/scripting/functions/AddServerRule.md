---
title: AddServerRule
sidebar_label: AddServerRule
description: 添加服务器规则
tags: ["规则"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

添加服务器规则。

| 参数名           | 说明                   |
| ---------------- | ---------------------- |
| const rule[]     | 要添加的服务器规则名称 |
| const format[]   | 服务器规则对应值       |
| OPEN_MP_TAGS:... | 不定数量的任意标签参数 |

## 返回值

成功执行返回 true，否则返回 false。

## 示例

```c
public OnGameModeInit()
{
    AddServerRule("discord", "discord.gg/samp");
    return 1;
}
```

## 相关函数

- [RemoveServerRule](RemoveServerRule): 移除服务器规则
- [IsValidServerRule](IsValidServerRule): 验证服务器规则有效性
