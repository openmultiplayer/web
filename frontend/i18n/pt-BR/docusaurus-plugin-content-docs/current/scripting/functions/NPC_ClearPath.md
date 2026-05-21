---
title: NPC_ClearPath
sidebar_label: NPC_ClearPath
description: "Limpa todos os pontos de um caminho NPC."
tags: ["npc", "path"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Limpa todos os pontos de um caminho NPC, tornando-o vazio.

| Nome | Descrição |
| ------ | --------------------------- |
| pathid | O ID do caminho a ser limpo |

## Retornos

Retorna `true` em caso de sucesso, `false` em caso de falha.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/clearpatrol", true))
    {
        // Obtenha o número de pontos antes de limpar
        new count = NPC_GetPathPointCount(PlayerPatrolPath[playerid]);

        // Tente limpar o caminho
        if (NPC_ClearPath(PlayerPatrolPath[playerid]))
        {
            SendClientMessage(playerid, 0x00FF00FF, "Cleared path %d (%d points removed)", PlayerPatrolPath[playerid], count);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "Failed to clear path");
        }

        return 1;
    }
    return 0;
}
```
## Notas

- Esta função remove todos os waypoints do caminho especificado
- O caminho em si permanece válido e pode ser reutilizado
- Qualquer NPCs atualmente seguindo este caminho irá parar de se mover

## Funções Relacionadas

- [NPC_CreatePath](NPC_CreatePath): Crie um novo caminho
- [NPC_AddPointToPath](NPC_AddPointToPath): Adicionar um ponto a um caminho
- [NPC_RemovePointFromPath](NPC_RemovePointFromPath): Remover ponto específico
- [NPC_GetPathPointCount](NPC_GetPathPointCount): Obtenha o número de pontos no caminho

## Callbacks Relacionadas

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): Chamado quando NPC termina o caminho
