---
title: IsActorInvulnerable
sidebar_label: IsActorInvulnerable
description: 检查演员是否处于无敌状态
tags: ["演员"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

检查指定演员是否处于无敌状态。

| 参数    | 说明              |
| ------- | ----------------- |
| actorid | 需要检查的演员 ID |

## 返回值

**true** - 演员处于无敌状态

**false** - 演员可受到伤害

## 示例

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // 在武器商店创建销售员演员

    if (IsActorInvulnerable(gMyActor))
    {
        print("演员处于无敌状态。");
    }
    else
    {
        print("演员可被伤害。");
    }
    return 1;
}
```

## 相关函数

- [CreateActor](CreateActor): 创建演员（静态 NPC）
- [SetActorInvulnerable](SetActorInvulnerable): 设置演员无敌状态
- [SetActorHealth](SetActorHealth): 设置演员生命值
