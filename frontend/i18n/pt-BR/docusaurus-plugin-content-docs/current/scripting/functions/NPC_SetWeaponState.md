---
title: NPC_SetWeaponState
sidebar_label: NPC_SetWeaponState
description: "Define o estado da arma de um NPC."
tags: ["npc", "weapon", "state"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Define o estado da arma de um NPC.

| Nome | Descrição |
| ----------- | ----------------------- |
| npcid | O ID do NPC |
| weaponState | O estado da arma a ser definido |

## Retornos

Retorna `true` em caso de sucesso, `false` em caso de falha.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setweaponstate ", true, 16))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new weaponstate = strval(cmdtext[16]);

        static weaponStates[5][64] =
        {
            "Unknown",
            "No ammo remaining",
            "Single bullet left",
            "More than one bullet left",
            "Reloading"
        };

        NPC_SetWeaponState(npcid, WEAPONSTATE:weaponstate);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d weapon state set to: %s (%d)", npcid, weaponStates[weaponstate], weaponstate);
        return 1;
    }
    return 0;
}
```
## Notas

- O estado da arma controla a ação atual da arma do NPC
- Use [NPC_GetWeaponState](NPC_GetWeaponState) para recuperar o estado atual
- A alteração do estado da arma afeta o comportamento de disparo do NPC

## Funções Relacionadas

- [NPC_GetWeaponState](NPC_GetWeaponState): Obtenha o estado da arma NPC
- [NPC_SetWeapon](NPC_SetWeapon): Definir arma NPC
- [NPC_GetWeapon](NPC_GetWeapon): Obtenha a arma NPC
- [NPC_IsReloading](NPC_IsReloading): Verifique se NPC está recarregando

## Recursos relacionados

- [Estados da Arma](../resources/weaponstates)

## Callbacks Relacionadas

- [OnNPCWeaponStateChange](../callbacks/OnNPCWeaponStateChange): Chamado quando o estado da arma NPC muda
- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Chamado quando NPC dispara arma
