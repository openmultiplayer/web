---
title: DestroyActor
sidebar_label: DestroyActor
description: 销毁通过CreateActor创建的演员。
tags: ["演员"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

销毁通过 CreateActor 创建的演员。

| 参数    | 说明                                         |
| ------- | -------------------------------------------- |
| actorid | 要销毁的演员 ID。该 ID 由 CreateActor 返回。 |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败。指定的演员 ID 不存在。

## 示例

```c
new MyActor;

public OnFilterScriptInit()
{
    MyActor = CreateActor(0, 0.0, 0.0, 3.0, 0.0);
    return 1;
}

public OnFilterScriptExit()
{
    DestroyActor(MyActor);
    return 1;
}
```

## 相关函数

- [CreateActor](CreateActor): 创建演员（静态 NPC）
