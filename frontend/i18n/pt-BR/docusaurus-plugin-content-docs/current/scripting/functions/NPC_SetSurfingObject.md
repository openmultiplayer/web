---
title: NPC_SetSurfingObject
sidebar_label: NPC_SetSurfingObject
description: "Define o objeto em que um NPC está navegando."
tags: ["npc", "surfing"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Define o objeto em que um NPC está navegando.

| Nome | Descrição |
| -------- | ----------------- |
| npcid | O ID do NPC |
| objectid | O objeto ID |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setsurfingobject ", true, 18))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new objectid = strval(cmdtext[18]);

        NPC_SetSurfingObject(npcid, objectid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d surfing object set to %d", npcid, objectid);

        return 1;
    }
    return 0;
}
```
## Notas

- O NPC se moverá junto com o objeto se ele se mover
- O objeto deve existir para que a navegação funcione corretamente

## Funções Relacionadas

- [NPC_GetSurfingObject](NPC_GetSurfingObject): Obtém o objeto em que um NPC está navegando
- [NPC_SetSurfingVehicle](NPC_SetSurfingVehicle): Define o veículo em que um NPC está navegando
- [NPC_SetSurfingPlayerObject](NPC_SetSurfingPlayerObject): Define o objeto do jogador em que um NPC está navegando
- [NPC_SetSurfingOffset](NPC_SetSurfingOffset): Define o deslocamento de navegação para um NPC
- [NPC_ResetSurfingData](NPC_ResetSurfingData): redefine todos os dados de navegação para um NPC

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
