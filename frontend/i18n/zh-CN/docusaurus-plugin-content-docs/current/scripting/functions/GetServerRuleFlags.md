---
title: GetServerRuleFlags
sidebar_label: GetServerRuleFlags
description: 获取服务器规则的标志位
tags: ["规则"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

:::warning

此函数暂未实现，请勿在生产环境使用

:::

## 描述

获取指定服务器规则的标志位信息

## 返回值

返回服务器规则标志位

## 示例代码

```c
public OnGameModeInit()
{
    // 添加并配置Discord服务器规则
    AddServerRule("discord", "discord.gg/samp");
    SetServerRuleFlags("discord", 1);

    // 获取并打印规则标志位
    new E_SERVER_RULE_FLAGS:flags = GetServerRuleFlags("discord");
    printf("规则标志位: %d", _:flags); // 输出"规则标志位: 1"
    return 1;
}
```

## 相关函数

- [AddServerRule](AddServerRule): 添加服务器规则
- [RemoveServerRule](RemoveServerRule): 移除服务器规则
- [IsValidServerRule](IsValidServerRule): 验证规则有效性
- [SetServerRuleFlags](SetServerRuleFlags): 设置服务器规则标志位
