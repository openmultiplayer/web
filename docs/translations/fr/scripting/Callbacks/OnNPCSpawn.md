---
title: OnNPCSpawn
description: Ce rappel est appelé lorsqu'un PNJ apparaît.
tags: ["npc"]
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## Description

Ce rappel est appelé lorsqu'un PNJ apparaît.

## Exemples

```c
public OnNPCSpawn()
{
    print("PNJ apparu");
    SendChat("Bonjour tout le monde. Je suis un bot.");
    return 1;
}
```
