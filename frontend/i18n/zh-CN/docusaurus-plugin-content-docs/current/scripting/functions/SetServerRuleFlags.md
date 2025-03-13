---
title: SetServerRuleFlags
sidebar_label: SetServerRuleFlags
description: 设置服务器规则的标志。
tags: ["规则"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

:::warning

该函数暂未实现。

:::

## 描述

设置服务器规则的标志。

## 参数

| 参数名                    | 描述           |
| ------------------------- | -------------- |
| const rule[]              | 服务器规则名称 |
| E_SERVER_RULE_FLAGS:flags | 要设置的标志位 |

## 返回值

函数执行成功返回 **true**，否则返回 **false**。

## 示例

```c
public OnGameModeInit()
{
    AddServerRule("discord", "discord.gg/samp");
    SetServerRuleFlags("discord", 1);
    return 1;
}
```

## 相关函数

- [AddServerRule](AddServerRule): 添加服务器规则
- [RemoveServerRule](RemoveServerRule): 移除服务器规则
- [IsValidServerRule](IsValidServerRule): 验证服务器规则有效性
- [GetServerRuleFlags](GetServerRuleFlags): 获取服务器规则标志位
