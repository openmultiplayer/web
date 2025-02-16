---
title: IsPlayerInAnyVehicle
sidebar_label: IsPlayerInAnyVehicle
description: Verifica se um jogador está dentro de qualquer veículo (como motorista ou passageiro).
tags: ["player", "vehicle"]
---

## Descrição

Verifica se um jogador está dentro de qualquer veículo (como motorista ou passageiro).

| Nome      | Descrição                     |
| --------- | ----------------------------- |
| playerid  | O ID do jogador a ser verificado. |

## Retornos

**true** - O jogador está em um veículo.

**false** - O jogador não está em um veículo.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/invehicle", true) == 0)
    {
        if (IsPlayerInAnyVehicle(playerid))
        {
            SendClientMessage(playerid, 0x00FF00FF, "Você está em um veículo.");
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "Você não está em nenhum veículo.");
        }
        return 1;
    }
    return 0;
}
```

## Funções Relacionadas

- [IsPlayerInVehicle](IsPlayerInVehicle): Verifica se um jogador está em um determinado veículo.
- [GetPlayerVehicleSeat](GetPlayerVehicleSeat): Verifica em qual assento o jogador está.

