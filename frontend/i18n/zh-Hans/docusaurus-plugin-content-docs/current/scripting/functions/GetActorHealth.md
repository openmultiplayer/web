---
title: GetActorHealth
sidebar_label: GetActorHealth
description: 获取角色的生命值。
tags: ["角色"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

获取角色的生命值。

| 参数          | 说明                                       |
| ------------- | ------------------------------------------ |
| actorid       | 要获取生命值的角色 ID                      |
| &Float:health | 浮点变量（引用传递），用于存储角色的生命值 |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（角色未创建）

注意：角色的生命值存储在指定变量中，而非通过返回值获取。

## 示例代码

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // 在武器商店创建销售员角色

    SetActorHealth(gMyActor, 100.0);

    new Float:actorHealth;
    GetActorHealth(gMyActor, actorHealth);
    printf("角色ID %d 当前生命值：%.2f", gMyActor, actorHealth);
    return 1;
}
```

## 相关函数

- [CreateActor](CreateActor): 创建角色（静态 NPC）
- [SetActorHealth](SetActorHealth): 设置角色的生命值
- [SetActorInvulnerable](SetActorInvulnerable): 设置角色无敌状态
- [IsActorInvulnerable](IsActorInvulnerable): 检测角色是否处于无敌状态
