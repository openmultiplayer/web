---
title: OnNPCSpawn  
sidebar_label: OnNPCSpawn  
description: Callback này được gọi khi một NPC được sinh ra.  
tags: ["npc"]  
---

## Mô Tả

Callback này được gọi khi một NPC được sinh ra.

## Ví Dụ

```c
public OnNPCSpawn()
{
    print("NPC đã được sinh ra");
    SendChat("Chào thế giới. Tôi là một bot.");
    return 1;
}
```