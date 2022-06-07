---
title: OnVehicleSpawn
description: Dieses Callback wird ausgeführt wenn ein Fahrzeug respawnt.
tags: ["vehicle"]
---

:::warning

Diese Callback wird **nur** ausgeführt wenn ein Fahrzeug **re**spawnt! CreateVehicle und AddStaticVehicle(Ex) werden das Callbacks **nicht ** triggern.

:::

## Beschreibung

Dieses Callback wird ausgeführt wenn ein Fahrzeug respawnt.

| Name      | Beschreibung                         |
| --------- | ----------------------------------- |
| vehicleid | ID des Fahrzeugs das gespawnt ist. |

## Rückgabe(return value)

0 - Vermeidet, dass andere Filterscripts dieses Callback erhalten.

1 - Das Callback wird ans nächste Filterscript weitergegeben.

Wird immer zuerst in Filterscripts ausgeführt.

## Beispiele

```c
public OnVehicleSpawn(vehicleid)
{
    printf("Fahrzeug %i ist gespawnt!",vehicleid);
    return 1;
}
```

## Ähnliche Funktionen

- [SetVehicleToRespawn](../functions/SetVehicleToRespawn): Respawne ein Fahrzeug.
- [CreateVehicle](../functions/CreateVehicle): Erstelle ein Fahrzeug.
