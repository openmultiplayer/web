---
title: OnNPCFinishNode
sidebar_label: OnNPCFinishNode
description: "Este callback é chamado quando um NPC termina de navegar em um nó completo."
tags: ["npc", "node", "navigation"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Esse callback é chamado quando um NPC termina de navegar em um nó completo durante a movimentação baseada em nó.

| Nome | Descrição |
| ------ | ---------------------------------------- |
| npcid | O ID do NPC que finalizou o nó |
| nodeid | O ID do nó que foi concluído |

## Exemplos

```c
public OnNPCFinishNode(npcid, nodeid)
{
    printf("[NPC] NPC %d finished node %d", npcid, nodeid);

    // Notifique os jogadores que estão rastreando este NPC
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d finished node %d", npcid, nodeid);
        }
    }
    return 1;
}
```
## Notas

- Este callback só é chamado quando NPCs está usando navegação baseada em nó via `NPC_PlayNode`
- É chamado quando o NPC completou a navegação por todos os pontos do nó
- A navegação do nó para automaticamente quando este callback é acionado

## Funções Relacionadas

As funções a seguir podem ser úteis, pois estão relacionadas a esse callback de uma forma ou de outra.

- [NPC_PlayNode](../functions/NPC_PlayNode): Iniciar navegação baseada em nó NPC
- [NPC_StopPlayingNode](../functions/NPC_StopPlayingNode): Interrompe a navegação do nó NPC
- [NPC_IsPlayingNode](../functions/NPC_IsPlayingNode): Verifique se NPC está navegando em um nó
- [NPC_OpenNode](../functions/NPC_OpenNode): Abra um arquivo de nó de navegação

## Callbacks Relacionadas

- [OnNPCFinishNodePoint](OnNPCFinishNodePoint): Chamado quando NPC atinge um ponto específico em um nó
- [OnNPCChangeNode](OnNPCChangeNode): Chamado quando NPC tenta alterar nós
- [OnNPCFinishMove](OnNPCFinishMove): Chamado quando NPC finaliza qualquer tipo de movimento
