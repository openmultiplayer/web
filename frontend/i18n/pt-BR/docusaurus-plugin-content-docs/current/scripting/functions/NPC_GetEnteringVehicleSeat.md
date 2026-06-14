---
title: NPC_GetEnteringVehicleSeat
sidebar_label: NPC_GetEnteringVehicleSeat
description: "Obtém o assento que um NPC está entrando em um veículo."
tags: ["npc", "vehicle"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém o assento que um NPC está entrando em um veículo.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna o número do assento que NPC está inserindo ou -1 se não estiver inserindo.

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
        new vehicleid = NPC_GetEnteringVehicle(npcid);
        new seatid = NPC_GetEnteringVehicleSeat(npcid);

        if (vehicleid != INVALID_VEHICLE_ID && vehicleid != 0)
        {
            SendClientMessage(playerid, 0xFFFF00FF, "NPC %d entering vehicle %d (seat %d)", npcid, vehicleid, seatid);
        }
    }

    return 1;
}
```
## Assento IDs

| ID | Assento |
| --- | ---------------------------- |
| 0 | Motorista |
| 1 | Passageiro dianteiro |
| 2 | Passageiro traseiro esquerdo |
| 3 | Passageiro traseiro direito |
| 4+ | Assentos de passageiros (autocarro, etc.) |

## Notas

- Retorna -1 se o NPC não estiver entrando em nenhum veículo
- Esta informação só é válida enquanto o NPC estiver em processo de inserção

## Funções Relacionadas

- [NPC_GetEnteringVehicle](NPC_GetEnteringVehicle): Entrar no veículo
- [NPC_GetEnteringVehicleID](NPC_GetEnteringVehicleID): Entrar no veículo ID
- [NPC_EnterVehicle](NPC_EnterVehicle): Faça NPC entrar no veículo
- [NPC_GetVehicleSeat](NPC_GetVehicleSeat): Obtenha o assento atual do veículo

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
