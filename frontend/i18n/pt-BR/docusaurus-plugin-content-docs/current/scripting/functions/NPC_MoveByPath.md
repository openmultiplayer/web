---
title: NPC_MoveByPath
sidebar_label: NPC_MoveByPath
description: "Faz com que um NPC siga um caminho predefinido."
tags: ["npc", "movement", "path"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Faz com que um NPC siga um caminho predefinido com várias opções de movimento.

| Nome | Descrição |
| --------- | -------------------------------------------------- |
| npcid | O ID do NPC |
| pathid | O ID do caminho a seguir |
| moveType | O tipo de movimento (padrão: NPC_MOVE_TYPE_JOG) |
| moveSpeed | Velocidade de movimento (padrão: NPC_MOVE_SPEED_AUTO) |
| reversed | Se deve seguir o caminho inverso (padrão: false) |

## Retornos

Retorna `true` se NPC começou a seguir o caminho, `false` caso contrário.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
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

            StopPlayerPatrolTimer(playerid);
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
```
## Notas

- O caminho deve ser criado com `NPC_CreatePath` e conter pelo menos um ponto antes de chamar esta função
- Use `NPC_AddPointToPath` para construir a rota e `NPC_ClearPath` se precisar redefini-la
- Defina `reversed = true` para que NPC percorra o caminho na ordem oposta
- Retorna `false` se NPC for inválido, já estiver executando uma ação incompatível ou se o caminho não puder ser seguido

## Funções Relacionadas

- [NPC_CreatePath](NPC_CreatePath): Crie um novo caminho
- [NPC_AddPointToPath](NPC_AddPointToPath): Adicionar ponto ao caminho
- [NPC_ClearPath](NPC_ClearPath): Remove todos os pontos de um caminho
- [NPC_StopMove](NPC_StopMove): Interrompe o movimento do caminho
- [NPC_GetCurrentPathPointIndex](NPC_GetCurrentPathPointIndex): Obtenha o ponto atual

## Callbacks Relacionadas

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): Chamado quando NPC termina de se mover ao longo de um caminho
- [OnNPCFinishMovePathPoint](../callbacks/OnNPCFinishMovePathPoint): Chamado quando NPC atinge cada waypoint
- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): Chamado quando NPC finaliza qualquer movimento
