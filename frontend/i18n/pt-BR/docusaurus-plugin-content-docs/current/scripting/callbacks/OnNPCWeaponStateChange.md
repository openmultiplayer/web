---
title: OnNPCWeaponStateChange
sidebar_label: OnNPCWeaponStateChange
description: "Este callback é chamado quando o estado da arma de um NPC muda."
tags: ["npc", "weapon"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Este callback é chamado quando o estado da arma de um NPC muda (por exemplo, recarregando, ficando sem munição, etc.).

| Nome | Descrição |
| -------- | ------------------------- |
| npcid | O ID do NPC |
| newstate | O novo estado de armas |
| oldstate | O estado anterior da arma |

## Exemplos

```c
public OnNPCWeaponStateChange(npcid, newState, oldState)
{
    static weaponStates[5][64] = {
        "Unknown",
        "No ammo remaining",
        "Single bullet left",
        "More than one bullet left",
        "Reloading"
    };

    // Notifique apenas os jogadores que estão rastreando este NPC
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            SendClientMessage(playerid, 0xFFFF00FF, "NPC %d weapon state: %s -> %s",
                npcid, weaponStates[oldState], weaponStates[newState]);
        }
    }
    return 1;
}
```
## Notas

- Este callback é acionado automaticamente com base na contagem de munição e nas ações da arma de NPC
- Os estados da arma incluem: sem balas, recarregando, mais balas, última bala, desconhecido

## Funções Relacionadas

As funções a seguir podem ser úteis, pois estão relacionadas a esse callback de uma forma ou de outra.

- [NPC_GetWeaponState](../functions/NPC_GetWeaponState): Obtenha o estado atual da arma de NPC
- [NPC_GetAmmo](../functions/NPC_GetAmmo): Obtenha a contagem de munição de NPC
- [NPC_SetAmmo](../functions/NPC_SetAmmo): Defina a contagem de munição de NPC
- [NPC_GetAmmoInClip](../functions/NPC_GetAmmoInClip): Obtenha munição no clipe atual
- [NPC_EnableReloading](../functions/NPC_EnableReloading): Ativar/desativar recarga automática

## Callbacks Relacionadas

- [OnNPCWeaponShot](OnNPCWeaponShot): Chamado quando NPC dispara uma arma
