---
title: ClearActorAnimations
sidebar_label: ClearActorAnimations
description: 清除角色当前应用的所有动画效果
tags: ["角色"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

终止指定角色当前正在播放的动画序列

| 参数    | 说明                                                  |
| ------- | ----------------------------------------------------- |
| actorid | 目标角色 ID（通过[CreateActor](CreateActor)函数创建） |

## 返回值

**1** - 函数执行成功，动画已清除

**0** - 函数执行失败（指定角色不存在）

## 示例代码

```c
new gMyActor;

public OnGameModeInit()
{
    // 在武器店创建售货员角色
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0);
    // 应用付款动画
    ApplyActorAnimation(gMyActor, "DEALER", "shop_pay", 4.1, false, false, false, false, 0);
    return 1;
}

// 在其他代码段中终止动画
ClearActorAnimations(gMyActor);
```

## 相关函数

- [ApplyActorAnimation](ApplyActorAnimation): 为角色应用动画
