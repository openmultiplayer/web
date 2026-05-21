---
title: RepairVehicle
sidebar_label: RepairVehicle
description: "Repara totalmente um veículo, incluindo danos visuais (colisões, amassados, arranhões, pneus estourados, etc."
tags: ["vehicle"]
---


## Descrição

Repara totalmente um veículo, incluindo danos visuais (colisões, amassados, arranhões, pneus estourados, etc.).

| Nome | Descrição |
| --------- | -------------------------------- |
| vehicleid | O ID do veículo a ser reparado. |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. Isso significa que o veículo especificado não existe.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/repair", cmdtext))
    {
        if (!IsPlayerInAnyVehicle(playerid))
        {
            return SendClientMessage(playerid, 0xFFFFFFFF, "You are not in a vehicle!");
        }

        RepairVehicle(GetPlayerVehicleID(playerid));

        SendClientMessage(playerid, 0xFFFFFFFF, "Your vehicle has been repaired!");
        return 1;
    }
    return 0;
}
```
## Funções Relacionadas

- [SetVehicleHealth](SetVehicleHealth): Define a integridade de um veículo.
- [GetVehicleHealth](GetVehicleHealth): Verifique a integridade de um veículo.
