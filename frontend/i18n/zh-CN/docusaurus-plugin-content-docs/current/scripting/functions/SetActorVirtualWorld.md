---
title: SetActorVirtualWorld
sidebar_label: SetActorVirtualWorld
description: 设置演员的虚拟世界。
tags: ["演员"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

设置演员的虚拟世界。只有处于相同虚拟世界的玩家才能看到该演员。

| 参数         | 说明                                               |
| ------------ | -------------------------------------------------- |
| actorid      | 要设置虚拟世界的演员 ID（由 CreateActor 函数返回） |
| virtualWorld | 演员所属的虚拟世界 ID                              |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（指定的演员不存在）

## 示例代码

```c
new gMyActor;

public OnGameModeInit()
{
    // 创建演员
    gMyActor = CreateActor(69, 0.0, 0.0, 3.0, 0.0);

    // 设置虚拟世界
    SetActorVirtualWorld(gMyActor, 69);
    return 1;
}
```

## 相关函数

- [GetActorVirtualWorld](GetActorVirtualWorld): 获取演员的虚拟世界
- [CreateActor](CreateActor): 创建演员（静态 NPC）
