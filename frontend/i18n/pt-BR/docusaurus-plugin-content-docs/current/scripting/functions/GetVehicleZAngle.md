---
title: GetVehicleZAngle
sidebar_label: GetVehicleZAngle
description: "Obtenha a rotação de um veículo no eixo Z (guinada)."
tags: ["vehicle"]
---


## Descrição

Obtenha a rotação de um veículo no eixo Z (guinada).

| Nome | Descrição |
| ------------ | ----------------------------------------------------------------------- |
| vehicleid | O ID do veículo para obter o ângulo Z.                            |
| &Float:angle | Uma variável flutuante na qual armazenar a rotação Z, passada por referência. |

## Retornos

**true** - A função foi executada com sucesso.

**false** - Falha na execução da função. Isso significa que o veículo não existe.

A rotação do veículo é armazenada na variável especificada.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
     if (strcmp(cmdtext, "/vehrot", true) == 0)
     {
          new
               vehicleid,
               Float:rotZ,
               string[64];

          vehicleid = GetPlayerVehicleID(playerid);

          GetVehicleZAngle(vehicleid, rotZ);

          format(string, sizeof(string), "The current vehicle rotation is: %.0f", rotZ);
          SendClientMessage(playerid, 0xFFFFFFFF, string);
          return 1;
     }
     return 0;
}
```
## Funções Relacionadas

- [GetVehicleRotationQuat](GetVehicleRotationQuat): Obtenha a rotação quaternion de um veículo.
- [SetVehicleZAngle](SetVehicleZAngle): Define a direção de um veículo.
- [GetVehiclePos](GetVehiclePos): Obtenha a posição de um veículo.
- [GetVehicleMatrix](GetVehicleMatrix): Obtém a matriz de rotação real do veículo.
- [GetPlayerFacingAngle](GetPlayerFacingAngle): Verifique para onde o jogador está voltado.
