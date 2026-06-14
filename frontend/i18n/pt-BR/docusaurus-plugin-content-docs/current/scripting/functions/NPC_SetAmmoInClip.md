---
title: NPC_SetAmmoInClip
sidebar_label: NPC_SetAmmoInClip
description: "Define a quantidade de munição no pente de arma de um NPC."
tags: ["npc", "weapon", "ammo"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Define a quantidade de munição no pente de arma de um NPC.

| Nome | Descrição |
| ----- | ------------------------- |
| npcid | O ID do NPC |
| ammo | A quantidade de munição a ser definida |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setammoclip ", true, 13))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new ammo = strval(cmdtext[13]);
        if (ammo < 0)
            return SendClientMessage(playerid, 0xFF0000FF, "Ammo must be positive.");

        NPC_SetAmmoInClip(npcid, ammo);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d clip ammo set to %d", npcid, ammo);

        return 1;
    }
    return 0;
}
```
## Notas

- A quantidade não pode exceder o tamanho máximo do clipe da arma
- Definir como 0 exigirá que o NPC seja recarregado antes de disparar
- Use NPC_GetAmmoInClip para verificar a quantidade atual do clipe
- Afeta apenas o pente da arma atual, não a munição total

## Funções Relacionadas

- [NPC_GetAmmoInClip](NPC_GetAmmoInClip): Obtenha munição no clipe
- [NPC_GetWeaponClipSize](NPC_GetWeaponClipSize): Obtenha o tamanho máximo do clipe
- [NPC_GiveWeapon](NPC_GiveWeapon): Dê arma para NPC
- [NPC_GetAmmo](NPC_GetAmmo): Obtenha munição total

## Callbacks Relacionadas

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Chamado quando NPC dispara
