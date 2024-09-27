---
title: GetVehicleModel
description: Obtém o ID do modelo de um veículo.
tags: ["vehicle"]
---

## Descrição

Obtém o ID do modelo de um veículo.

| Nome      | Descrição                                |
| --------- | ---------------------------------------- |
| vehicleid | O ID do veículo para obter o modelo.     |

## Retornos

O [ID do modelo do veículo](../resources/vehicleid), ou **0** se o veículo não existir.

## Exemplos

```c
public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)
{
    if (GetVehicleModel(vehicleid) == 411) // 411 é o modelo do Infernus
    {
        SendClientMessage(playerid, 0xFFFFFFFF, "Nice Infernus!");
    }
    return 1;
}
```

## Funções Relacionadas

- [GetPlayerVehicleID](GetPlayerVehicleID): Obtém o ID do veículo em que o jogador está.
- [GetVehiclePos](GetVehiclePos): Obtém a posição de um veículo.
- [GetVehicleZAngle](GetVehicleZAngle): Verifica o ângulo atual de um veículo.
- [GetPlayerVehicleSeat](GetPlayerVehicleSeat): Verifica em qual assento o jogador está.

## Recursos Relacionados

- [IDs de Veículos](../resources/vehicleid)
