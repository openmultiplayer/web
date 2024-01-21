---
title: OnNPCSpawn
description: This callback is called when a NPC spawned.
tags: ["npc"]
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## Description

This callback is called when a NPC spawned.


## Examples

```pawn
public OnNPCSpawn()
{
    print("NPC spawned");
    SendChat("Hello World. I'm a bot.");
    return 1;
}
```
