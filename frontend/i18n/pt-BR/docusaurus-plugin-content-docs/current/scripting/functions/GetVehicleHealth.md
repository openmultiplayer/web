---
title: GetVehicleHealth
sidebar_label: GetVehicleHealth
description: "Obtenha a saúde de um veículo."
tags: ["vehicle"]
---


## Descrição

Obtenha a saúde de um veículo.

| Nome | Descrição |
| ------------- | ---------------------------------------------------------------------------- |
| vehicleid | O ID do veículo para obter a saúde.                                  |
| &Float:health | Uma variável float na qual armazenar a integridade do veículo, passada por referência |

## Retornos

**true** – sucesso

**false** - falha (veículo inválido ID).

A integridade do veículo é armazenada na variável referenciada, não no valor de retorno.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/repair", true) == 0)
    {
        new
            Float:vehicleHealth,
            vehicleid = GetPlayerVehicleID(playerid);

        GetVehicleHealth(vehicleid, vehicleHealth);

        if (vehicleHealth > 500.0)
        {
            return SendClientMessage(playerid, COLOR_RED, "Vehicle doesn't need repairing!");
        }

        SetVehicleHealth(vehicleid, 1000.0);
        SendClientMessage(playerid, COLOR_GREEN, "Vehicle repaired!");
        return 1;
    }
    return 0;
}
```
## Notas

:::tip

A integridade total do veículo é 1000, porém valores mais altos são possíveis e aumentam a integridade do veículo. Para obter mais informações sobre valores de integridade, consulte [aqui](../resources/vehiclehealth).

:::

:::tip

Um veículo pega fogo quando sua saúde está abaixo de 250. Ele explodirá alguns segundos depois.

:::

## Funções Relacionadas

- [SetVehicleHealth](SetVehicleHealth): Define a integridade de um veículo.
- [GetPlayerHealth](GetPlayerHealth): Descubra quanta saúde um jogador tem.
- [GetPlayerArmour](GetPlayerArmour): Descubra quanta armadura um jogador possui.

## Recursos relacionados

- [Valores de integridade do veículo](../resources/vehiclehealth)
