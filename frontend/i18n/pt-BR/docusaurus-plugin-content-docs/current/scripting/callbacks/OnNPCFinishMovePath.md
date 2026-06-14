---
title: OnNPCFinishMovePath
sidebar_label: OnNPCFinishMovePath
description: "Esse callback é chamado quando um NPC termina de se mover ao longo de um caminho predefinido."
tags: ["npc", "movement", "path"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Esse callback é chamado quando um NPC termina de se mover ao longo de um caminho predefinido.

| Nome | Descrição |
| ------ | ---------------------------------------- |
| npcid | O ID do NPC que finalizou o caminho |
| pathid | O ID do caminho que foi concluído |

## Exemplos

```c
public OnNPCFinishMovePath(npcid, pathid)
{
    // Encontre todos os jogadores rastreando este NPC
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d finished moving along path %d", npcid, pathid);
        }
    }
    return 1;
}

```
## Notas

- Este callback é acionado quando um NPC atinge o ponto final de um caminho
- O NPC para de se mover automaticamente quando este callback é chamado

## Funções Relacionadas

- [NPC_MoveByPath](../functions/NPC_MoveByPath): Faça NPC seguir um caminho
- [NPC_CreatePath](../functions/NPC_CreatePath): Crie um novo caminho de movimento
- [NPC_IsValidPath](../functions/NPC_IsValidPath): Verifique se o caminho é válido

## Callbacks Relacionadas

- [OnNPCFinishMove](OnNPCFinishMove): Chamado quando NPC finaliza qualquer movimento
- [OnNPCFinishNode](OnNPCFinishNode): Chamado quando NPC termina a navegação do nó
- [OnNPCFinishNodePoint](OnNPCFinishNodePoint): Chamado quando NPC atinge um ponto de nó
