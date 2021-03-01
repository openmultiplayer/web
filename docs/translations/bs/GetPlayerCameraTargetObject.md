---
title: GetPlayerCameraTargetObject
description: Dozvoljava vam da dobijete ID objekta u kojeg igrač gleda. 
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

Dozvoljava vam da dobijete ID objekta u kojeg igrač gleda.

| Ime      | Deskripcija            |
| -------- | ---------------------- |
| playerid | ID igrača za provjeru  |

## Returns

ID objekta u kojeg igrač gleda. Ako je INVALID_OBJECT_ID (65535) vraćen, igrač ne gleda u bilo koji objekat.

## Primjeri

```c
new globalObjectID;
public OnGameModeInit()
{
    globalObjectID = CreateObject(1337, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/check", true))
    {
        new objectid = GetPlayerCameraTargetObject(playerid);
        if (objectid == globalObjectID)
        {
             SendClientMessage(playerid, -1, "Gledate u objekat.");
        }
        else if (objectid == INVALID_OBJECT_ID) // INVALID_OBJECT_ID = 65535
        {
             SendClientMessage(playerid, -1, "Ne gledate u objekat.");
        }
        return 1;
    }
    return 0;
}
```

## Zabilješke

:::warning

Ovaj funkcija je isključena po default-u radi uštede propustnosti. Koristite EnablePlayerCameraTarget da biste uključili za svakog igrača. 

:::

## Srodne Funkcije

- [GetPlayerCameraTargetVehicle](GetplayerCameraTargetVehicle): Dobij ID vozila u kojeg igrač gleda.
- [GetPlayerCameraTargetPlayer](GetplayerCameraTargetPlayer): Dobij ID igrača u kojeg igrač gleda.
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): Dobij prednji vektor kamere igrača.
