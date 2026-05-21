---
title: NPC_GetWeapon
sidebar_label: NPC_GetWeapon
description: "Obtém a arma atual que um NPC está segurando."
tags: ["npc", "weapon"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém a arma atual que um NPC está segurando.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna a arma ID que NPC está segurando atualmente.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkweapon", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new weapon = NPC_GetWeapon(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d weapon: %d", npcid, weapon);
        return 1;
    }
    return 0;
}
```
## Notas

- Retorna 0 se o NPC não tiver arma (punhos)
- A arma IDs é igual à arma do jogador IDs

## Funções Relacionadas

- [NPC_SetWeapon](NPC_SetWeapon): Definir arma NPC
- [NPC_GetAmmo](NPC_GetAmmo): Obtenha munição NPC
- [NPC_SetAmmo](NPC_SetAmmo): Conjunto de munição NPC
- [NPC_RemoveWeapon](NPC_RemoveWeapon): Remover arma NPC

## Callbacks Relacionadas

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Chamado quando NPC dispara arma
