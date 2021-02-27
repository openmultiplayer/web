---
title: GetPlayerCameraTargetVehicle
description: Dobijanje ID vozila u kojeg igrač gleda.
tags: ["player", "vehicle"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

Dobijanje ID vozila u kojeg igrač gleda.

| Ime      | Deskripcija            |
| -------- | ---------------------- |
| playerid | ID igrača za provjeru  |

## Returns

ID vozila u kojeg igrač gleda. INVALID_VEHICLE_ID ako nema.

## Primjeri

```c
new globalVehicleID;
public OnGameModeInit()
{
    globalVehicleID = CreateVehicle(596, 0, 0, 3, 0, 0, 0, -1, -1, -1);
    return 1;
}

public OnPlayerConnect(playerid)
{
    EnablePlayerCameraTarget(playerid, true);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/check", true))
    {
        new vehicleid = GetPlayerCameraTargetVehicle(playerid);
        if (vehicleid == globalVehicleID)
        {
             SendClientMessage(playerid, -1, "Gledate u vozilo!");
        }
        else
        {
            SendClientMessage(playerid, -1, "Ne gledate u vozilo!");
        }
        return 1;
    }
    return 0;
}
```

## Zabilješke

:::tip

Ovaj funkciju može (očigledno) samo vratiti ID jednog vozilo istovremeno, dok igrač možda gleda u više odjednom. Prvenstveno detektuje najbliža vozila .

:::

:::warning

Ova funkcija je isključena po default-u radi uštede propustnosti. Koristite EnablePlayerCameraTarget da biste uključili za svakog igrača.

:::

## Srodne Funkcije

- [GetPlayerCameraTargetPlayer](GetPlayerCameraTargetPlayer): Dobijanje ID igrača u kojeg igrač gleda.
- [GetPlayerCameraTargetObject](GetplayerCameraTargetObject): Dobijanje ID objekta u kojeg igrač gleda.
- [EnablePlayerCameraTarget](EnablePlayerCameraTarget): Omogućite funkcije ciljanja kamere igrača.
- [GetPlayerCameraFrontVector](GetPlayercameraFrontVector): Dobijanje prednje kamere igrača.
