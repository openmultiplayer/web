---
title: SetActorVirtualWorld
sidebar_label: SetActorVirtualWorld
description: 设置角色的虚拟世界。
tags: ["角色"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

设置角色的虚拟世界。只有处于相同虚拟世界的玩家才能看到该角色。

| 参数名       | 描述                                               |
| ------------ | -------------------------------------------------- |
| actorid      | 要设置虚拟世界的角色 ID（由 CreateActor 函数返回） |
| virtualWorld | 角色所属的虚拟世界 ID                              |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（指定的角色不存在）

## 示例代码

```c
new gMyActor;

public OnGameModeInit()
{
    // 创建角色
    gMyActor = CreateActor(69, 0.0, 0.0, 3.0, 0.0);

    // 设置虚拟世界
    SetActorVirtualWorld(gMyActor, 69);
    return 1;
}
```

## 相关函数

- [GetActorVirtualWorld](GetActorVirtualWorld): 获取角色的虚拟世界
- [CreateActor](CreateActor): 创建角色（静态 NPC）
