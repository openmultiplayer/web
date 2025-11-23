---
title: GetActorSpawnInfo
sidebar_label: GetActorSpawnInfo
description: 获取角色的初始生成点信息。
tags: ["角色"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取角色的初始生成点信息。

| 参数名            | 说明                                         |
| ----------------- | -------------------------------------------- |
| actorid           | 要获取生成信息的角色 ID                      |
| &skin             | 整型变量（引用传递），用于存储角色皮肤 ID    |
| &Float:spawnX     | 浮点变量（引用传递），用于存储生成点 X 坐标  |
| &Float:spawnY     | 浮点变量（引用传递），用于存储生成点 Y 坐标  |
| &Float:spawnZ     | 浮点变量（引用传递），用于存储生成点 Z 坐标  |
| &Float:spawnAngle | 浮点变量（引用传递），用于存储生成点朝向角度 |

## 返回值

若角色存在且有效返回 true，否则返回 false。

## 示例代码

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 1153.9640, -1772.3915, 16.5920, 0.0000);  // 创建皮肤ID为179的角色

    new skin,
        Float:spawnX,
        Float:spawnY,
        Float:spawnZ,
        Float:spawnAngle;

    GetActorSpawnInfo(gMyActor, skin, spawnX, spawnY, spawnZ, spawnAngle);
    return 1;
}
```

## 相关函数

- [CreateActor](CreateActor): 创建角色（静态 NPC）
- [GetActorPos](GetActorPos): 获取角色的坐标位置
- [SetActorPos](SetActorPos): 设置角色的坐标位置
- [GetActorSkin](GetActorSkin): 获取角色皮肤 ID
- [SetActorSkin](SetActorSkin): 设置角色皮肤 ID
