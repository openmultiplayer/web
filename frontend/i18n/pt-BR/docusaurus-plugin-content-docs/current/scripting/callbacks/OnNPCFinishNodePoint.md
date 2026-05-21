---
title: OnNPCFinishNodePoint
sidebar_label: OnNPCFinishNodePoint
description: "Esse callback é chamado quando um NPC atinge um ponto específico durante a navegação baseada em nó."
tags: ["npc", "node", "navigation"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Esse callback é chamado quando um NPC atinge um ponto específico durante a navegação baseada em nó.

| Nome | Descrição |
| ------- | --------------------------------------------- |
| npcid | O ID do NPC que atingiu o ponto do nó |
| nodeid | O ID do nó que está sendo navegado |
| pointid | O ID do ponto específico que foi alcançado |

## Exemplos

```c
public OnNPCFinishNodePoint(npcid, nodeid, pointid)
{
    // Notifique os jogadores que estão rastreando este NPC
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            SendClientMessage(playerid, 0xFFFF00FF, "NPC %d reached node %d point %d", npcid, nodeid, pointid);
        }
    }
    return 1;
}
```
## Notas

- Este callback só é chamado quando NPCs está usando navegação baseada em nó via `NPC_PlayNode`
- É chamado cada vez que NPC atinge um waypoint dentro do nó
- O `pointid` corresponde ao índice de waypoint específico dentro do arquivo do nó

## Funções Relacionadas

As funções a seguir podem ser úteis, pois estão relacionadas a esse callback de uma forma ou de outra.

- [NPC_PlayNode](../functions/NPC_PlayNode): Iniciar navegação baseada em nó NPC
- [NPC_PausePlayingNode](../functions/NPC_PausePlayingNode): Pausar a navegação do nó NPC
- [NPC_ResumePlayingNode](../functions/NPC_ResumePlayingNode): Retomar navegação do nó pausado
- [NPC_StopPlayingNode](../functions/NPC_StopPlayingNode): Interrompe a navegação do nó NPC

## Callbacks Relacionadas

- [OnNPCFinishNode](OnNPCFinishNode): Chamado quando NPC termina de navegar em um nó completo
- [OnNPCChangeNode](OnNPCChangeNode): Chamado quando NPC tenta alterar nós
- [OnNPCFinishMove](OnNPCFinishMove): Chamado quando NPC finaliza qualquer tipo de movimento
