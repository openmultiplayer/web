---
title: NPC_GetWeaponActualClipSize
sidebar_label: NPC_GetWeaponActualClipSize
description: "Obtém o tamanho real (padrão) do clipe para uma arma NPC."
tags: ["npc", "weapon"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém o tamanho real (padrão) do clipe para uma arma NPC a partir dos dados do jogo.

| Nome | Descrição |
| -------- | ---------------------- |
| npcid | O ID do NPC |
| weaponid | A arma ID para verificar |

## Retornos

Retorna o tamanho padrão do clipe ou -1 em caso de erro.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkweaponactualclipsize", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new weapon = NPC_GetWeapon(npcid);
        new clipsize = NPC_GetWeaponActualClipSize(npcid, WEAPON:weapon);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d weapon actual clip size: %d", npcid, clipsize);
        return 1;
    }
    return 0;
}
```
## Notas

- Retorna o tamanho original do clipe do jogo para a arma
- Isso é diferente dos tamanhos de clipe personalizados definidos com `NPC_SetWeaponClipSize`

## Funções Relacionadas

- [NPC_SetWeaponClipSize](NPC_SetWeaponClipSize): Definir tamanho de clipe personalizado
- [NPC_GetWeaponClipSize](NPC_GetWeaponClipSize): Obtenha o tamanho atual do clipe
- [NPC_GetAmmo](NPC_GetAmmo): Obtenha a munição atual de NPC

## Callbacks Relacionadas

- [OnNPCWeaponStateChange](../callbacks/OnNPCWeaponStateChange): Chamado quando o estado da arma muda
