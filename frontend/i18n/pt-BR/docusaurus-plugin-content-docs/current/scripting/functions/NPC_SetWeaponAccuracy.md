---
title: NPC_SetWeaponAccuracy
sidebar_label: NPC_SetWeaponAccuracy
description: "Define a precisão de uma arma específica para um NPC."
tags: ["npc", "weapon", "accuracy"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Define a precisão de uma arma específica para um NPC.

| Nome | Descrição |
| -------- | --------------------------------- |
| npcid | O ID do NPC |
| weaponid | A arma ID para definir a precisão |
| accuracy | O valor de precisão (0,0 a 1,0) |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setweaponaccuracy ", true, 19))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new weapon = NPC_GetWeapon(npcid);
        new Float:accuracy = floatstr(cmdtext[19]);

        NPC_SetWeaponAccuracy(npcid, WEAPON:weapon, accuracy);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d weapon %d accuracy set to %.2f", npcid, weapon, accuracy);
        return 1;
    }
    return 0;
}
```
## Notas

- O valor de precisão varia de 0,0 (nunca acerta) a 1,0 (sempre acerta)
- A precisão padrão varia de acordo com o tipo de arma
- A precisão afeta a propagação da bala e a probabilidade de acerto

## Funções Relacionadas

- [NPC_GetWeaponAccuracy](NPC_GetWeaponAccuracy): Obtenha precisão da arma
- [NPC_SetWeapon](NPC_SetWeapon): Definir arma NPC
- [NPC_Shoot](NPC_Shoot): Faça NPC disparar

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
