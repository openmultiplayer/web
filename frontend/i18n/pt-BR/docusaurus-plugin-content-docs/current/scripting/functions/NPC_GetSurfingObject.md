---
title: NPC_GetSurfingObject
sidebar_label: NPC_GetSurfingObject
description: "Obtém o objeto em que um NPC está navegando."
tags: ["npc", "surfing"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém o objeto no qual um NPC está navegando.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna o objeto ID ou `INVALID_OBJECT_ID` se não estiver navegando em um objeto.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checksurfingobject", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new objectid = NPC_GetSurfingObject(npcid);

        if (objectid == INVALID_OBJECT_ID)
            SendClientMessage(playerid, 0xFFFF00FF, "NPC %d is not surfing on any object.", npcid);
        else
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d is surfing on object: %d", npcid, objectid);
        return 1;
    }
    return 0;
}
```
## Notas

- Retorna INVALID_OBJECT_ID se NPC não estiver navegando em nenhum objeto

## Funções Relacionadas

- [NPC_SetSurfingObject](NPC_SetSurfingObject): Define o objeto em que um NPC está navegando
- [NPC_GetSurfingVehicle](NPC_GetSurfingVehicle): Obtém o veículo em que um NPC está navegando
- [NPC_GetSurfingPlayerObject](NPC_GetSurfingPlayerObject): Obtém o objeto do jogador em que um NPC está navegando
- [NPC_GetSurfingOffset](NPC_GetSurfingOffsets): Obtém o deslocamento de navegação para um NPC
- [NPC_ResetSurfingData](NPC_ResetSurfingData): Redefine todos os dados de navegação para um NPC

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
