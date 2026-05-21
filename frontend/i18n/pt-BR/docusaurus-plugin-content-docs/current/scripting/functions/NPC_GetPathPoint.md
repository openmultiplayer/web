---
title: NPC_GetPathPoint
sidebar_label: NPC_GetPathPoint
description: "Obtém as coordenadas e o intervalo de parada de um ponto específico em um caminho NPC."
tags: ["npc", "path"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém as coordenadas e o intervalo de parada de um ponto específico em um caminho NPC.

| Nome | Descrição |
| ----------- | ---------------------------------------- |
| pathid | O ID do caminho |
| point_index | O índice do ponto (começando em 0) |
| &x | Variável para armazenar a coordenada X |
| &y | Variável para armazenar a coordenada Y |
| &z | Variável para armazenar a coordenada Z |
| &stopRange | Variável para armazenar o intervalo de parada |

## Retornos

Retorna `true` em caso de sucesso, `false` em caso de falha.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkpathpoint", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new pathid = PlayerPatrolPath[playerid];
        if (pathid == INVALID_PATH_ID)
            return SendClientMessage(playerid, 0xFFFF00FF, "No patrol path assigned.");

        new pointindex = NPC_GetCurrentPathPointIndex(npcid);
        new Float:x, Float:y, Float:z, Float:stopRange;

        if (!NPC_GetPathPoint(pathid, pointindex, x, y, z, stopRange))
            return SendClientMessage(playerid, 0xFFFF00FF, "Failed to get path point.");

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d path point %d: %.2f, %.2f, %.2f", npcid, pointindex, x, y, z);
        return 1;
    }
    return 0;
}
```
## Notas

- Todos os parâmetros coordenados e stopRange são passados por referência
- Os índices de pontos começam em 0
- Retorna false se o caminho ou índice de ponto for inválido

## Funções Relacionadas

- [NPC_AddPointToPath](NPC_AddPointToPath): Adicionar ponto ao caminho
- [NPC_RemovePointFromPath](NPC_RemovePointFromPath): Remover ponto do caminho
- [NPC_GetPathPointCount](NPC_GetPathPointCount): Obtenha número de pontos
- [NPC_IsValidPath](NPC_IsValidPath): Verifique se o caminho é válido

## Callbacks Relacionadas

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): Chamado quando NPC termina o caminho
