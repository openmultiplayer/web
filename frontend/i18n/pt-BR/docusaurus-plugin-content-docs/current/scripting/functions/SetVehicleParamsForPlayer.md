---
title: SetVehicleParamsForPlayer
sidebar_label: SetVehicleParamsForPlayer
description: "Defina os parâmetros de um veículo para um jogador."
tags: ["player", "vehicle"]
---


## Descrição

Defina os parâmetros de um veículo para um jogador.

| Nome | Descrição |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------ |
| vehicle | O ID do veículo para definir os parâmetros.                                                                                |
| playerid | O ID do jogador para o qual definir os parâmetros do veículo.                                                                      |
| objective | VEHICLE_PARAMS_OFF para desativar o objetivo ou VEHICLE_PARAMS_ON para mostrá-lo. Esta é uma seta amarela oscilante acima do veículo. |
| doorslocked | VEHICLE_PARAMS_OFF para destravar as portas ou VEHICLE_PARAMS_ON para travá-las.                                                      |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. O jogador e/ou veículo especificado não existe.

## Exemplos

```c
// algum tempo antes:
SetVehicleParamsForPlayer(iPlayerVehicle, iPlayerID, VEHICLE_PARAMS_ON, VEHICLE_PARAMS_OFF);

// algum tempo depois, quando você quiser que o veículo reapareça:
new
    iEngine, iLights, iAlarm,
    iDoors, iBonnet, iBoot,
    iObjective;

GetVehicleParamsEx(iPlayerVehicle, iEngine, iLights, iAlarm, iDoors, iBonnet, iBoot, iObjective);
SetVehicleParamsEx(iPlayerVehicle, iEngine, iLights, iAlarm, iDoors, iBonnet, iBoot, VEHICLE_PARAMS_OFF);

// Bloqueia o próprio carro de todos os jogadores, exceto o jogador que usou o comando.
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/lock", true))
    {
        if (!IsPlayerInAnyVehicle(playerid))
        {
            return SendClientMessage(playerid,0xFFFFFFAA,"You have to be inside a vehicle.");
        }

        for (new i = 0; i < MAX_PLAYERS; i++)
        {
            if (i == playerid)
            {
                continue;
            }
            SetVehicleParamsForPlayer(GetPlayerVehicleID(playerid), i, false, true);
        }
        return 1;
    }
    return 0;
}

// Mostrará marcadores de veículos para jogadores fazendo streaming para 0.3a+
new iVehicleObjective[MAX_VEHICLES][2];

public OnGameModeInit() // Ou outro callback
{
    new temp = AddStaticVehicleEx(400, 0.0, 0.0, 5.0, 0.0, 0, 0, -1); // ID 1
    iVehicleObjective[temp][0] = VEHICLE_PARAMS_ON; //Marcador
    iVehicleObjective[temp][1] = VEHICLE_PARAMS_OFF; // Trava da porta
    return 1;
}

stock SetVehicleParamsForPlayerEx(vehicleid, playerid, objective, doorslocked)
{
    SetVehicleParamsForPlayer(vehicleid, playerid, objective, doorslocked);
    iVehicleObjective[vehicleid][0] = objective;
    iVehicleObjective[vehicleid][1] = doorslocked;
}

public OnVehicleStreamIn(vehicleid, forplayerid)
{
    SetVehicleParamsForPlayer(vehicleid, forplayerid, iVehicleObjective[vehicleid][0], iVehicleObjective[vehicleid][1]);
}

// No topo
new myMarkedCar;

public OnGameModeInit() // Ou outro callback
{
    myMarkedCar = AddStaticVehicleEx(400, 0.0, 0.0, 5.0, 0.0, 0, 0, -1); // Por exemplo: Landstalker preta perto de Blueberry Acres
    return 1;
}

// O que você quiser
public OnVehicleStreamIn(vehicleid, forplayerid)
{
    if (vehicleid == myMarkedCar)
    {
        SetVehicleParamsForPlayer(myMarkedCar, forplayerid, VEHICLE_PARAMS_ON, VEHICLE_PARAMS_OFF); // o marcador só pode ser visível se o veículo for transmitido para o jogador
    }
    return 1;
}
```
## Notas

:::tip

Os veículos devem ser respawnados para que o ‘objetivo’ seja removido.

:::

:::warning

Você terá que reaplicar esta função quando [OnVehicleStreamIn](../callbacks/OnVehicleStreamIn) for chamado.

:::

## Funções Relacionadas

- [SetVehicleParamsEx](SetVehicleParamsEx): Define os parâmetros de um veículo para todos os jogadores.
