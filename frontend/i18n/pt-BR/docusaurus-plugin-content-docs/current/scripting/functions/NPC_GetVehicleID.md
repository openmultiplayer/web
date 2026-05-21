---
title: NPC_GetVehicleID
sidebar_label: NPC_GetVehicleID
description: "Obtém o veículo ID do veículo atual de um NPC."
tags: ["npc", "vehicle"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém o veículo ID do veículo atual de um NPC.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Devolve o veículo ID em que NPC está, ou INVALID_VEHICLE_ID se não estiver em nenhum veículo.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkvehicleid", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new vehicleid = NPC_GetVehicleID(npcid);

        if (vehicleid == INVALID_VEHICLE_ID)
            SendClientMessage(playerid, 0xFFFF00FF, "NPC %d is not in any vehicle.", npcid);
        else
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d vehicle ID: %d", npcid, vehicleid);
        return 1;
    }
    return 0;
}
```
## Notas

- Retorna INVALID_VEHICLE_ID se o NPC não estiver em nenhum veículo

## Funções Relacionadas

- [NPC_GetVehicleSeat](NPC_GetVehicleSeat): Obtenha o assento de NPC no veículo
- [NPC_PutInVehicle](NPC_PutInVehicle): Coloque NPC no veículo
- [NPC_RemoveFromVehicle](NPC_RemoveFromVehicle): Remova NPC do veículo
- [NPC_GetVehicle](NPC_GetVehicle): Função alternativa com comportamento idêntico

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
