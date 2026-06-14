---
title: NPC_GetVehicleHealth
sidebar_label: NPC_GetVehicleHealth
description: "Obtém a integridade do veículo de um NPC."
tags: ["npc", "vehicle"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém a integridade do veículo de um NPC.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna a integridade do veículo como um valor flutuante ou 0,0 se NPC não estiver em um veículo.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkvehiclehealth", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        if (NPC_GetVehicle(npcid) == INVALID_VEHICLE_ID)
            return SendClientMessage(playerid, 0xFFFF00FF, "NPC %d is not in any vehicle.", npcid);

        new Float:health;
        NPC_GetVehicleHealth(npcid, health);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d vehicle health: %.2f", npcid, health);
        return 1;
    }
    return 0;
}

```
## Notas

- Retorna 0,0 se NPC não estiver em um veículo
- A integridade do veículo normalmente varia de 0,0 a 1000,0
- Saúde abaixo de 250,0 geralmente significa que o veículo pegará fogo

## Funções Relacionadas

- [NPC_SetVehicleHealth](NPC_SetVehicleHealth): Definir a integridade do veículo
- [NPC_GetVehicle](NPC_GetVehicle): Obtenha o veículo atual de NPC
- [NPC_GetVehicleID](NPC_GetVehicleID): Obtenha o veículo ID
- [NPC_PutInVehicle](NPC_PutInVehicle): Coloque NPC no veículo

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
