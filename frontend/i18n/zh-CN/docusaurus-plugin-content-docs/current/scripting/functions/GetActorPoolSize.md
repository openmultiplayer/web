---
title: GetActorPoolSize
sidebar_label: GetActorPoolSize
description: 获取服务器上已创建的最高演员ID。
tags: ["演员"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

获取服务器上已创建的最高演员 ID。注意在 SA-MP 中此函数存在缺陷，即使没有演员时也会返回`0`。open.mp 已修正此问题会返回`-1`，同时已弃用此函数，建议改用`MAX_ACTORS`或`foreach`循环。

## 示例代码

```c
SetAllActorsHealth(Float:health)
{
    // 遍历所有可能的演员ID
    for(new i = 0, j = GetActorPoolSize(); i <= j; i++)
    {
        if (IsValidActor(i))
        {
            SetActorHealth(i, health);  // 设置有效演员的生命值
        }
    }
}
```

## 相关函数

- [CreateActor](CreateActor): 创建演员（静态 NPC）
- [IsValidActor](IsValidActor): 验证演员 ID 是否有效
- [SetActorHealth](SetActorHealth): 设置演员的生命值
