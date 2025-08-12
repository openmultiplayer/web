---
title: OnNPCSpawn
sidebar_label: OnNPCSpawn
description: این کالبک زمانی فراخوانده می‌شود که NPC متولد شود.
tags: ["npc"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

این کالبک زمانی فراخوانده می‌شود که NPC متولد شود.

## مثال‌ها

</div>

```c
public OnNPCSpawn()
{
    print("NPC spawned");
    SendChat("Hello World. I'm a bot.");
    return 1;
}
```