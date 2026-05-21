---
title: NPC_GetPlayerMovingTo
sidebar_label: NPC_GetPlayerMovingTo
description: "Obtém o ID do jogador para o qual um NPC está se movendo no momento."
tags: ["npc", "player", "movement"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém o ID do jogador para o qual um NPC está se movendo no momento.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna o ID do jogador que está sendo movido ou `INVALID_PLAYER_ID` se não estiver se movendo em direção a ninguém.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkwhonpcmoving", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new targetid = NPC_GetPlayerMovingTo(npcid);

        if (targetid == INVALID_PLAYER_ID)
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d is not moving toward any player", npcid);
        else
        {
            new targetName[MAX_PLAYER_NAME];
            GetPlayerName(targetid, targetName, sizeof(targetName));
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d is moving toward player %s (ID %d)", npcid, targetName, targetid);
        }
        return 1;
    }
    return 0;
}
```
## Notas

- Retorna o jogador ID se o NPC estiver se movendo usando [NPC_MoveToPlayer](NPC_MoveToPlayer)
- Retorna `INVALID_PLAYER_ID` se NPC não estiver se movendo em direção a nenhum jogador
- Isso é diferente de mover para uma posição fixa com [NPC_Move](NPC_Move)

## Funções Relacionadas

- [NPC_MoveToPlayer](NPC_MoveToPlayer): Faça NPC se mover em direção a um jogador
- [NPC_IsMovingToPlayer](NPC_IsMovingToPlayer): Verifique se NPC está se movendo em direção a um jogador específico
- [NPC_IsMoving](NPC_IsMoving): Verifique se NPC está se movendo
- [NPC_GetPlayerAimingAt](NPC_GetPlayerAimingAt): Obtenha o jogador que NPC está visando

## Callbacks Relacionadas

- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): Chamado quando NPC termina o movimento
