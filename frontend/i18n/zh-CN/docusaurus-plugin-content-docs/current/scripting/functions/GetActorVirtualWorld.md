---
title: GetActorVirtualWorld
sidebar_label: GetActorVirtualWorld
description: 获取演员所在的虚拟世界。
tags: ["演员"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

获取演员所在的虚拟世界。

| 参数名  | 说明                    |
| ------- | ----------------------- |
| actorid | 要获取虚拟世界的演员 ID |

## 返回值

返回演员所在的虚拟世界 ID（默认值为 0）。

若指定演员不存在也会返回 0。

## 示例代码

```c
new MyActor;

public OnGameModeInit()
{
    MyActor = CreateActor(69, 0.0, 0.0, 3.0, 0.0);  // 创建演员（皮肤ID 69）

    SetActorVirtualWorld(MyActor, 20);  // 设置演员虚拟世界为20
    return 1;
}

// 在其他地方检测虚拟世界
if (GetActorVirtualWorld(MyActor) == 20)
{
    // 执行相关操作（当演员在虚拟世界20时触发）
}
```

## 相关函数

- [SetActorVirtualWorld](SetActorVirtualWorld): 设置演员所在的虚拟世界
