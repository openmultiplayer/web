---
title: SetActorSkin
sidebar_label: SetActorSkin
description: 设置角色的皮肤。
tags: ["角色"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

设置角色的皮肤。

| 参数    | 说明            |
| ------- | --------------- |
| actorid | 要设置的角色 ID |
| skin    | 要设置的皮肤 ID |

## 返回值

**true** - 成功

**false** - 失败（指定的角色不存在或无效）

## 示例代码

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 1153.9640, -1772.3915, 16.5920, 0.0000);
    SetActorSkin(gMyActor, 270); // 将角色皮肤从179更改为270
    return 1;
}
```

## 相关函数

- [CreateActor](CreateActor): 创建角色（静态 NPC）
- [GetActorSkin](GetActorSkin): 获取角色的皮肤
