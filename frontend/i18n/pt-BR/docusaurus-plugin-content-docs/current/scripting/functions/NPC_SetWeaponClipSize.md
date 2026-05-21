---
title: NPC_SetWeaponClipSize
sidebar_label: NPC_SetWeaponClipSize
description: "Define o tamanho do clipe para uma arma NPC."
tags: ["npc", "weapon", "ammo"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Define o tamanho do clipe para a arma atual de um NPC.

| Nome | Descrição |
| ------ | -------------------- |
| npcid | O ID do NPC |
| weapon | A arma ID para definir |
| size | O novo tamanho do clipe |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setweaponclipsize ", true, 19))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new weapon = NPC_GetWeapon(npcid);
        new clipsize = strval(cmdtext[19]);

        NPC_SetWeaponClipSize(npcid, WEAPON:weapon, clipsize);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d weapon %d clip size set to %d", npcid, weapon, clipsize);
        return 1;
    }
    return 0;
}
```
## Notas

- O NPC deve ter uma arma para que esta função funcione
- O tamanho do clipe afeta a quantidade de munição que o NPC pode disparar antes de precisar recarregar
- Diferentes armas têm diferentes tamanhos de clipes padrão

## Funções Relacionadas

- [NPC_GetWeaponClipSize](NPC_GetWeaponClipSize): Obtenha o tamanho do clipe da arma
- [NPC_SetAmmoInClip](NPC_SetAmmoInClip): Definir munição de clipe atual
- [NPC_GetAmmoInClip](NPC_GetAmmoInClip): Obtenha munição atual
- [NPC_SetWeapon](NPC_SetWeapon): Definir arma NPC

## Callbacks Relacionadas

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Chamado quando NPC dispara arma
