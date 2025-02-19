---
title: OnNPCSpawn
sidebar_label: OnNPCSpawn
description: Essa callback é executada quando o NPC é spawnado.
tags: []
---

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
