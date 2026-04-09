---
title: IsActorStreamedIn
sidebar_label: IsActorStreamedIn
description: 检查演员是否已为玩家流加载
tags: ["演员"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

检查指定演员是否已为玩家完成流加载。

| 参数     | 说明              |
| -------- | ----------------- |
| actorid  | 需要检查的演员 ID |
| playerid | 玩家 ID           |

## 返回值

**1** - 演员已为玩家流加载  
**0** - 演员尚未加载或不存在

## 示例

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(0, 0.0, 0.0, 3.0, 0.0);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    if (IsActorStreamedIn(gMyActor, playerid))
    {
        // 执行相关操作
    }
    return 1;
}
```

## 相关函数

- [CreateActor](CreateActor): 创建演员（静态 NPC）
- [IsPlayerStreamedIn](IsPlayerStreamedIn): 检查玩家是否已为另一玩家流加载
