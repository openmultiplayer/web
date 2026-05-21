---
title: NPC_GetAmmo
sidebar_label: NPC_GetAmmo
description: "Obtém a quantidade de munição da arma atual de um NPC."
tags: ["npc", "weapon", "ammo"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém a quantidade de munição da arma atual de um NPC.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna a quantidade de munição que o NPC possui para sua arma atual.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkammo", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new ammo = NPC_GetAmmo(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d has %d bullets remaining on total ammo", npcid, ammo);
        return 1;
    }
    return 0;
}
```
## Notas

- Retorna a contagem total de munição
- Se o NPC não tiver arma, retorna 0
- Munição infinita NPCs ainda mostra a contagem de munição original

## Funções Relacionadas

- [NPC_SetAmmo](NPC_SetAmmo): Conjunto de munição NPC
- [NPC_GetAmmoInClip](NPC_GetAmmoInClip): Obtenha munição no clipe atual
- [NPC_SetAmmoInClip](NPC_SetAmmoInClip): Coloque a munição no clipe
- [NPC_GetWeapon](NPC_GetWeapon): Obtenha a arma atual de NPC

## Callbacks Relacionadas

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Chamado quando NPC dispara uma arma
