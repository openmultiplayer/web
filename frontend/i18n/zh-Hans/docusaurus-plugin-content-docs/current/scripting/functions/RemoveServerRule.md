---
title: RemoveServerRule
sidebar_label: RemoveServerRule
description: 移除服务器规则
tags: ["规则"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

移除指定的服务器规则。

| 参数         | 说明                   |
| ------------ | ---------------------- |
| const rule[] | 要移除的服务器规则名称 |

## 返回值

成功执行返回 true，否则返回 false。

## 示例

```c
RemoveServerRule("rule");
```

## 相关函数

- [AddServerRule](AddServerRule): 添加服务器规则
- [IsValidServerRule](IsValidServerRule): 验证服务器规则是否有效
