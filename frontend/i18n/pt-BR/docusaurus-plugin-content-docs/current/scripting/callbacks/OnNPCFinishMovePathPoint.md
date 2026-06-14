---
title: OnNPCFinishMovePathPoint
sidebar_label: OnNPCFinishMovePathPoint
description: "Chamado quando um NPC termina de se mover para um ponto específico em um caminho."
tags: ["npc", "path", "movement"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Esse callback é chamado quando um NPC termina de se mover para um ponto específico em um caminho.

| Nome | Descrição |
| ------- | ---------------------------------------------- |
| npcid | O ID do NPC que finalizou o caminho ponto |
| pathid | O ID do caminho que está sendo seguido |
| pointid | O índice do ponto alcançado |

## Exemplos

```c
public OnNPCFinishMovePathPoint(npcid, pathid, pointid)
{
    // Encontre todos os jogadores rastreando este NPC
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            SendClientMessage(playerid, 0xFFFF00FF, "NPC %d reached point %d on path %d", npcid, pointid, pathid);
        }
    }
    return 1;
}

```
## Notas

- Este callback é acionado para cada ponto do caminho
- Use [OnNPCFinishMovePath](OnNPCFinishMovePath) para detectar quando todo o caminho for concluído
- O NPC deve estar se movendo ao longo de um caminho usando [NPC_MoveByPath](../functions/NPC_MoveByPath)

## Funções Relacionadas

- [NPC_MoveByPath](../functions/NPC_MoveByPath): Faça NPC seguir um caminho
- [NPC_CreatePath](../functions/NPC_CreatePath): Crie um novo caminho
- [NPC_AddPointToPath](../functions/NPC_AddPointToPath): Adicionar um ponto a um caminho
- [NPC_GetCurrentPathPointIndex](../functions/NPC_GetCurrentPathPointIndex): Obtenha o ponto do caminho atual

## Callbacks Relacionadas

- [OnNPCFinishMovePath](OnNPCFinishMovePath): Chamado quando NPC termina o caminho inteiro
- [OnNPCFinishMove](OnNPCFinishMove): Chamado quando NPC finaliza qualquer movimento
