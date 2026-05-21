---
title: NPC_SetWeaponSkillLevel
sidebar_label: NPC_SetWeaponSkillLevel
description: "Define o nível de habilidade com arma para um NPC."
tags: ["npc", "weapon", "skill"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Define o nível de habilidade com arma para um NPC.

| Nome | Descrição |
| ----- | ----------------------------------- |
| npcid | O ID do NPC |
| skill | O tipo de habilidade com arma (WEAPONSKILL) |
| level | O nível de habilidade a ser definido (0-999) |

## Retornos

Retorna `true` em caso de sucesso, `false` em caso de falha.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setweaponskill ", true, 16))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new level = strval(cmdtext[16]);

        NPC_SetWeaponSkillLevel(npcid, WEAPONSKILL_PISTOL, level);
        NPC_SetWeaponSkillLevel(npcid, WEAPONSKILL_PISTOL_SILENCED, level);
        NPC_SetWeaponSkillLevel(npcid, WEAPONSKILL_DESERT_EAGLE, level);
        NPC_SetWeaponSkillLevel(npcid, WEAPONSKILL_SHOTGUN, level);
        NPC_SetWeaponSkillLevel(npcid, WEAPONSKILL_MICRO_UZI, level);
        NPC_SetWeaponSkillLevel(npcid, WEAPONSKILL_MP5, level);
        NPC_SetWeaponSkillLevel(npcid, WEAPONSKILL_AK47, level);
        NPC_SetWeaponSkillLevel(npcid, WEAPONSKILL_M4, level);
        NPC_SetWeaponSkillLevel(npcid, WEAPONSKILL_SNIPERRIFLE, level);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d all weapon skills set to %d", npcid, level);
        return 1;
    }
    return 0;
}
```
## Notas

- A habilidade com a arma afeta a precisão e o comportamento de tiro
- O nível de habilidade varia de 0 (ruim) a 999 (assassino)
- Diferentes tipos de armas têm diferentes categorias de habilidades

## Funções Relacionadas

- [NPC_GetWeaponSkillLevel](NPC_GetWeaponSkillLevel): Obtenha o nível de habilidade com arma NPC
- [NPC_SetWeaponAccuracy](NPC_SetWeaponAccuracy): Definir precisão da arma
- [NPC_GetWeaponAccuracy](NPC_GetWeaponAccuracy): Obtenha precisão da arma
- [NPC_SetWeapon](NPC_SetWeapon): Definir arma NPC

## Callbacks Relacionadas

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Chamado quando NPC dispara arma
