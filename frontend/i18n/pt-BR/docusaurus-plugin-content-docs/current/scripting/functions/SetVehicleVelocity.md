---
title: SetVehicleVelocity
sidebar_label: SetVehicleVelocity
description: "Define a velocidade X, Y e Z de um veículo."
tags: ["vehicle"]
---


## Descrição

Define a velocidade X, Y e Z de um veículo.

| Nome | Descrição |
| --------- | --------------------------------------------- |
| vehicleid | O ID do veículo para definir a velocidade. |
| Float:x | A velocidade na direção X.              |
| Float:y | A velocidade na direção Y.              |
| Float:z | A velocidade na direção Z.              |

## Retornos

**true** - A função foi executada com sucesso.

**false** - Falha na execução da função. O veículo não existe.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/jump", cmdtext))
    {
        if (IsPlayerInAnyVehicle(playerid))
        {
            SetVehicleVelocity(GetPlayerVehicleID(playerid), 0.0, 0.0, 0.2);
        }
        return 1;
    }
}
```
## Notas

:::warning

Esta função não afeta veículos desocupados e não afeta trens.

:::

## Funções Relacionadas

- [GetVehicleVelocity](GetVehicleVelocity): Obtenha a velocidade de um veículo nos eixos X, Y e Z.
