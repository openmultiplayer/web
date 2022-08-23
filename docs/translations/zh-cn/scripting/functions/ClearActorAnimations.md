---
title: ClearActorAnimations
description: 清除应用在演员身上的任何动画。
tags: []
---

<VersionWarnCN version='SA-MP 0.3.7' />

## 描述

清除应用在演员身上的任何动画。

| 参数名  | 说明                                           |
| ------- | ---------------------------------------------- |
| actorid | 要清除动画的演员的 ID。（由 CreateActor 返回） |

## 返回值

1:函数执行成功。

0:函数执行失败，传入的演员不存在。

## 案例

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(...);
}

// 其他地方
ApplyActorAnimation(gMyActor, ...);

// 其他地方
ClearActorAnimations(gMyActor);
```

## 相关函数

- [ApplyActorAnimation](ApplyActorAnimation): 将动画应用于演员。
