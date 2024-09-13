---
title: OnNPCModeInit.
description: Este callback es llamado cuando un NPC se cargó.
tags: ["npc"]
---

## Descripción

Este callabck es llamado cuando un NPC se cargó.


## Ejemplos

```c
public OnNPCModeInit()
{
    print("Se cargó el script del NPC.");
    return 1;
}
```

## Callbacks relacionados

Los siguientes callbacks pueden ser útiles, ya que están relacionados con OnNPCModeInit de alguna forma u otra.

- [OnNPCModeExit](OnNPCModeExit): Este callback es llamado cuando un script de un NPC finaliza.
