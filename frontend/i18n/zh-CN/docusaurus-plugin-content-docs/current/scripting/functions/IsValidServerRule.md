---
title: IsValidServerRule
sidebar_label: IsValidServerRule
description: 检测服务器规则有效性
tags: ["服务器规则"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测指定服务器规则是否有效。

| 参数名       | 说明                   |
| ------------ | ---------------------- |
| const rule[] | 待检测的服务器规则名称 |

## 返回值

当服务器规则有效时返回 **true**，否则返回 **false**

## 示例代码

```c
if (IsValidServerRule("version"))
{
    // 服务器规则有效
}
else
{
    // 服务器规则无效
}
```

## 相关函数

- [AddServerRule](AddServerRule): 添加服务器规则
- [RemoveServerRule](RemoveServerRule): 移除服务器规则
