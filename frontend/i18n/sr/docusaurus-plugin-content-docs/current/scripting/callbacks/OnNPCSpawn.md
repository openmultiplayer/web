---
title: OnNPCSpawn
description: Ова повратна функција се позива када се NPC појави.
tags: ["npc"]
---

## Опис

Ова повратна функција се позива када се NPC појави.

## Пример

```c
public OnNPCSpawn()
{
    print("NPC spawned");
    SendChat("Hello World. I'm a bot.");
    return 1;
}
```
