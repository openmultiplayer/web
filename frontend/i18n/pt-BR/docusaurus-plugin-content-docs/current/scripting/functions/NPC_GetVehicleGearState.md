---
title: NPC_GetVehicleGearState
sidebar_label: NPC_GetVehicleGearState
description: "Obtém o estado do trem de pouso de uma aeronave NPC."
tags: ["npc", "vehicle", "aircraft", "landing gear"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém o estado do trem de pouso de uma aeronave NPC.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna o estado do trem de pouso da aeronave NPC (LANDING_GEAR_STATE_DOWN ou LANDING_GEAR_STATE_UP).

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkvehiclegearstate", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        if (NPC_GetVehicle(npcid) == INVALID_VEHICLE_ID)
            return SendClientMessage(playerid, 0xFFFF00FF, "NPC %d is not in any vehicle.", npcid);

        new LANDING_GEAR_STATE:gearState = NPC_GetVehicleGearState(npcid);

        if (gearState == LANDING_GEAR_STATE_UP)
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d: Landing gear UP", npcid);
        else
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d: Landing gear DOWN", npcid);

        return 1;
    }
    return 0;
}
```
## Notas

- Só funciona quando o NPC está pilotando uma aeronave
- Retorna o estado atual do trem de pouso definido por NPC_SetVehicleGearState
- Usa as mesmas constantes que [Estados do trem de pouso do veículo](../resources/landinggearstate): LANDING_GEAR_STATE_DOWN e LANDING_GEAR_STATE_UP
- Este é o equivalente NPC de GetPlayerLandingGearState

## Funções Relacionadas

- [NPC_SetVehicleGearState](NPC_SetVehicleGearState): Definir estado do trem de pouso da aeronave
- [GetPlayerLandingGearState](GetPlayerLandingGearState): Obtenha o estado do trem de pouso do jogador
- [GetVehicleLandingGearState](GetVehicleLandingGearState): Obtenha o estado do trem de pouso do veículo
- [NPC_GetVehicle](NPC_GetVehicle): Obtenha o veículo atual de NPC

## Recursos relacionados

- [Estados do trem de pouso do veículo](../resources/landinggearstate)

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
