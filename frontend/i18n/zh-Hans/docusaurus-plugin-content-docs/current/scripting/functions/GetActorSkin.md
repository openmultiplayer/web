---
title: GetActorSkin
sidebar_label: GetActorSkin
description: 获取角色当前使用的皮肤ID。
tags: ["角色"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取角色当前使用的皮肤 ID。

| 参数名  | 说明                |
| ------- | ------------------- |
| actorid | 要获取皮肤的角色 ID |

## 返回值

返回角色当前使用的皮肤 ID。

## 示例代码

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 1153.9640, -1772.3915, 16.5920, 0.0000);  // 创建皮肤ID为179的角色

    new actorSkinID = GetActorSkin(gMyActor);
    // `actorSkinID`的值现在是179
    return 1;
}
```

## 相关函数

- [CreateActor](CreateActor.md): 创建角色（静态 NPC）
- [SetActorSkin](SetActorSkin.md): 设置角色的皮肤 ID
