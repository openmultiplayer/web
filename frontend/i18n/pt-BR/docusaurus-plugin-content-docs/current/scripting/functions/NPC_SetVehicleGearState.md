---
title: NPC_SetVehicleGearState
sidebar_label: NPC_SetVehicleGearState
description: "Define o estado do trem de pouso da aeronave NPC."
tags: ["npc", "vehicle", "aircraft", "landing gear"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Define o estado do trem de pouso da aeronave NPC ao pilotar uma aeronave.

| Nome | Descrição |
| --------- | -------------------------------------------------------------------------------- |
| npcid | O ID do NPC |
| gearstate | O estado do trem de pouso a ser definido (LANDING_GEAR_STATE_DOWN ou LANDING_GEAR_STATE_UP) |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setvehiclegearstate ", true, 21))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new gearState = strval(cmdtext[21]);

        NPC_SetVehicleGearState(npcid, gearState);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d vehicle gear state set to %d", npcid, gearState);

        return 1;
    }
    return 0;
}
```
## Notas

- Só funciona quando NPC está pilotando uma aeronave
- Usa as mesmas constantes que [Estados do trem de pouso do veículo](../resources/landinggearstate): LANDING_GEAR_STATE_DOWN e LANDING_GEAR_STATE_UP
- Verifique o estado atual do trem de pouso com NPC_GetVehicleGearState

## Funções Relacionadas

- [NPC_GetVehicleGearState](NPC_GetVehicleGearState): Obtenha o estado atual do trem de pouso
- [GetPlayerLandingGearState](GetPlayerLandingGearState): Obtenha o estado do trem de pouso do jogador
- [GetVehicleLandingGearState](GetVehicleLandingGearState): Obtenha o estado do trem de pouso do veículo
- [NPC_PutInVehicle](NPC_PutInVehicle): Coloque NPC no veículo

## Recursos relacionados

- [Estados do trem de pouso do veículo](../resources/landinggearstate)

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
