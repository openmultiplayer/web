---
title: NPC_SetWeapon
sidebar_label: NPC_SetWeapon
description: "Define a arma atual de um NPC."
tags: ["npc", "weapon", "combat"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Define a arma atual de um NPC para uma arma específica ID.

| Nome | Descrição |
| ------ | -------------------- |
| npcid | O ID do NPC |
| weapon | A arma ID para definir |

## Retornos

Retorna `true` se a arma foi armada com sucesso, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setweapon ", true, 11))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new weaponid = strval(cmdtext[11]);
        if (weaponid < 0 || weaponid > 46)
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid weapon ID. Must be between 0 and 46.");

        NPC_SetWeapon(npcid, WEAPON:weaponid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d weapon set to %d", npcid, weaponid);

        return 1;
    }
    return 0;
}
```
## Notas

- Definir uma arma equipará o NPC com essa arma
- Use NPC_SetAmmo para fornecer munição para a arma
- Use NPC_GetWeapon para verificar a arma atual

## Funções Relacionadas

- [NPC_GetWeapon](NPC_GetWeapon): Obtenha a arma atual de NPC
- [NPC_SetAmmo](NPC_SetAmmo): Conjunto de munição para a arma de NPC
- [NPC_GetAmmo](NPC_GetAmmo): Obtenha a contagem atual de munição de NPC

## Callbacks Relacionadas

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Chamado quando NPC dispara
