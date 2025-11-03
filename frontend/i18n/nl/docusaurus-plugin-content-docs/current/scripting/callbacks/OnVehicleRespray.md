---
title: OnVehicleRespray
sidebar_label: OnVehicleRespray
description: Deze callback wordt aangeroepen wanneer een speler een modshop verlaat, zelfs als de kleuren niet zijn veranderd.
tags: ["vehicle"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler een modshop verlaat, zelfs als de kleuren niet zijn veranderd. Let op, de naam is dubbelzinnig, Pay 'n' Spray shops roepen deze callback niet aan.

| Naam      | Beschrijving                                                  |
| --------- | ------------------------------------------------------------ |
| playerid  | Het ID van de speler die het voertuig bestuurt.             |
| vehicleid | Het ID van het voertuig dat werd resprayed.                  |
| color1    | De kleur waarnaar de primaire kleur van het voertuig werd veranderd. |
| color2    | De kleur waarnaar de secundaire kleur van het voertuig werd veranderd. |

## Returns

Wordt altijd als eerste aangeroepen in gamemode; return 0 blokkeert ook andere filterscripts.

## Voorbeelden

```c
public OnVehicleRespray(playerid, vehicleid, color1, color2)
{
    new string[48];
    format(string, sizeof(string), "You resprayed vehicle %d to colors %d and %d!", vehicleid, color1, color2);
    SendClientMessage(playerid, COLOR_GREEN, string);
    return 1;
}
```

## Notities

:::tip

Deze callback wordt niet aangeroepen door ChangeVehicleColor. Misleidend genoeg wordt deze callback niet aangeroepen voor pay 'n' spray (alleen modshops).

Fix hier: http://pastebin.com/G81da7N1

:::

:::warning

Bekende Bug(s):

- Het bekijken van een component in een modshop kan deze callback aanroepen.

:::

## Gerelateerde Callbacks

- [OnVehiclePaintjob](OnVehiclePaintjob): Deze callback wordt aangeroepen wanneer de paintjob van een voertuig wordt veranderd.
- [OnVehicleMod](OnVehicleMod): Deze callback wordt aangeroepen wanneer een voertuig wordt gemod.
- [OnEnterExitModShop](OnEnterExitModShop): Deze callback wordt aangeroepen wanneer een voertuig een modshop binnenkomt of verlaat.

## Gerelateerde Functies

- [ChangeVehicleColor](../functions/ChangeVehicleColor): Stel de kleur van een voertuig in.
- [ChangeVehiclePaintjob](../functions/ChangeVehiclePaintjob): Verander de paintjob van een voertuig.
