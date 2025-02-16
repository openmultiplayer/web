---
title: DestroyVehicle
sidebar_label: DestroyVehicle
description: Löscht ein Fahrzeug.
tags: ["vehicle"]
---

## Beschreibung

Löscht ein Fahrzeug. Fahrzeug verschwindet sofort.

| Name      | Beschreibung                       |
| --------- | --------------------------------- |
| vehicleid | Die ID des Fahrzeugs, das zerstört wird. |

## Rückgabe(return value)

1: Funktion erfolgreich ausgeführt.

0: Funktion fehlgeschlagen. Das Fahrzeug existiert nicht.

## Beispiele

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

## Ähnliche Funktionen

- [CreateVehicle](CreateVehicle): Erstelle ein Fahrzeug.
- [RemovePlayerFromVehicle](RemovePlayerFromVehicle): Wirft einen Spieler aus seinem Fahrzeug.
- [SetVehicleToRespawn](SetVehicleToRespawn): Respawnt ein Fahrzeug.
