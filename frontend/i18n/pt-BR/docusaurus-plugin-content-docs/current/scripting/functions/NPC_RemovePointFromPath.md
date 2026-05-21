---
title: NPC_RemovePointFromPath
sidebar_label: NPC_RemovePointFromPath
description: "Remove um waypoint de um caminho NPC."
tags: ["npc", "path"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Remove um waypoint de um caminho NPC.

| Nome | Descrição |
| ----------- | -------------------------------- |
| pathid | O ID do caminho |
| point_index | O índice do ponto a ser removido |

## Retornos

Retorna `true` em caso de sucesso, `false` em caso de falha.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strncmp(cmdtext, "/removepatrolpoint ", 19, true))
    {
        if (!NPC_IsValidPath(PlayerPatrolPath[playerid]))
        {
            SendClientMessage(playerid, 0xFF0000FF, "No valid patrol path. Use /createpatrol first.");
            return 1;
        }

        new pointIndex = strval(cmdtext[19]);
        new totalPoints = NPC_GetPathPointCount(PlayerPatrolPath[playerid]);

        if (pointIndex < 0 || pointIndex >= totalPoints)
        {
            SendClientMessage(playerid, 0xFF0000FF, "Invalid point index. Valid range: 0-%d", totalPoints - 1);
            return 1;
        }

        if (NPC_RemovePointFromPath(PlayerPatrolPath[playerid], pointIndex))
        {
            SendClientMessage(playerid, 0x00FF00FF, "Removed point %d from path %d (now has %d points)", pointIndex, PlayerPatrolPath[playerid], totalPoints - 1);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "Failed to remove point %d from path", pointIndex);
        }
        return 1;
    }
    return 0;
}
```
## Notas

- Os índices de pontos começam em 0
- A remoção de um ponto deslocará todos os pontos subsequentes para baixo em um índice
- Se o índice especificado estiver fora dos limites, a função retornará `false`
- Você não pode remover pontos de um caminho inválido

## Funções Relacionadas

- [NPC_AddPointToPath](NPC_AddPointToPath): Adicionar um ponto a um caminho
- [NPC_ClearPath](NPC_ClearPath): Limpa todos os pontos de um caminho
- [NPC_GetPathPointCount](NPC_GetPathPointCount): Obtenha o número de pontos em um caminho
- [NPC_GetPathPoint](NPC_GetPathPoint): Obtenha informações sobre um ponto de caminho

## Callbacks Relacionadas

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): Chamado quando NPC termina de se mover ao longo de um caminho
- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): Chamado quando NPC finaliza qualquer movimento
