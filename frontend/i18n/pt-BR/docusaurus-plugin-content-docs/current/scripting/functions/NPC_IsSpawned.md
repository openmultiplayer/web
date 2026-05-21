---
title: NPC_IsSpawned
sidebar_label: NPC_IsSpawned
description: "Verifica se um NPC foi gerado no mundo do jogo."
tags: ["npc", "spawn"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Verifica se um NPC foi gerado no mundo do jogo.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna `true` se NPC for gerado, `false` caso contrário.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkspawned", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isSpawned = NPC_IsSpawned(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is spawned: %s", npcid, isSpawned ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```
## Notas

- É diferente de [NPC_IsValid](NPC_IsValid), que verifica se NPC existe

## Funções Relacionadas

- [NPC_Spawn](NPC_Spawn): Gera um NPC
- [NPC_Respawn](NPC_Respawn): Reaparece um NPC
- [NPC_IsValid](NPC_IsValid): Verifique se NPC é válido
- [NPC_IsDead](NPC_IsDead): Verifique se NPC está morto

## Callbacks Relacionadas

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Chamado quando NPC surge
- [OnNPCRespawn](../callbacks/OnNPCRespawn): Chamado quando NPC reaparece
