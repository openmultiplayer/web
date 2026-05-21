---
title: NPC_GetWeaponClipSize
sidebar_label: NPC_GetWeaponClipSize
description: "Obtém a configuração de tamanho do clipe para uma arma NPC."
tags: ["npc", "weapon"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém a configuração de tamanho do clipe para uma arma NPC.

| Nome | Descrição |
| -------- | ---------------------- |
| npcid | O ID do NPC |
| weaponid | A arma ID para verificar |

## Retornos

Retorna o tamanho do clipe da arma ou -1 em caso de erro.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkweaponclipsize", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new weapon = NPC_GetWeapon(npcid);
        new clipsize = NPC_GetWeaponClipSize(npcid, WEAPON:weapon);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d weapon clip size: %d", npcid, clipsize);
        return 1;
    }
    return 0;
}
```
## Notas

- Retorna a configuração atual de tamanho de clipe personalizado
- Diferentes armas têm diferentes tamanhos de clipes padrão

## Funções Relacionadas

- [NPC_SetWeaponClipSize](NPC_SetWeaponClipSize): Definir tamanho do clipe da arma
- [NPC_GetWeapon](NPC_GetWeapon): Obtenha a arma atual de NPC
- [NPC_GetAmmo](NPC_GetAmmo): Obtenha a munição atual de NPC

## Callbacks Relacionadas

- [OnNPCWeaponStateChange](../callbacks/OnNPCWeaponStateChange): Chamado quando o estado da arma muda
