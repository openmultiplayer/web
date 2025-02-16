---
title: IsPlayerInVehicle
sidebar_label: IsPlayerInVehicle
description: Verifica se um jogador está em um veículo específico.
tags: ["player", "vehicle"]
---

## Descrição

Verifica se um jogador está em um veículo específico.

| Nome      | Descrição                               |
| --------- | --------------------------------------- |
| playerid  | ID do jogador.                         |
| vehicleid | ID do veículo. Nota: NÃO é o modelid! |

## Retornos

**true** - O jogador ESTÁ no veículo.

**false** - O jogador NÃO está no veículo.

## Exemplos

```c
new gSpecialCar;

public OnGameModeInit()
{
    gSpecialCar = AddStaticVehicle(411, 0.0, 0.0, 5.0, 0.0, -1, -1);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/gSpecialCar", true) == 0)
    {
        if (IsPlayerInVehicle(playerid, gSpecialCar))
        {
            SendClientMessage(playerid, -1, "Você está no carro especial!");
        }
        return 1;
    }
    return 0;
}
```

## Funções Relacionadas

- [IsPlayerInAnyVehicle](IsPlayerInAnyVehicle): Verifica se um jogador está em qualquer veículo.
- [GetPlayerVehicleSeat](GetPlayerVehicleSeat): Verifica em qual assento o jogador está.
