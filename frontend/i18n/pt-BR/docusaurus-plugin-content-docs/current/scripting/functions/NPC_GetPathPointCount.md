---
title: NPC_GetPathPointCount
sidebar_label: NPC_GetPathPointCount
description: "Obtém o número de pontos em um caminho NPC."
tags: ["npc", "path"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém o número de pontos em um caminho NPC.

| Nome | Descrição |
| ------ | ------------------ |
| pathid | O ID do caminho |

## Retornos

Retorna o número de pontos no caminho ou 0 se o caminho for inválido.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkpathpointcount", true))
    {
        new pathid = PlayerPatrolPath[playerid];
        if (pathid == INVALID_PATH_ID)
            return SendClientMessage(playerid, 0xFFFF00FF, "No patrol path assigned.");

        new count = NPC_GetPathPointCount(pathid);

        SendClientMessage(playerid, 0x00FF00FF, "Path %d has %d points", pathid, count);
        return 1;
    }
    return 0;
}
```
## Notas

- Retorna 0 se o caminho for inválido ou vazio

## Funções Relacionadas

- [NPC_AddPointToPath](NPC_AddPointToPath): Adicionar ponto ao caminho
- [NPC_RemovePointFromPath](NPC_RemovePointFromPath): Remover ponto do caminho
- [NPC_GetPathPoint](NPC_GetPathPoint): Obtenha dados de pontos específicos
- [NPC_ClearPath](NPC_ClearPath): Remova todos os pontos do caminho

## Callbacks Relacionadas

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): Chamado quando NPC termina o caminho
