---
title: OnNPCModeExit
description: Este callback es llamado cuando un script de un NPC finaliza (o deja de estar cargado).
tags: ["npc"]
---

## Descripción

Este callback es llamado cuando un script de un NPC finaliza (o deja de estar cargado).


## Ejemplos

```c
public OnNPCModeExit()
{
    print("NPC script: finalizó");
    return 1;
}
```


## Callbacks relacionados

Los siguientes callbacks pueden ser útiles, ya que están relacionados de alguna forma u otra con OnNPCModeExit. 

- [OnNPCModeInit](OnNPCModeInit): Este callback es llamado cuando un script de un NPC es cargado (o inicia).
