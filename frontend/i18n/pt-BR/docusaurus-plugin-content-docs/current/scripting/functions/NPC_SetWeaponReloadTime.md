---
title: NPC_SetWeaponReloadTime
sidebar_label: NPC_SetWeaponReloadTime
description: "Define o tempo de recarga da arma NPC."
tags: ["npc", "weapon", "reload", "time"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Define o tempo de recarga para uma arma específica de um NPC.

| Nome | Descrição |
| -------- | ------------------------------------ |
| npcid | O ID do NPC |
| weaponid | A arma ID para definir o tempo de recarga |
| time | O tempo de recarga em milissegundos |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setweaponreloadtime ", true, 21))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new weapon = NPC_GetWeapon(npcid);
        new reloadtime = strval(cmdtext[21]);

        NPC_SetWeaponReloadTime(npcid, WEAPON:weapon, reloadtime);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d weapon %d reload time set to %d ms", npcid, weapon, reloadtime);
        return 1;
    }
    return 0;
}
```
## Notas

- O tempo de recarga é medido em milissegundos
- Use NPC_GetWeaponReloadTime para verificar o tempo de recarga atual

## Funções Relacionadas

- [NPC_GetWeaponReloadTime](NPC_GetWeaponReloadTime): Obtenha o tempo de recarga
- [NPC_GetWeaponActualReloadTime](NPC_GetWeaponActualReloadTime): Obtenha o tempo real de recarga
- [NPC_IsReloading](NPC_IsReloading): Verifique se está recarregando
- [NPC_EnableReloading](NPC_EnableReloading): Habilitar/desabilitar recarregamento

## Callbacks Relacionadas

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Chamado quando NPC dispara
