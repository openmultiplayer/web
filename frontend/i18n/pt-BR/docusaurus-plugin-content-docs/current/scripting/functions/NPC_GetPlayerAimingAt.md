---
title: NPC_GetPlayerAimingAt
sidebar_label: NPC_GetPlayerAimingAt
description: "Obtém o ID do jogador que um NPC está visando atualmente."
tags: ["npc", "player", "aiming", "weapon"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém o ID do jogador que um NPC está visando atualmente.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna o ID do jogador alvo, ou `INVALID_PLAYER_ID` se não estiver mirando em ninguém.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkwhonpcaiming", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new targetid = NPC_GetPlayerAimingAt(npcid);

        if (targetid == INVALID_PLAYER_ID)
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d is not aiming at any player", npcid);
        else
        {
            new targetName[MAX_PLAYER_NAME];
            GetPlayerName(targetid, targetName, sizeof(targetName));
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d is aiming at player %s (ID %d)", npcid, targetName, targetid);
        }
        return 1;
    }
    return 0;
}
```
## Notas

- Retorna o jogador ID se o NPC estiver mirando usando [NPC_AimAtPlayer](NPC_AimAtPlayer)
- Retorna `INVALID_PLAYER_ID` se NPC não estiver mirando em nenhum jogador

## Funções Relacionadas

- [NPC_AimAtPlayer](NPC_AimAtPlayer): Faça NPC mirar em um jogador
- [NPC_IsAimingAtPlayer](NPC_IsAimingAtPlayer): Verifique se NPC está visando um jogador específico
- [NPC_IsAiming](NPC_IsAiming): Verifique se NPC está mirando
- [NPC_GetPlayerMovingTo](NPC_GetPlayerMovingTo): Faça com que o jogador NPC esteja se movendo em direção

## Callbacks Relacionadas

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Chamado quando NPC dispara arma
- [OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): Chamado quando NPC causa dano a um jogador
