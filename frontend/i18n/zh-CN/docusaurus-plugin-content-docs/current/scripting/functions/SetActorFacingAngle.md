---
title: SetActorFacingAngle
sidebar_label: SetActorFacingAngle
description: 设置角色的朝向角度。
tags: ["角色"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

设置角色的朝向角度。

| 参数名      | 描述                                             |
| ----------- | ------------------------------------------------ |
| actorid     | 要设置朝向角度的角色 ID，由 CreateActor 函数返回 |
| Float:angle | 要设置的朝向角度值（单位：度）                   |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败。指定的角色不存在

## 示例代码

```c
new MyActor;

public OnGameModeInit()
{
    MyActor = CreateActor(38, 0.0, 0.0, 3.0, 90.0);
    return 1;
}

// 其他位置
SetActorFacingAngle(MyActor, 180.0);
```

## 注意事项

:::tip

使用[CreateActor](CreateActor)创建角色时，已经指定了其朝向角度。除非需要后续调整方向，否则无需使用此函数

:::

:::warning

玩家只有在角色被重新流加载时才能看到朝向角度的变化

:::

## 相关函数

- [GetActorFacingAngle](GetActorFacingAngle): 获取角色的朝向角度
- [SetActorPos](SetActorPos): 设置角色的坐标位置
