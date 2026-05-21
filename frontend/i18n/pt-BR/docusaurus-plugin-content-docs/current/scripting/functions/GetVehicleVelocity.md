---
title: GetVehicleVelocity
sidebar_label: GetVehicleVelocity
description: "Obtenha a velocidade de um veículo nos eixos X, Y e Z."
tags: ["vehicle"]
---


## Descrição

Obtenha a velocidade de um veículo nos eixos X, Y e Z.

| Nome | Descrição |
| --------- | ------------------------------------------------------------------------------------ |
| vehicleid | O ID do veículo cuja velocidade será obtida.                                        |
| &Float:x | Uma variável float na qual armazenar a velocidade X do veículo, passada por referência. |
| &Float:y | Uma variável flutuante na qual armazenar a velocidade Y do veículo, passada por referência. |
| &Float:z | Uma variável flutuante na qual armazenar a velocidade Z do veículo, passada por referência. |

## Retornos

**true** - A função foi executada com sucesso.

**false** - Falha na execução da função. Isso significa que o veículo especificado não existe.

A velocidade do veículo é armazenada nas variáveis ​​especificadas.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/GetMyCarVelocity", cmdtext))
    {
        if (!IsPlayerInAnyVehicle(playerid))
        {
            return 1;
        }

        new
            Float: vehVelocity[3],
            string[128];

        GetVehicleVelocity(GetPlayerVehicleID(playerid), vehVelocity[0], vehVelocity[1], vehVelocity[2]);

        format(string, sizeof(string), "You are going at a velocity of X%f, Y%f, Z%f", vehVelocity[0], vehVelocity[1], vehVelocity[2]);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
        return 1;
    }
    return 0;
}
```
## Notas

:::tip

Esta função pode ser usada para recuperar a velocidade de um veículo (km/h, m/s ou mph).

:::

## Funções Relacionadas

- [SetVehicleVelocity](SetVehicleVelocity): Defina a velocidade de um veículo.
- [SetPlayerVelocity](SetPlayerVelocity): Define a velocidade de um jogador.
- [GetPlayerVelocity](GetPlayerVelocity): Obtenha a velocidade de um jogador.
