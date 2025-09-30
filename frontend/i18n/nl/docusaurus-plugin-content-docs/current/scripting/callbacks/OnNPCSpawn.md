---
title: OnNPCSpawn
sidebar_label: OnNPCSpawn
description: Deze callback wordt aangeroepen wanneer een NPC spawnt.
tags: ["npc"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een NPC spawnt.

## Voorbeelden

```c
public OnNPCSpawn()
{
    print("NPC spawned");
    SendChat("Hello World. I'm a bot.");
    return 1;
}
```
