---
title: SetVehicleZAngle
sidebar_label: SetVehicleZAngle
description: "Defina a rotação Z (guinada) de um veículo."
tags: ["vehicle"]
---


## Descrição

Defina a rotação Z (guinada) de um veículo.

| Nome | Descrição |
| ----------- | --------------------------------------------- |
| vehicleid | O ID do veículo para definir a rotação. |
| Float:angle | O ângulo Z a ser definido.                           |

## Retornos

**true** - A função foi executada com sucesso.

**false** - Falha na execução da função. O veículo especificado não existe.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/flip", true) == 0)
    {
        new
            vehicleid,
            Float:angle;

        vehicleid = GetPlayerVehicleID(playerid);
        GetVehicleZAngle(vehicleid, angle);
        SetVehicleZAngle(vehicleid, angle);

        SendClientMessage(playerid, 0xFFFFFFFF, "Your vehicle has been flipped.");
        return 1;
    }
    return 0;
}
```
## Notas

:::tip

- A rotação X e Y (inclinação e rotação) de um veículo será redefinida quando esta função for usada.
- As rotações X e Y não podem ser definidas.
- Esta função não funciona em veículos desocupados (acredita-se que seja uma limitação GTA).

:::

## Funções Relacionadas

- [GetVehicleZAngle](GetVehicleZAngle): Verifique o ângulo atual de um veículo.
- [SetVehiclePos](SetVehiclePos): Define a posição de um veículo.
