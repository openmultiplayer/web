---
title: NPC_SetWeaponShootTime
sidebar_label: NPC_SetWeaponShootTime
description: "Define o intervalo de disparo para uma arma NPC."
tags: ["npc", "weapon", "shooting", "time"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Define o intervalo de disparo para uma arma específica de um NPC.

| Nome | Descrição |
| -------- | ------------------------------------- |
| npcid | O ID do NPC |
| weaponid | A arma ID para definir o tempo de disparo |
| time | O intervalo de disparo em milissegundos |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setweaponshoottime ", true, 20))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new weapon = NPC_GetWeapon(npcid);
        new shoottime = strval(cmdtext[20]);

        NPC_SetWeaponShootTime(npcid, WEAPON:weapon, shoottime);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d weapon %d shoot time set to %d ms", npcid, weapon, shoottime);
        return 1;
    }
    return 0;
}
```
## Notas

- O tempo de filmagem é medido em milissegundos entre os disparos
- Use NPC_GetWeaponShootTime para verificar o tempo de filmagem atual

## Funções Relacionadas

- [NPC_GetWeaponShootTime](NPC_GetWeaponShootTime): Obtenha o tempo de filmagem
- [NPC_IsShooting](NPC_IsShooting): Verifique se está fotografando
- [NPC_Shoot](NPC_Shoot): Faça NPC disparar
- [NPC_GetWeapon](NPC_GetWeapon): Obtenha a arma atual

## Callbacks Relacionadas

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Chamado quando NPC dispara
- [OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): Chamado quando NPC causa dano a alguém
