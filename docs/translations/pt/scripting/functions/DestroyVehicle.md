---
title: DestroyVehicle
description: Destrói um veículo.
tags: ["vehicle"]
---

## Descrição

Destrói um veículo. Irá desaparecer instantaneamente. 

| Nome      | Descrição                         |
| --------- | --------------------------------- |
| vehicleid | O ID do veículo a ser destruído.  |

## Retorno

1: A função foi executada com sucesso.

0: A função falhou ao ser executada. O veículo não existe.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
     if (strcmp(cmdtext, "/destroyveh", true) == 0)
     {
          new vehicleid = GetPlayerVehicleID(playerid);
          DestroyVehicle(vehicleid);
          return 1;
     }

     return 0;
}
```

## Funções Relacionadas

- [CreateVehicle](CreateVehicle.md): Cria um veículo.
- [RemovePlayerFromVehicle](RemovePlayerFromVehicle.md): Jogue um jogador para fora do veículo.
- [SetVehicleToRespawn](SetVehicleToRespawn.md): Respawna um veículo. 
