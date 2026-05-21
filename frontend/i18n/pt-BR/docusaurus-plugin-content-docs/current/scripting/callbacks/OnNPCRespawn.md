---
title: OnNPCRespawn
sidebar_label: OnNPCRespawn
description: "Este callback é chamado quando um NPC reaparece."
tags: ["npc"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Este callback é chamado quando um NPC reaparece.

| Nome | Descrição |
| ----- | -------------------------------- |
| npcid | O ID do NPC que reapareceu |

## Exemplos

```c
public OnNPCRespawn(npcid)
{
    printf("[NPC] NPC %d has respawned", npcid);

    // Notifique os jogadores que estão rastreando este NPC
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            SendClientMessage(playerid, 0x00FF00FF, "Your tracked NPC %d has respawned", npcid);
        }
    }
    return 1;
}
```
## Notas

- Este callback é chamado depois que NPC foi respawnado usando `NPC_Respawn`
- A saúde e a armadura do NPC são restauradas automaticamente durante o reaparecimento
- Qualquer movimento contínuo, reprodução, etc., são interrompidos ao reaparecer

## Funções Relacionadas

As funções a seguir podem ser úteis, pois estão relacionadas a esse callback de uma forma ou de outra.

- [NPC_Respawn](../functions/NPC_Respawn): Reaparece um NPC
- [NPC_Spawn](../functions/NPC_Spawn): Gera um NPC pela primeira vez
- [NPC_SetHealth](../functions/NPC_SetHealth): Definir a saúde de NPC
- [NPC_SetPosition](../functions/NPC_SetPosition): Defina a posição de NPC

## Callbacks Relacionadas

- [OnNPCSpawn](OnNPCSpawn): Chamado quando um NPC surge pela primeira vez
- [OnNPCDeath](OnNPCDeath): Chamado quando um NPC morre
- [OnPlayerSpawn](OnPlayerSpawn): Chamado quando um jogador surge
