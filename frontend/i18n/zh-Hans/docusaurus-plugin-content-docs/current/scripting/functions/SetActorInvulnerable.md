---
title: SetActorInvulnerable
sidebar_label: SetActorInvulnerable
description: 切换角色的无敌状态。
tags: ["角色"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

切换角色的无敌状态。

| 参数名            | 描述                              |
| ----------------- | --------------------------------- |
| actorid           | 要设置无敌状态的角色 ID           |
| bool:invulnerable | 'false'设为可伤害，'true'设为无敌 |

## 返回值

**true** - 成功

**false** - 失败（指定的角色不存在）

## 示例代码

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // 在武器店扮演销售员的角色
    SetActorInvulnerable(gMyActor, true);
    return 1;
}
```

## 注意事项

:::warning

设置为无敌状态后，角色不会触发[OnPlayerGiveDamageActor](OnPlayerGiveDamageActor)回调。玩家只有在角色被重新流加载时才能看到无敌状态的变化。

:::

## 相关函数

- [IsActorInvulnerable](IsActorInvulnerable): 检查角色是否无敌
