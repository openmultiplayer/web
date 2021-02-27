---
title: GetPlayerCameraTargetPlayer
description: Dozvoljava vam da dobijete ID drugog igrača u kojeg igrač gleda.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

Dozvoljava vam da dobijete ID drugog igrača u kojeg igrač gleda.

| Ime      | Deskripcija            |
| -------- | ---------------------- |
| playerid | ID igrača za provjeru  |

## Returns

ID drugog igrača u kojeg igrač gleda.

## Primjeri

```c
new playerTarget = GetPlayerCameraTargetPlayer(playerid);

if (IsPlayerAdmin(playerTarget))
{
    GameTextForPlayer(playerid, "Gledanje u admina", 3000, 3);
}
```

## Zabilješke

:::warning

Nemojte brkati ovu funkciju sa GetPlayerTargetPlayer. GetPlayerTargetPlayer vraća ID

Do not confuse this function with GetPlayerTargetPlayer. GetPlayerTargetPlayer vraća ID drugog igrača u kojeg igrač cilja (sa oružjem). GetPlayerCameraTarget vraća ID drugog igrača u kojeg igrač gleda (referentna tačka je centar ekrana).

:::

## Srodne Funkcije

- [GetPlayerCameraTargetActor](GetPlayerCameraTargetActor): Dobij ID aktora (ako ima) u kojeg igrač gleda.
- [GetPlayerCameraTargetVehicle](GetPlayerCameraTargetVehicle): Dobij ID vozila u kojeg igrač gleda.
- [GetPlayerCameraTargetObject](GetplayerCameraTargetObject): Dobij ID object a player is looking at.
- [GetPlayerCameraFrontVector](GetPlayercameraFrontVector): Dobij prednji vektor kamere igrača.
