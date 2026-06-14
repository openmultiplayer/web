---
title: NPC_GetVehicleHydraThrusters
sidebar_label: NPC_GetVehicleHydraThrusters
description: "Obtém a direção do propulsor de um veículo Hydra de NPC."
tags: ["npc", "vehicle", "hydra"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém a direção do propulsor de um veículo Hydra de NPC.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna a direção do propulsor (0 = para frente, 1 = vertical) ou -1 se não estiver em uma Hydra.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkvehiclehydra", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        if (NPC_GetVehicle(npcid) == INVALID_VEHICLE_ID)
            return SendClientMessage(playerid, 0xFFFF00FF, "NPC %d is not in any vehicle.", npcid);

        new thrusters = NPC_GetVehicleHydraThrusters(npcid);

        if (thrusters == 0)
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d: Hydra thrusters FORWARD (0)", npcid);
        else
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d: Hydra thrusters BACKWARD (1)", npcid);

        return 1;
    }
    return 0;
}
```
## Notas

- Funciona apenas com veículos Hydra (modelo 520)
- Retorna -1 se NPC não estiver em uma Hydra ou em um veículo
- Direção 0 = modo de voo direto (modo jato)
- Direção 1 = modo de vôo vertical (modo pairar)

## Funções Relacionadas

- [NPC_SetVehicleHydraThrusters](NPC_SetVehicleHydraThrusters): Definir direção do propulsor
- [NPC_GetVehicle](NPC_GetVehicle): Obtenha o veículo atual de NPC
- [NPC_GetVehicleHealth](NPC_GetVehicleHealth): Obtenha a integridade do veículo
- [NPC_PutInVehicle](NPC_PutInVehicle): Coloque NPC no veículo

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
