---
title: SetActorHealth
sidebar_label: SetActorHealth
description: 设置演员的生命值。
tags: ["演员"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

设置演员的生命值。

| 参数         | 说明                         |
| ------------ | ---------------------------- |
| actorid      | 要设置生命值的演员 ID        |
| Float:health | 要设置的生命值数值（浮点数） |

## 返回值

**true** - 成功

**false** - 失败（指定的演员不存在）

## 示例代码

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // 在武器店扮演销售员的演员

    SetActorHealth(gMyActor, 100.0);
    return 1;
}
```

## 相关函数

- [GetActorHealth](GetActorHealth): 获取演员的生命值
- [SetActorInvulnerable](SetActorInvulnerable): 设置演员无敌状态
