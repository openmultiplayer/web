---
title: NPC_GetEnteringVehicleID
sidebar_label: NPC_GetEnteringVehicleID
description: "Obtém o veículo ID que um NPC está entrando no momento."
tags: ["npc", "vehicle"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém o veículo ID que um NPC está entrando no momento.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Devolve o veículo ID em que NPC está entrando, ou INVALID_VEHICLE_ID caso não esteja entrando em nenhum veículo.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkenterveh", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        // Comece a monitorar se ainda não estiver em execução
        if (PlayerEnterVehicleMonitor[playerid] == INVALID_TIMER_ID)
        {
            PlayerEnterVehicleMonitor[playerid] = SetTimerEx("CheckNPCEnteringVehicle", 200, true, "i", playerid);
            PlayerWasEnteringVehicle[playerid] = false;
            SendClientMessage(playerid, 0x00FF00FF, "Started monitoring NPC %d vehicle entry.", npcid);
        }
        else
        {
            SendClientMessage(playerid, 0xFFFF00FF, "Already monitoring NPC %d vehicle entry.", npcid);
        }
        return 1;
    }
    return 0;
}

forward CheckNPCEnteringVehicle(playerid);
public CheckNPCEnteringVehicle(playerid)
{
    if (!IsPlayerConnected(playerid))
    {
        StopPlayerEnterVehicleMonitor(playerid);
        return 0;
    }

    new npcid = PlayerNPC[playerid];
    if (npcid == INVALID_NPC_ID || !NPC_IsValid(npcid))
    {
        StopPlayerEnterVehicleMonitor(playerid);
        return 0;
    }

    new bool:isEntering = NPC_IsEnteringVehicle(npcid);

    if (isEntering)
    {
        new vehicleid = NPC_GetEnteringVehicleID(npcid);
        new seatid = NPC_GetEnteringVehicleSeat(npcid);

        if (vehicleid != INVALID_VEHICLE_ID && vehicleid != 0)
        {
            SendClientMessage(playerid, 0xFFFF00FF, "NPC %d entering vehicle %d (seat %d)", npcid, vehicleid, seatid);
        }
    }

    return 1;
}
```
## Notas

- Esta função é semelhante a NPC_GetEnteringVehicle
- Retorna INVALID_VEHICLE_ID se NPC não estiver em processo de entrada em um veículo
- O valor torna-se 0 quando o NPC entra com sucesso no veículo

## Funções Relacionadas

- [NPC_GetEnteringVehicle](NPC_GetEnteringVehicle): Entrar no veículo
- [NPC_GetEnteringVehicleSeat](NPC_GetEnteringVehicleSeat): Entrar no assento do veículo
- [NPC_EnterVehicle](NPC_EnterVehicle): Faça NPC entrar no veículo
- [NPC_IsEnteringVehicle](NPC_IsEnteringVehicle): Verifique se está entrando no veículo

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
