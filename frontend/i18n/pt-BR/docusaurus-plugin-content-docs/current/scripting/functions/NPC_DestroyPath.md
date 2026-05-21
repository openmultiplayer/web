---
title: NPC_DestroyPath
sidebar_label: NPC_DestroyPath
description: "Destrói um caminho NPC específico."
tags: ["npc", "path"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Destrói um caminho NPC específico, tornando-o inválido.

| Nome | Descrição |
| ------ | ----------------------------- |
| pathid | O ID do caminho para destruir |

## Retornos

Retorna `true` em caso de sucesso, `false` em caso de falha.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/deletepatrol", true))
    {
        // Verifique se o caminho é válido primeiro
        if (!NPC_IsValidPath(PlayerPatrolPath[playerid]))
        {
            SendClientMessage(playerid, 0xFF0000FF, "No valid patrol path to delete.");
            return 1;
        }

        // Obtenha quantos pontos havia nele
        new count = NPC_GetPathPointCount(PlayerPatrolPath[playerid]);

        // Tente destruí-lo
        if (NPC_DestroyPath(PlayerPatrolPath[playerid]))
        {
            SendClientMessage(playerid, 0x00FF00FF, "Destroyed path %d (%d points removed).", PlayerPatrolPath[playerid], count);

            // Redefinir a variável de caminho do jogador, pois agora ela é inválida
            PlayerPatrolPath[playerid] = INVALID_PATH_ID;
            StopPlayerPatrolTimer(playerid);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "Failed to destroy patrol path.");
        }

        return 1;
    }
    return 0;
}
```
## Notas

- O caminho ID torna-se inválido após destruição
- NPCs que atualmente segue este caminho irá parar de se mover, pois todos os pontos no caminho foram removidos

## Funções Relacionadas

- [NPC_CreatePath](NPC_CreatePath): Crie um novo caminho
- [NPC_IsValidPath](NPC_IsValidPath): Verifique se um caminho é válido
- [NPC_DestroyAllPath](NPC_DestroyAllPath): Destrua todos os caminhos
- [NPC_GetPathCount](NPC_GetPathCount): Obtenha o número total de caminhos

## Callbacks Relacionadas

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): Chamado quando NPC termina um caminho
