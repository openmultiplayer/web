---
title: OnNPCSpawn
description: Tinatawag ang callback na ito kapag nagkaroon ng NPC.
tags: ["npc"]
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## Description

Tinatawag ang callback na ito kapag nagkaroon ng NPC.


## Examples

```c
public OnNPCSpawn()
{
    print("NPC spawned");
    SendChat("Hello World. I'm a bot.");
    return 1;
}
```