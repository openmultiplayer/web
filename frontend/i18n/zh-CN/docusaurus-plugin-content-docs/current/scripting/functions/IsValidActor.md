---
title: IsValidActor
sidebar_label: IsValidActor
description: 检测演员ID是否有效。
tags: ["演员"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

检测指定演员 ID 是否有效。

| 参数名  | 说明            |
| ------- | --------------- |
| actorid | 要检测的演员 ID |

## 返回值

**true** - 演员有效

**false** - 演员无效

## 示例代码

```c
new gMyActor; // 声明演员存储变量

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // 在武器商店创建销售员演员

    if (IsValidActor(gMyActor))
    {
        SetActorHealth(gMyActor, 100.0); // 设置演员生命值
    }
    return 1;
}
```

## 相关函数

- [CreateActor](CreateActor): 创建新演员
- [GetActorPoolSize](GetActorPoolSize): 获取服务器最大演员 ID
- [SetActorHealth](SetActorHealth): 设置演员生命值
