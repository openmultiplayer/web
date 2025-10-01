---
title: GetPlayerFacingAngle
sidebar_label: GetPlayerFacingAngle
description: Haal de kijkhoek (rotatie) van een speler op.
tags: ["player"]
---

## Beschrijving

Haal de rotatie op waar de speler naartoe kijkt.

| Naam | Beschrijving |
| ---- | ------------ |
| playerid | Speler waarvan je de rotatie wilt. |
| &Float:angle | Float‑referentie om de rotatie in op te slaan. |

## Retourneert

**true** bij succes, **false** als de speler niet bestaat. De rotatie wordt in de variabele opgeslagen.

## Voorbeeld

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/angle", true))
    {
        new Float:angle, s[64];
        GetPlayerFacingAngle(playerid, angle);
        format(s, sizeof(s), "Your facing angle: %0.2f", angle);
        SendClientMessage(playerid, -1, s);
        return 1;
    }
    return 0;
}
```

## Opmerkingen

- In voertuigen is de teruggegeven rotatie vaak onjuist; gebruik [GetVehicleZAngle](GetVehicleZAngle).
- Hoeken zijn in GTA:SA gespiegeld: 90° is West (i.p.v. Oost). Converteer met `360 - angle`.

## Gerelateerd

- [GetVehicleZAngle](GetVehicleZAngle)
- [SetPlayerFacingAngle](SetPlayerFacingAngle)
- [GetPlayerRotationQuat](GetPlayerRotationQuat)


