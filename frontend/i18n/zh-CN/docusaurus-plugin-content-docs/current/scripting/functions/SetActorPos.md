---
title: SetActorPos
sidebar_label: SetActorPos
description: 设置演员的坐标位置。
tags: ["演员"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

设置演员的坐标位置。

| 参数    | 说明                                             |
| ------- | ------------------------------------------------ |
| actorid | 要设置坐标位置的演员 ID，由 CreateActor 函数返回 |
| Float:x | X 坐标值                                         |
| Float:y | Y 坐标值                                         |
| Float:z | Z 坐标值                                         |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（指定的演员不存在）

## 示例代码

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(24, 2050.7544, -1920.0621, 13.5485, -180.0);
    return 1;
}

// 其他位置
SetActorPos(gMyActor, 2062.2332, -1908.1423, 13.5485);
```

## 注意事项

:::tip

使用[CreateActor](CreateActor)创建演员时，已经指定了其坐标位置。除非需要后续调整位置，否则无需使用此函数

:::

## 相关函数

- [GetActorPos](GetActorPos): 获取演员的坐标位置
- [CreateActor](CreateActor): 创建演员（静态 NPC）
