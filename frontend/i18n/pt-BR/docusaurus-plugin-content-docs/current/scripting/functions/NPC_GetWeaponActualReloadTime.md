---
title: NPC_GetWeaponActualReloadTime
sidebar_label: NPC_GetWeaponActualReloadTime
description: "Obtém o tempo de recarga real (padrão) da arma de um NPC."
tags: ["npc", "weapon"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém o tempo de recarga real (padrão) da arma NPC a partir dos dados do jogo.

| Nome | Descrição |
| -------- | ---------------------- |
| npcid | O ID do NPC |
| weaponid | A arma ID para verificar |

## Retornos

Retorna o tempo de recarga padrão em milissegundos ou -1 em caso de erro.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkweaponactualreloadtime", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new weapon = NPC_GetWeapon(npcid);
        new reloadtime = NPC_GetWeaponActualReloadTime(npcid, WEAPON:weapon);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d weapon actual reload time: %d ms", npcid, reloadtime);
        return 1;
    }
    return 0;
}
```
## Notas

- Retorna o tempo de recarga original do jogo para a arma
- Isso é diferente dos tempos de recarga personalizados definidos com `NPC_SetWeaponReloadTime`

## Funções Relacionadas

- [NPC_SetWeaponReloadTime](NPC_SetWeaponReloadTime): Definir tempo de recarga personalizado
- [NPC_GetWeaponReloadTime](NPC_GetWeaponReloadTime): Obtenha o tempo de recarga atual
- [NPC_IsReloading](NPC_IsReloading): Verifique se NPC está recarregando

## Callbacks Relacionadas

- [OnNPCWeaponStateChange](../callbacks/OnNPCWeaponStateChange): Chamado quando o estado da arma muda
