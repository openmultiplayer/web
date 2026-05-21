---
title: NPC_GetWeaponAccuracy
sidebar_label: NPC_GetWeaponAccuracy
description: "Obtém a configuração de precisão para uma arma NPC."
tags: ["npc", "weapon"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém a configuração de precisão para uma arma NPC.

| Nome | Descrição |
| -------- | ---------------------- |
| npcid | O ID do NPC |
| weaponid | A arma ID para verificar |

## Retornos

Retorna o valor de precisão (0,0 a 1,0) ou -1,0 em caso de erro.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkweaponaccuracy", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new weapon = NPC_GetWeapon(npcid);
        new Float:accuracy = NPC_GetWeaponAccuracy(npcid, WEAPON:weapon);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d weapon %d accuracy: %.2f", npcid, weapon, accuracy);
        return 1;
    }
    return 0;
}
```
## Notas

- A precisão é um valor entre 0,0 (0% de precisão) e 1,0 (100% de precisão)
- Retorna -1,0 se NPC ID for inválido ou a arma não existir

## Funções Relacionadas

- [NPC_SetWeaponAccuracy](NPC_SetWeaponAccuracy): Definir precisão da arma
- [NPC_GetWeapon](NPC_GetWeapon): Obtenha a arma atual de NPC
- [NPC_SetWeapon](NPC_SetWeapon): Defina a arma de NPC

## Callbacks Relacionadas

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Chamado quando um NPC dispara
- [OnNPCWeaponStateChange](../callbacks/OnNPCWeaponStateChange): Chamado quando o estado da arma muda
