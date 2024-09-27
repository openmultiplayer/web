---
title: GetVehiclePos
description: Obtém a posição de um veículo.
tags: ["vehicle"]
---

## Descrição

Obtém a posição de um veículo.

| Nome       | Descrição                                                               |
| ---------- | ----------------------------------------------------------------------- |
| vehicleid  | O ID do veículo para obter a posição.                                   |
| &Float:x   | Uma variável float para armazenar a coordenada X, passada por referência. |
| &Float:y   | Uma variável float para armazenar a coordenada Y, passada por referência. |
| &Float:z   | Uma variável float para armazenar a coordenada Z, passada por referência. |

## Retornos

**true** - A função foi executada com sucesso.

**false** - A função falhou ao ser executada. O veículo especificado não existe.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
     if (strcmp(cmdtext, "/vehpos", true) == 0)
     {
          new vehicleid = GetPlayerVehicleID(playerid);

          // se vehicleid for igual a 0
          if (vehicleid == 0)
          {
               return SendClientMessage(playerid, -1, "Você não está em nenhum veículo!");
          }

          new
               Float:vehX, Float:vehY, Float:vehZ,
               string[128];

          GetVehiclePos(vehicleid, vehX, vehY, vehZ);
          format(string, sizeof(string), "As posições atuais do veículo são: %f, %f, %f", vehX, vehY, vehZ);
          SendClientMessage(playerid, 0xFFFFFFFF, string);
          return 1;
     }

     return 0;
}
```

## Funções Relacionadas

- [GetVehicleDistanceFromPoint](GetVehicleDistanceFromPoint): Obtém a distância entre um veículo e um ponto.
- [SetVehiclePos](SetVehiclePos): Define a posição de um veículo.
- [GetVehicleZAngle](GetVehicleZAngle): Verifica o ângulo atual de um veículo.
- [GetVehicleRotationQuat](GetVehicleRotationQuat): Obtém o quaternário de rotação de um veículo.
