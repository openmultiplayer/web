---
title: OnNPCSpawn
description: Essa callback é executada quando o NPC é spawnado.
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## Descrição

Essa callback é executada quando o NPC é spawnado.


## Exemplos

```c
public OnNPCSpawn()
{
    print("NPC foi spawnado!");
    SendChat("Olá mundo! Eu sou um BOT.");
    return 1;
}
```
