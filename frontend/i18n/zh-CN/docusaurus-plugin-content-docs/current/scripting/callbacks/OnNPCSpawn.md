---
title: OnNPCSpawn
sidebar_label: OnNPCSpawn
description: 当NPC生成时触发该回调
tags: ["npc"]
---

## 描述

当NPC生成时触发该回调。

## 示例

```c
public OnNPCSpawn()
{
    print("NPC已生成");
    SendChat("大家好，我是一个机器人。");
    return 1;
}
```
