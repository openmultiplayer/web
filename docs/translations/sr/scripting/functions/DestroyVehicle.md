---
title: DestroyVehicle
description: Unistava vozilo.
tags: ["vehicle"]
---

## Description

Unistava vozilo. Vozilo odmah nestaje.

| Name      | Description                 |
| --------- | --------------------------- |
| vehicleid | ID vozila koje se unistava. |

## Returns

1: Funkcija je uspesno izvrsena.

0: Funkcija nije uspesno izvrsena. Vozilo ne postoji.

## Examples

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

## Related Functions

- [CreateVehicle](CreateVehicle.md): Kreiraj vozilo.
- [RemovePlayerFromVehicle](RemovePlayerFromVehicle.md): Izbaci igraca iz vozila.
- [SetVehicleToRespawn](SetVehicleToRespawn.md): Respawn vozila.
