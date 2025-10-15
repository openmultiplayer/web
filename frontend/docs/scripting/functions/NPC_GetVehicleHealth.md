---
title: NPC_GetVehicleHealth
sidebar_label: NPC_GetVehicleHealth
description: Gets the health of an NPC's vehicle.
tags: ["npc", "vehicle"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the health of an NPC's vehicle.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns the vehicle health as a float value, or 0.0 if the NPC is not in a vehicle.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Driver");
    NPC_Spawn(npcid);

    new vehicleid = CreateVehicle(411, 1958.33, 1343.12, 15.36, 0.0, -1, -1, 300);
    NPC_PutInVehicle(npcid, vehicleid, 0);

    new Float:health = NPC_GetVehicleHealth(npcid);
    printf("NPC %d vehicle health: %.1f", npcid, health);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkvehicles", true))
    {
        new npcs[MAX_NPCS];
        new count = NPC_GetAll(npcs);

        new Float:health = NPC_GetVehicleHealth(0);

        new status[16];
        if (health >= 800.0)
            status = "Excellent";
        else if (health >= 600.0)
            status = "Good";
        else if (health >= 400.0)
            status = "Damaged";
        else if (health >= 200.0)
            status = "Badly Damaged";
        else
            status = "Critical";

        new msg[64];
        format(msg, sizeof(msg), "NPC 0 vehicle: %.1f HP - %s", health, status);
        SendClientMessage(playerid, 0xFFFFFFFF, msg);

        return 1;
    }
    return 0;
}

forward MonitorVehicleHealth();
public MonitorVehicleHealth()
{
    new Float:health = NPC_GetVehicleHealth(0);

    if (health < 300.0)
    {
        printf("Warning: NPC 0 vehicle health critical: %.1f", health);

        // Auto-repair if too low
        NPC_SetVehicleHealth(0, 1000.0);
        printf("Auto-repaired NPC 0 vehicle");
    }
}
```

## Notes

- Returns 0.0 if the NPC is not in a vehicle
- Vehicle health typically ranges from 0.0 to 1000.0
- Health below 250.0 usually means the vehicle will catch fire
- Only works when the NPC is the driver of the vehicle
- Use this to monitor vehicle condition for maintenance or replacement

## Related Functions

- [NPC_SetVehicleHealth](NPC_SetVehicleHealth): Set vehicle health
- [NPC_GetVehicle](NPC_GetVehicle): Get NPC's current vehicle
- [NPC_GetVehicleID](NPC_GetVehicleID): Get vehicle ID
- [NPC_PutInVehicle](NPC_PutInVehicle): Put NPC in vehicle

## Related Callbacks

_No specific callbacks are triggered by this function._
