---
title: NPC_IsMovingToPlayer
sidebar_label: NPC_IsMovingToPlayer
description: "Verifica se um NPC está se movendo em direção a um jogador específico."
tags: ["npc", "player", "movement"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Verifica se um NPC está se movendo em direção a um jogador específico.

| Nome | Descrição |
| -------- | ----------------------------- |
| npcid | O ID do NPC |
| playerid | O ID do jogador a ser verificado |

## Retornos

Retorna `true` se NPC estiver se movendo em direção ao jogador especificado, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkmovingtowardme", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isMovingToPlayer = NPC_IsMovingToPlayer(npcid, playerid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is moving toward you: %s", npcid, isMovingToPlayer ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```
## Notas

- Esta função verifica se o NPC foi comandado para se mover em direção a um jogador específico usando [NPC_MoveToPlayer](NPC_MoveToPlayer)
- Retorna false se NPC não estiver se movendo ou estiver se movendo em direção a um alvo diferente

## Funções Relacionadas

- [NPC_MoveToPlayer](NPC_MoveToPlayer): Faça NPC se mover em direção a um jogador
- [NPC_IsMoving](NPC_IsMoving): Verifique se NPC está se movendo
- [NPC_StopMove](NPC_StopMove): Parar o movimento NPC
- [NPC_GetPlayerMovingTo](NPC_GetPlayerMovingTo): Obtenha o jogador ID para o qual NPC está se movendo

## Callbacks Relacionadas

- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): Chamado quando NPC termina o movimento
