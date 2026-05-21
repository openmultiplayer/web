---
title: NPC_SetVehicleHydraThrusters
sidebar_label: NPC_SetVehicleHydraThrusters
description: "Define a direção do propulsor Hydra para um veículo NPC."
tags: ["npc", "vehicle", "hydra", "aircraft"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Define a direção do propulsor Hydra para um veículo NPC ao pilotar uma aeronave Hydra.

| Nome | Descrição |
| --------- | ---------------------------------------------- |
| npcid | O ID do NPC |
| direction | A direção do propulsor (0=para frente, 1=para trás) |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/sethydrathrusters ", true, 19))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new direction = strval(cmdtext[19]);

        NPC_SetVehicleHydraThrusters(npcid, direction);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d hydra thrusters set to %d", npcid, direction);

        return 1;
    }
    return 0;
}
```
## Notas

- Funciona apenas com aeronaves Hydra (veículo ID 520)
- Direção 0 = propulsores dianteiros (modo jato)
- Direção 1 = propulsores descendentes (modo VTOL)
- Use NPC_GetVehicleHydraThrusters para verificar a direção atual

## Funções Relacionadas

- [NPC_GetVehicleHydraThrusters](NPC_GetVehicleHydraThrusters): Obtenha a direção do propulsor
- [NPC_GetVehicleID](NPC_GetVehicleID): Obtenha o veículo de NPC
- [NPC_PutInVehicle](NPC_PutInVehicle): Coloque NPC no veículo
- [GetVehicleModel](GetVehicleModel): Obtenha o modelo do veículo

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
