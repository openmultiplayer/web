---
title: NPC_GetCurrentPathPointIndex
sidebar_label: NPC_GetCurrentPathPointIndex
description: "Obtém o índice do ponto do caminho atual para o qual um NPC está se movendo."
tags: ["npc", "path"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém o índice do ponto do caminho atual para o qual um NPC está se movendo.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna o índice do ponto do caminho atual para o qual NPC está se movendo.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    // Os comandos para criar caminhos e para criar pontos em caminhos

    if (!strcmp(cmdtext, "/startpatrol", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        new count = NPC_GetPathPointCount(PlayerPatrolPath[playerid]);

        if (NPC_IsValidPath(PlayerPatrolPath[playerid]))
        {
            NPC_MoveByPath(npcid, PlayerPatrolPath[playerid], NPC_MOVE_TYPE_WALK);
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d started patrol route with %d points", npcid, count);

            PlayerPatrolTimer[playerid] = SetTimerEx("CheckPathProgress", 2000, true, "i", playerid);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "Failed to start patrol route");
        }
        return 1;
    }
    return 0;
}

forward CheckPathProgress(playerid);
public CheckPathProgress(playerid)
{
    if (!IsPlayerConnected(playerid))
    {
        // Faça algo sobre isso
        return 0;
    }

    new npcid = PlayerNPC[playerid];
    if (npcid == INVALID_NPC_ID || !NPC_IsValid(npcid))
    {
        // Faça algo sobre isso
        return 0;
    }

    if (!NPC_IsValidPath(PlayerPatrolPath[playerid]))
    {
        // Faça algo sobre isso
        return 0;
    }

    new currentPoint = NPC_GetCurrentPathPointIndex(npcid);
    new totalPoints = NPC_GetPathPointCount(PlayerPatrolPath[playerid]);

    if (currentPoint != INVALID_NODE_ID)
    {
        SendClientMessage(playerid, 0xFFFF00FF, "NPC %d progress: Point %d of %d", npcid, currentPoint + 1, totalPoints);
    }
    return 1;
}

```
## Notas

- Retorna -1 se NPC não estiver seguindo um caminho
- Isso indica o ponto em que NPC está se movendo atualmente

## Funções Relacionadas

- [NPC_MoveByPath](NPC_MoveByPath): Faça NPC seguir um caminho
- [NPC_CreatePath](NPC_CreatePath): Crie um novo caminho
- [NPC_AddPointToPath](NPC_AddPointToPath): Adicionar ponto ao caminho
- [NPC_GetPathPointCount](NPC_GetPathPointCount): Obtenha total de pontos no caminho

## Callbacks Relacionadas

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): Chamado quando NPC termina o caminho
- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): Chamado quando NPC termina o movimento
