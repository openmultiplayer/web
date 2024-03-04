---
title: OnNPCSpawn
description: 当npc生成时调用此回调。
tags: []
---

## 描述

当 npc 生成时调用此回调。

## 案例

```c
public OnNPCSpawn()
{
    print("NPC 生成了");
    SendChat("你好世界. 我是个机器人.");
    return 1;
}
```
