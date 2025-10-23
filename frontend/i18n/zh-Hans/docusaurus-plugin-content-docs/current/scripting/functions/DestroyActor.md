---
title: DestroyActor
sidebar_label: DestroyActor
description: 销毁通过CreateActor创建的角色。
tags: ["角色"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

销毁通过 CreateActor 创建的角色。

| 参数名  | 说明                                         |
| ------- | -------------------------------------------- |
| actorid | 要销毁的角色 ID。该 ID 由 CreateActor 返回。 |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败。指定的角色 ID 不存在。

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

- [CreateActor](CreateActor): 创建角色（静态 NPC）
