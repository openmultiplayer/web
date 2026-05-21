---
title: NPC_IsAiming
sidebar_label: NPC_IsAiming
description: "Verifica se um NPC está mirando no momento."
tags: ["npc", "weapon", "aiming"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Verifica se um NPC está apontando no momento.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna `true` se NPC estiver mirando, `false` caso contrário.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkaiming", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isAiming = NPC_IsAiming(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is aiming: %s", npcid, isAiming ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```
## Notas

- Retorna true quando o NPC está mirando ativamente em um alvo
- Use isto para verificar se um NPC está em modo de combate
- A mira pode ser iniciada com NPC_AimAt ou NPC_AimAtPlayer
- NPCs continue mirando até parar com NPC_StopAim

## Funções Relacionadas

- [NPC_AimAt](NPC_AimAt): Faça NPC mirar na posição
- [NPC_AimAtPlayer](NPC_AimAtPlayer): Faça NPC mirar no jogador
- [NPC_StopAim](NPC_StopAim): Impede que NPC mire
- [NPC_IsAimingAtPlayer](NPC_IsAimingAtPlayer): Verifique se está mirando em um jogador específico

## Callbacks Relacionadas

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Chamado quando NPC dispara arma
