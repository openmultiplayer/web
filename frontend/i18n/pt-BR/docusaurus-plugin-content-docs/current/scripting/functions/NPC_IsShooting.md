---
title: NPC_IsShooting
sidebar_label: NPC_IsShooting
description: "Verifica se um NPC está filmando no momento."
tags: ["npc", "weapon", "shooting"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Verifica se um NPC está atirando com sua arma no momento.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna `true` se NPC estiver disparando, `false` caso contrário.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkshooting", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isShooting = NPC_IsShooting(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is shooting: %s", npcid, isShooting ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```
## Notas

- Retorna true somente durante a ação de filmagem real
- NPCs deve ter arma e munição para atirar

## Funções Relacionadas

- [NPC_Shoot](NPC_Shoot): Faça NPC disparar
- [NPC_AimAt](NPC_AimAt): Faça NPC mirar e atirar
- [NPC_StopShoot](NPC_StopShoot): Parar a filmagem NPC
- [NPC_IsAiming](NPC_IsAiming): Verifique se está mirando

## Callbacks Relacionadas

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Chamado quando NPC dispara
- [OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): Chamado quando NPC causa dano ao jogador
