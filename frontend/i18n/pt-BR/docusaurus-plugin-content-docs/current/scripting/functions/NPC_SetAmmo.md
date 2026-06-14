---
title: NPC_SetAmmo
sidebar_label: NPC_SetAmmo
description: "Define a contagem de munição para a arma atual de um NPC."
tags: ["npc", "weapon", "ammo", "ammunition"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Define a contagem de munição para a arma atual de um NPC.

| Nome | Descrição |
| ----- | ------------------------------- |
| npcid | O ID do NPC |
| ammo | A quantidade de munição a ser definida |

## Retornos

Retorna `true` se a munição foi definida com sucesso, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setammo ", true, 9))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new ammo = strval(cmdtext[9]);
        if (ammo < 0)
            return SendClientMessage(playerid, 0xFF0000FF, "Ammo must be positive.");

        NPC_SetAmmo(npcid, ammo);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d ammo set to %d", npcid, ammo);

        return 1;
    }
    return 0;
}
```
## Notas

- Definir munição para 0 torna a arma inutilizável
- Diferentes armas têm diferentes capacidades máximas de munição
- Isso define a munição total, não apenas o clipe atual

## Funções Relacionadas

- [NPC_GetAmmo](NPC_GetAmmo): Obtenha munição NPC
- [NPC_SetAmmoInClip](NPC_SetAmmoInClip): Definir munição no clipe atual
- [NPC_GetAmmoInClip](NPC_GetAmmoInClip): Obtenha munição no clipe atual
- [NPC_EnableInfiniteAmmo](NPC_EnableInfiniteAmmo): Habilita munição infinita

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
