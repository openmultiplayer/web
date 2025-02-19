---
title: OnNPCSpawn
sidebar_label: OnNPCSpawn
description: This callback is called when a NPC spawned.
tags: ["npc"]
---

## Description

This callback is called when a NPC spawned.


## Examples

```c
public OnNPCSpawn()
{
    print("NPC spawned");
    SendChat("Hello World. I'm a bot.");
    return 1;
}
```
