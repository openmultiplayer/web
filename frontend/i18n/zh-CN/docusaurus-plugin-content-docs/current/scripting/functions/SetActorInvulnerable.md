---
title: SetActorInvulnerable
sidebar_label: SetActorInvulnerable
description: 切换演员的无敌状态。
tags: ["演员"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

切换演员的无敌状态。

| 参数              | 说明                              |
| ----------------- | --------------------------------- |
| actorid           | 要设置无敌状态的演员 ID           |
| bool:invulnerable | 'false'设为可伤害，'true'设为无敌 |

## 返回值

**true** - 成功

**false** - 失败（指定的演员不存在）

## 示例代码

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // 在武器店扮演销售员的演员
    SetActorInvulnerable(gMyActor, true);
    return 1;
}
```

## 注意事项

:::warning

设置为无敌状态后，演员不会触发[OnPlayerGiveDamageActor](OnPlayerGiveDamageActor)回调。玩家只有在演员被重新流加载时才能看到无敌状态的变化。

:::

## 相关函数

- [IsActorInvulnerable](IsActorInvulnerable): 检查演员是否无敌
