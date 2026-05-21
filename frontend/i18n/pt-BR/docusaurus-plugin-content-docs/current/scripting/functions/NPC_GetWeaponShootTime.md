---
title: NPC_GetWeaponShootTime
sidebar_label: NPC_GetWeaponShootTime
description: "Obtém o tempo de disparo da arma de um NPC."
tags: ["npc", "weapon"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém o tempo de disparo da arma de um NPC.

| Nome | Descrição |
| -------- | ----------------------------------- |
| npcid | O ID do NPC |
| weaponid | A arma ID para obter tempo de filmagem |

## Retornos

Retorna o tempo de disparo em milissegundos para a arma especificada.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkweaponshoottime", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new weapon = NPC_GetWeapon(npcid);
        new shoottime = NPC_GetWeaponShootTime(npcid, WEAPON:weapon);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d weapon %d shoot time: %d ms", npcid, weapon, shoottime);
        return 1;
    }
    return 0;
}
```
## Notas

- O tempo de filmagem afeta o atraso entre as fotos
- Valores mais baixos significam taxa de disparo mais rápida
- Diferentes armas têm diferentes tempos de disparo padrão

## Funções Relacionadas

- [NPC_SetWeaponShootTime](NPC_SetWeaponShootTime): Definir tempo de filmagem
- [NPC_GetWeapon](NPC_GetWeapon): Obtenha a arma atual de NPC
- [NPC_Shoot](NPC_Shoot): Faça NPC disparar
- [NPC_IsShooting](NPC_IsShooting): Verifique se NPC está disparando

## Callbacks Relacionadas

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Chamado quando NPC dispara arma
