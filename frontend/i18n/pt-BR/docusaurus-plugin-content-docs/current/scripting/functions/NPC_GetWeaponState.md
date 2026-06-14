---
title: NPC_GetWeaponState
sidebar_label: NPC_GetWeaponState
description: "Obtém o estado da arma de um NPC."
tags: ["npc", "weapon"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém o estado da arma de um NPC.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna o estado da arma ID.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkweaponstate", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new WEAPONSTATE:state = WEAPONSTATE:NPC_GetWeaponState(npcid);

        static weaponStates[5][64] =
        {
            "Unknown",
            "No ammo remaining",
            "Single bullet left",
            "More than one bullet left",
            "Reloading"
        };

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d weapon state: %s (%d)", npcid, weaponStates[state], _:state);
        return 1;
    }
    return 0;
}
```
## Notas

- Os estados da arma incluem recarregar, disparar, ficar sem munição, etc.
- Use isto para verificar o status atual da arma do NPC
- Os valores de estado correspondem às constantes PlayerWeaponState

## Funções Relacionadas

- [NPC_GetWeapon](NPC_GetWeapon): Obtenha a arma atual de NPC
- [NPC_IsReloading](NPC_IsReloading): Verifique se NPC está recarregando
- [NPC_IsShooting](NPC_IsShooting): Verifique se NPC está disparando
- [NPC_GetAmmoInClip](NPC_GetAmmoInClip): Obtenha munição no clipe

## Callbacks Relacionadas

- [OnNPCWeaponStateChange](../callbacks/OnNPCWeaponStateChange): Chamado quando o estado da arma muda
