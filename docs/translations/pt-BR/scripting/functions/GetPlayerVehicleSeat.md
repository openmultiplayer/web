---
title: GetPlayerVehicleSeat
description: Descobre em qual assento um jogador está.
tags: ["player", "vehicle"]
---

## Descrição

Descobre em qual assento um jogador está.

| Nome      | Descrição                                       |
| --------- | ----------------------------------------------- |
| playerid  | O ID do jogador do qual você quer saber o assento. |

## Retornos

O ID do assento em que o jogador está.

**-1** indica que não está em um veículo, **0** é o motorista, **1** é o passageiro da frente, e **2** e **3** são os passageiros traseiros.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/myseat", true) == 0)
    {
        new
            playerSeat = GetPlayerVehicleSeat(playerid);

        // Como você pode descartar suas informações.
        if (playerSeat == 128)
        {
            return SendClientMessage(playerid, 0xFFFFFFFF, "Um erro impediu que retornássemos o ID do assento.");
        }

        new
            string[24];

        format(string, sizeof(string), "Seu assento: %i", playerSeat);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
        return 1;
    }
    return 0;
}
```

| ID  | Assento                       |
| --- | ------------------------------ |
| 0   | Motorista                     |
| 1   | Passageiro da frente          |
| 2   | Passageiro traseiro esquerdo   |
| 3   | Passageiro traseiro direito    |
| 4+  | Assentos de passageiros (coaches etc.) |

## Funções Relacionadas

- [GetPlayerVehicleID](GetPlayerVehicleID): Obtém o ID do veículo em que o jogador está.
- [PutPlayerInVehicle](PutPlayerInVehicle): Coloca um jogador em um veículo.
