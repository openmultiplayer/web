---
title: NPC_IsAimingAtPlayer
sidebar_label: NPC_IsAimingAtPlayer
description: "Verifica se um NPC está mirando em um jogador específico."
tags: ["npc", "weapon", "aiming"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Verifica se um NPC está mirando em um jogador específico.

| Nome | Descrição |
| -------- | ----------------------------- |
| npcid | O ID do NPC |
| playerid | O ID do jogador a ser verificado |

## Retornos

Retorna `true` se NPC estiver mirando no jogador especificado, caso contrário, `false`.

## Exemplos

```c

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkaimingat", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isAimingAtPlayer = NPC_IsAimingAtPlayer(npcid, playerid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is aiming at you: %s", npcid, isAimingAtPlayer ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```
## Notas

- Retorna true somente quando NPC tem como alvo específico o determinado jogador
- Use isto para verificar se um jogador está sendo alvo de um NPC
- O NPC deve estar usando NPC_AimAtPlayer para que isso retorne true

## Funções Relacionadas

- [NPC_AimAtPlayer](NPC_AimAtPlayer): Faça NPC mirar no jogador
- [NPC_IsAiming](NPC_IsAiming): Verifique se NPC está mirando
- [NPC_StopAim](NPC_StopAim): Impede que NPC mire
- [NPC_AimAt](NPC_AimAt): Faça NPC mirar na posição

## Callbacks Relacionadas

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Chamado quando NPC dispara arma
