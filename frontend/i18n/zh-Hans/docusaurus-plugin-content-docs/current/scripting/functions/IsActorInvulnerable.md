---
title: IsActorInvulnerable
sidebar_label: IsActorInvulnerable
description: 检查角色是否处于无敌状态
tags: ["角色"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

检查指定角色是否处于无敌状态。

| 参数    | 说明              |
| ------- | ----------------- |
| actorid | 需要检查的角色 ID |

## 返回值

**true** - 角色处于无敌状态

**false** - 角色可受到伤害

## 示例

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // 在武器商店创建销售员角色

    if (IsActorInvulnerable(gMyActor))
    {
        print("角色处于无敌状态。");
    }
    else
    {
        print("角色可被伤害。");
    }
    return 1;
}
```

## 相关函数

- [CreateActor](CreateActor): 创建角色（静态 NPC）
- [SetActorInvulnerable](SetActorInvulnerable): 设置角色无敌状态
- [SetActorHealth](SetActorHealth): 设置角色生命值
