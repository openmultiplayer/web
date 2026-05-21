---
title: NPC_GetAmmoInClip
sidebar_label: NPC_GetAmmoInClip
description: "Obtém a munição do clipe atual da arma de um NPC."
tags: ["npc", "weapon", "ammo"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém a munição do clipe atual da arma de um NPC.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna a quantidade de munição no clipe de arma atual do NPC.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkclip", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new clip = NPC_GetAmmoInClip(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d has %d bullets remaining on the clip", npcid, clip);
        return 1;
    }
    return 0;
}
```
## Notas

- Retorna a quantidade de munição atualmente carregada no carregador da arma (clipe), ao contrário de [NPC_GetAmmo](NPC_GetAmmo), que retorna a munição total que o NPC contém.
- O tamanho do clipe varia dependendo do tipo de arma.

## Funções Relacionadas

- [NPC_SetAmmoInClip](NPC_SetAmmoInClip): Coloque a munição no clipe
- [NPC_GetAmmo](NPC_GetAmmo): Obtenha munição total
- [NPC_SetAmmo](NPC_SetAmmo): Definir munição total
- [NPC_IsReloading](NPC_IsReloading): Verifique se NPC está recarregando

## Callbacks Relacionadas

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Chamado quando NPC dispara uma arma
