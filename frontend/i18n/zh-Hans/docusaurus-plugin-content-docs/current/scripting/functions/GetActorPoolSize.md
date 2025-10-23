---
title: GetActorPoolSize
sidebar_label: GetActorPoolSize
description: 获取服务器上已创建的最高角色ID。
tags: ["角色"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

获取服务器上已创建的最高角色 ID。注意在 SA-MP 中该函数存在缺陷，即使没有角色时也会返回`0`。fixes.inc 和 open.mp 已修正此问题会返回`-1`，同时已弃用该函数，建议改用`MAX_ACTORS`或`foreach`循环。

## 示例代码

```c
SetAllActorsHealth(Float:health)
{
    // 遍历所有可能的角色ID
    for(new i = 0, j = GetActorPoolSize(); i <= j; i++)
    {
        if (IsValidActor(i))
        {
            SetActorHealth(i, health);  // 设置有效角色的生命值
        }
    }
}
```

## 相关函数

- [CreateActor](CreateActor): 创建角色（静态 NPC）
- [IsValidActor](isValidActor): 验证角色 ID 是否有效
- [SetActorHealth](SetActorHealth): 设置角色的生命值
