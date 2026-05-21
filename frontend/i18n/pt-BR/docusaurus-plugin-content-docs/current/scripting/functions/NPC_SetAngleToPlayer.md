---
title: NPC_SetAngleToPlayer
sidebar_label: NPC_SetAngleToPlayer
description: "Gira um NPC para enfrentar um jogador específico."
tags: ["npc", "angle", "player"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Gira um NPC para enfrentar um jogador específico usando a posição atual do jogador.

| Nome | Descrição |
| -------- | ---------------------------------------------- |
| npcid | O ID do NPC.                             |
| playerid | O ID do jogador que o NPC deverá enfrentar. |

## Retornos

Retorna `true` se NPC foi girado com sucesso, `false` caso contrário.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/lookatme", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        if (!IsPlayerConnected(playerid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid player.");

        NPC_SetAngleToPlayer(npcid, playerid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is now facing you.", npcid);
        return 1;
    }
    return 0;
}
```
## Notas

:::warning

- Esta função realiza uma única rotação; chame-o novamente para manter o NPC voltado para um jogador em movimento.
- O jogador deve estar conectado, caso contrário o NPC não girará.
- Utiliza internamente [NPC_SetAngleToPos](NPC_SetAngleToPos) com a posição atual do jogador.

:::

## Funções Relacionadas

- [NPC_SetAngleToPos](NPC_SetAngleToPos): Enfrente uma posição específica.
- [NPC_SetFacingAngle](NPC_SetFacingAngle): Defina um ângulo numérico.
- [NPC_GetFacingAngle](NPC_GetFacingAngle): Obtenha o ângulo de visão do NPC.
- [NPC_MoveToPlayer](NPC_MoveToPlayer): Mova o NPC em direção a um jogador.
