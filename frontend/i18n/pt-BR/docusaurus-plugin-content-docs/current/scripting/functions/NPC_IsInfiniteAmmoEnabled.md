---
title: NPC_IsInfiniteAmmoEnabled
sidebar_label: NPC_IsInfiniteAmmoEnabled
description: "Verifica se a munição infinita está habilitada para um NPC."
tags: ["npc", "weapon", "ammo"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Verifica se a munição infinita está habilitada para um NPC.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna `true` se a munição infinita estiver habilitada, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkinfiniteammo", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:infiniteAmmo = NPC_IsInfiniteAmmoEnabled(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d infinite ammo enabled: %s", npcid, infiniteAmmo ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```
## Notas

- Munição infinita evita que o NPC fique sem munição
- A contagem de munição ainda pode diminuir, mas a funcionalidade da arma permanece
- Pode ser alternado com NPC_EnableInfiniteAmmo

## Funções Relacionadas

- [NPC_EnableInfiniteAmmo](NPC_EnableInfiniteAmmo): Ativar/desativar munição infinita
- [NPC_GetAmmo](NPC_GetAmmo): Obtenha munição NPC
- [NPC_SetAmmo](NPC_SetAmmo): Conjunto de munição NPC
- [NPC_GetWeapon](NPC_GetWeapon): Obtenha a arma NPC

## Callbacks Relacionadas

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Chamado quando NPC dispara uma arma
