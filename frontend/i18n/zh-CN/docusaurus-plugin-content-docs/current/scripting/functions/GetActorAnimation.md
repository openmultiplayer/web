---
title: GetActorAnimation
sidebar_label: GetActorAnimation
description: 获取角色当前正在播放的动画信息。
tags: ["角色"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取角色当前正在播放的动画信息。

| 参数               | 说明                                        |
| ------------------ | ------------------------------------------- |
| actorid            | 要获取动画的角色 ID                         |
| animationLibrary[] | 用于存储动画库名称的数组（引用传递）        |
| librarySize        | 动画库名称数组的长度                        |
| animationName[]    | 用于存储动画名称的数组（引用传递）          |
| nameSize           | 动画名称数组的长度                          |
| &Float:delta       | 浮点变量，用于存储动画增量（引用传递）      |
| &bool:loop         | 布尔变量，用于存储循环状态（引用传递）      |
| &bool:lockX        | 布尔变量，用于存储 X 轴锁定状态（引用传递） |
| &bool:lockY        | 布尔变量，用于存储 Y 轴锁定状态（引用传递） |
| &bool:freeze       | 布尔变量，用于存储冻结状态（引用传递）      |
| &time              | 整型变量，用于存储动画时间（引用传递）      |

## 返回值

若角色存在且有效返回 true，否则返回 false。

## 示例代码

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 1153.9640, -1772.3915, 16.5920, 0.0000);
    ApplyActorAnimation(gMyActor, "PED", "IDLE_CHAT", 4.1, true, true, true, true, 0);

    new animationLibrary[32],
        animationName[32],
        Float:delta,
        bool:loop,
        bool:lockX,
        bool:lockY,
        bool:freeze,
        time;

    GetActorAnimation(gMyActor, animationLibrary, sizeof animationLibrary, animationName, sizeof animationName, delta, loop, lockX, lockY, freeze, time);
    return 1;
}
```

## 相关函数

- [CreateActor](CreateActor): 创建角色（静态 NPC）
- [ApplyActorAnimation](ApplyActorAnimation): 对角色应用动画
- [ClearActorAnimations](ClearActorAnimations): 清除角色的所有动画
