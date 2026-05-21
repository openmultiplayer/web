---
title: OnNPCDeath
sidebar_label: OnNPCDeath
description: "Esse callback é chamado quando um NPC morre."
tags: ["npc"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Esse callback é chamado quando um NPC morre.

| Nome | Descrição |
| ------------- | --------------------------------------------------------------------------- |
| npcid | O ID do NPC que morreu |
| killerid | O ID do jogador/NPC que matou o NPC (ou INVALID_PLAYER_ID se nenhum) |
| WEAPON:reason | O motivo da morte (arma ID ou causa da morte) |

## Exemplos

```c
public OnNPCDeath(npcid, killerid, WEAPON:reason)
{
    printf("[NPC] NPC %d died (killer: %d, weapon: %d)", npcid, killerid, _:reason);

    // Notifique os jogadores que estão rastreando este NPC
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            if (killerid == INVALID_PLAYER_ID)
            {
                SendClientMessage(playerid, 0xFF0000FF, "Your tracked NPC %d died (weapon: %d)", npcid, _:reason);
            }
            else
            {
                SendClientMessage(playerid, 0xFF0000FF, "Your tracked NPC %d was killed by player %d (weapon: %d)", npcid, killerid, _:reason);
            }
        }
    }
    return 1;
}
```
## Notas

- O parâmetro `killerid` será `INVALID_PLAYER_ID` se a morte do NPC não tiver sido causada por um jogador
- O parâmetro `reason` contém a arma ID que causou a morte (255 por causas desconhecidas/outras)

## Funções Relacionadas

As funções a seguir podem ser úteis, pois estão relacionadas a esse callback de uma forma ou de outra.

- [NPC_Kill](../functions/NPC_Kill): Mate um NPC
- [NPC_Respawn](../functions/NPC_Respawn): Reaparece um NPC morto
- [NPC_GetHealth](../functions/NPC_GetHealth): Obtenha a saúde de NPC
- [NPC_SetHealth](../functions/NPC_SetHealth): Define a saúde de NPC

## Callbacks Relacionadas

- [OnNPCSpawn](OnNPCSpawn): Chamado quando um NPC surge
- [OnNPCRespawn](OnNPCRespawn): Chamado quando um NPC reaparece
- [OnNPCTakeDamage](OnNPCTakeDamage): Chamado quando um NPC sofre dano
- [OnPlayerDeath](OnPlayerDeath): Chamado quando um jogador morre
