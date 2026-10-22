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

## Funções Relacionadas

- [NPC_Respawn](../functions/NPC_Respawn): Reaparece um NPC morto
- [NPC_SetHealth](../functions/NPC_SetHealth): Define a saúde de NPC
- [NPC_SetWeapon](../functions/NPC_SetWeapon): Defina a arma de NPC

## Callbacks Relacionadas

- [OnNPCCreate](OnNPCCreate): Chamado quando um NPC é criado
- [OnNPCRespawn](OnNPCRespawn): Chamado quando um NPC reaparece
- [OnNPCDeath](OnNPCDeath): Chamado quando um NPC morre
- [OnPlayerSpawn](OnPlayerSpawn): Chamado quando um jogador surge
