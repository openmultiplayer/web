---
title: NPC_GetWeaponSkillLevel
sidebar_label: NPC_GetWeaponSkillLevel
description: "Obtém o nível de habilidade com arma de um NPC."
tags: ["npc", "weapon", "skill"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém o nível de habilidade com arma de um NPC.

| Nome | Descrição |
| ----- | ----------------------------------- |
| npcid | O ID do NPC |
| skill | O tipo de habilidade com arma (WEAPONSKILL) |

## Retornos

Retorna o nível de habilidade da arma (0-999) ou `UNKNOWN_WEAPONSKILL` em caso de falha.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkweaponskill", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new pistol = NPC_GetWeaponSkillLevel(npcid, WEAPONSKILL_PISTOL);
        new silenced = NPC_GetWeaponSkillLevel(npcid, WEAPONSKILL_PISTOL_SILENCED);
        new deagle = NPC_GetWeaponSkillLevel(npcid, WEAPONSKILL_DESERT_EAGLE);
        new shotgun = NPC_GetWeaponSkillLevel(npcid, WEAPONSKILL_SHOTGUN);
        new micro = NPC_GetWeaponSkillLevel(npcid, WEAPONSKILL_MICRO_UZI);
        new mp5 = NPC_GetWeaponSkillLevel(npcid, WEAPONSKILL_MP5);
        new ak47 = NPC_GetWeaponSkillLevel(npcid, WEAPONSKILL_AK47);
        new m4 = NPC_GetWeaponSkillLevel(npcid, WEAPONSKILL_M4);
        new sniper = NPC_GetWeaponSkillLevel(npcid, WEAPONSKILL_SNIPERRIFLE);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d weapon skills:", npcid);
        SendClientMessage(playerid, 0xFFFFFFFF, "Pistol:%d Silenced:%d Deagle:%d Shotgun:%d", pistol, silenced, deagle, shotgun);
        SendClientMessage(playerid, 0xFFFFFFFF, "Micro:%d MP5:%d AK47:%d M4:%d Sniper:%d", micro, mp5, ak47, m4, sniper);
        return 1;
    }
    return 0;
}
```
## Notas

- A habilidade com a arma afeta a precisão e o comportamento de tiro
- O nível de habilidade varia de 0 (ruim) a 999 (assassino)
- Retorna `UNKNOWN_WEAPONSKILL` se NPC for inválido ou o tipo de habilidade for inválido

## Funções Relacionadas

- [NPC_SetWeaponSkillLevel](NPC_SetWeaponSkillLevel): Defina o nível de habilidade da arma NPC
- [NPC_GetWeaponAccuracy](NPC_GetWeaponAccuracy): Obtenha precisão da arma
- [NPC_SetWeaponAccuracy](NPC_SetWeaponAccuracy): Definir precisão da arma
- [NPC_GetWeapon](NPC_GetWeapon): Obtenha a arma NPC

## Callbacks Relacionadas

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Chamado quando NPC dispara arma
