---
title: NPC_GetWeaponReloadTime
sidebar_label: NPC_GetWeaponReloadTime
description: "Obtém o tempo de recarga da arma de um NPC."
tags: ["npc", "weapon", "reload"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém o tempo de recarga da arma de um NPC.

| Nome | Descrição |
| -------- | ------------------------------------ |
| npcid | O ID do NPC |
| weaponid | A arma ID para obter tempo de recarga |

## Retornos

Retorna o tempo de recarga em milissegundos para a arma especificada.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkweaponreloadtime", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new weapon = NPC_GetWeapon(npcid);
        new reloadtime = NPC_GetWeaponReloadTime(npcid, WEAPON:weapon);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d weapon reload time: %d ms", npcid, reloadtime);
        return 1;
    }
    return 0;
}
```
## Notas

- Retorna a configuração atual do tempo de recarga personalizado
- Use NPC_GetWeaponActualReloadTime para obter o tempo de recarga padrão do jogo
- O tempo de recarga afeta quanto tempo o NPC leva para recarregar a arma

## Funções Relacionadas

- [NPC_SetWeaponReloadTime](NPC_SetWeaponReloadTime): Definir tempo de recarga
- [NPC_GetWeaponActualReloadTime](NPC_GetWeaponActualReloadTime): Obtenha o tempo de recarga padrão
- [NPC_IsReloading](NPC_IsReloading): Verifique se NPC está recarregando
- [NPC_EnableReloading](NPC_EnableReloading): Habilitar/desabilitar recarregamento

## Callbacks Relacionadas

- [OnNPCWeaponStateChange](../callbacks/OnNPCWeaponStateChange): Chamado quando o estado da arma muda
