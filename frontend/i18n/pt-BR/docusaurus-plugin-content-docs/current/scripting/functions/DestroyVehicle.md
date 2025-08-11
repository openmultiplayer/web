---
title: DestroyVehicle
sidebar_label: DestroyVehicle
description: Destroi um veículo.
tags: ["vehicle"]
---

## Descrição

Destrói um veículo. Ele desaparecerá instantaneamente.

| Nome      | Descrição                        |
| --------- | -------------------------------- |
| vehicleid | O ID do veículo a ser destruído. |

## Retornos

**true** - A função foi executada com sucesso.

**false** - A função falhou ao ser executada. O veículo não existe.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
     if (strcmp(cmdtext, "/destroyveh", true) == 0)
     {
          if (IsPlayerInAnyVehicle(playerid))
          {
               new vehicleid = GetPlayerVehicleID(playerid);
               DestroyVehicle(vehicleid);
          }
          return 1;
     }
     return 0;
}
```

## Funções Relacionadas

- [CreateVehicle](CreateVehicle): Cria um veículo.
- [RemovePlayerFromVehicle](RemovePlayerFromVehicle): Expulsa um jogador de seu veículo.
- [SetVehicleToRespawn](SetVehicleToRespawn): Faz um veículo reaparecer.
