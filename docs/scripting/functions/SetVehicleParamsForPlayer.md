---
title: SetVehicleParamsForPlayer
description: Set the parameters of a vehicle for a player.
tags: ["player", "vehicle"]
---

## Description

Set the parameters of a vehicle for a player.

| Name        | Description                                                                                   |
| ----------- | --------------------------------------------------------------------------------------------- |
| vehicle     | The ID of the vehicle to set the parameters of.                                               |
| playerid    | The ID of the player to set the vehicle's parameters for.                                     |
| bool:objective   | false to disable the objective or true to show it. This is a bobbing yellow arrow above the vehicle. |
| bool:doorslocked | false to unlock the doors or true to lock them.                                                      |

## Returns

true: The function executed successfully.

false: The function failed to execute. The player and/or vehicle specified do not exist.

## Examples

```c
// sometime earlier:
SetVehicleParamsForPlayer(iPlayerVehicle, iPlayerID, true, false);

// sometime later when you want the vehicle to respawn:
new
    iEngine, iLights, iAlarm,
    iDoors, iBonnet, iBoot,
    iObjective;

GetVehicleParamsEx(iPlayerVehicle, iEngine, iLights, iAlarm, iDoors, iBonnet, iBoot, iObjective);
SetVehicleParamsEx(iPlayerVehicle, iEngine, iLights, iAlarm, iDoors, iBonnet, iBoot, 0);
// Locks own car for all players, except the player who used the command.
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext,"/lock",true))
    {
        if (!IsPlayerInAnyVehicle(playerid)) return SendClientMessage(playerid,0xFFFFFFAA,"You have to be inside a vehicle.");
        for (new i = 0; i < MAX_PLAYERS; i++)
        {
            if (i == playerid) continue;
            SetVehicleParamsForPlayer(GetPlayerVehicleID(playerid),i,false,true);
        }
        return 1;
    }
    return 0;
}
// Will show vehicle markers for players streaming in for 0.3a+
new bool:iVehicleObjective[MAX_VEHICLES][2];

public OnGameModeInit() //Or another callback
{
    new temp = AddStaticVehicleEx(400, 0.0, 0.0, 5.0, 0.0, 0,0, -1); //ID 1
    iVehicleObjective[temp][0] = true; //Marker
    iVehicleObjective[temp][1] = false; //Door Lock
    return 1;
}

stock SetVehicleParamsForPlayerEx(vehicleid, playerid, bool:objective, bool:doorslocked)
{
    SetVehicleParamsForPlayer(vehicleid, playerid, objective, doorslocked);
    iVehicleObjective[vehicleid][0] = objective;
    iVehicleObjective[vehicleid][1] = doorslocked;
}

public OnVehicleStreamIn(vehicleid, forplayerid)
{
    SetVehicleParamsForPlayer(vehicleid, forplayerid, iVehicleObjective[vehicleid][0], iVehicleObjective[vehicleid][1]);
}
//Top
new myMarkedCar;

public OnGameModeInit() //Or another callback
{
    myMarkedCar = AddStaticVehicleEx(400, 0.0, 0.0, 5.0, 0.0, 0,0, -1); //For example: Black Landstalker near Blueberry Acres
    return 1;
}

//Whatever your want
public OnVehicleStreamIn(vehicleid, forplayerid)
{
    if (vehicleid == myMarkedCar)
    {
        SetVehicleParamsForPlayer(myMarkedCar, forplayerid, true, false); // marker can be visible only if the vehicle streamed for player
    }
    return 1;
}
```

## Notes

:::tip

Vehicles must be respawned for the 'objective' to be removed.

:::

:::warning

Since 0.3a you will have to reapply this function when OnVehicleStreamIn is called.

:::

## Related Functions

- [SetVehicleParamsEx](SetVehicleParamsEx): Sets a vehicle's params for all players.
