---
title: NPC_GetSurfingVehicle
sidebar_label: NPC_GetSurfingVehicle
description: "Obtém o veículo em que um NPC está navegando."
tags: ["npc", "surfing", "vehicle"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém o veículo em que um NPC está navegando.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Devolve o veículo ID ou `INVALID_VEHICLE_ID` se não estiver navegando em um veículo.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checksurfingvehicle", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new vehicleid = NPC_GetSurfingVehicle(npcid);

        if (vehicleid == INVALID_VEHICLE_ID)
            SendClientMessage(playerid, 0xFFFF00FF, "NPC %d is not surfing on any vehicle.", npcid);
        else
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d is surfing on vehicle: %d", npcid, vehicleid);
        return 1;
    }
    return 0;
}
```
## Notas

- Retorna `INVALID_VEHICLE_ID` se o NPC não estiver navegando em nenhum veículo
- Surfar permite que NPCs se mova junto com os veículos enquanto mantém sua posição relativa

## Funções Relacionadas

- [NPC_SetSurfingVehicle](NPC_SetSurfingVehicle): Define o veículo em que um NPC está navegando
- [NPC_GetSurfingObject](NPC_GetSurfingObject): Obtém o objeto em que um NPC está navegando
- [NPC_GetSurfingPlayerObject](NPC_GetSurfingPlayerObject): Obtém o objeto do jogador em que um NPC está navegando
- [NPC_GetSurfingOffset](NPC_GetSurfingOffsets): Obtém o deslocamento de navegação para um NPC
- [NPC_ResetSurfingData](NPC_ResetSurfingData): redefine todos os dados de navegação para um NPC

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
