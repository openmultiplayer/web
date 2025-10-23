---
title: IsValidActor
sidebar_label: IsValidActor
description: 检测角色ID是否有效。
tags: ["角色"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

检测指定角色 ID 是否有效。

| 参数名  | 说明            |
| ------- | --------------- |
| actorid | 要检测的角色 ID |

## 返回值

**true** - 角色有效

**false** - 角色无效

## 示例代码

```c
new gMyActor; // 声明角色存储变量

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // 在武器商店创建销售员角色

    if (IsValidActor(gMyActor))
    {
        SetActorHealth(gMyActor, 100.0); // 设置角色生命值
    }
    return 1;
}
```

## 相关函数

- [CreateActor](CreateActor): 创建新角色
- [GetActorPoolSize](GetActorPoolSize): 获取服务器最大角色 ID
- [SetActorHealth](SetActorHealth): 设置角色生命值
