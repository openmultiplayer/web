---
title: OnNPCSpawn
description: Este callback es llamado cuando un NPC se genera.
tags: ["npc"]
---

## Descripción

Este callback es llamado cuando un NPC se genera.


## Ejemplos

```c
public OnNPCSpawn()
{
    print("NPC generado");
    SendChat("Hola Mundo. Soy un bot.");
    return 1;
}
```
