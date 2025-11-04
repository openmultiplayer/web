---
title: GetPlayerName
sidebar_label: GetPlayerName
description: Haal de naam van een speler op.
tags: ["player"]
---

## Beschrijving

Haal de naam van een speler op.

| Naam    | Beschrijving |
| ------- | ------------ |
| playerid | ID van de speler waarvan je de naam wilt ophalen. |
| name[]   | Buffer om de naam in op te slaan (by reference). |
| len      | Maximale lengte van de string (aanbevolen MAX_PLAYER_NAME + 1). |

## Retourneert

De lengte van de spelersnaam, of 0 als de speler niet bestaat.

## Voorbeeld

```c
public OnPlayerConnect(playerid)
{
    new name[MAX_PLAYER_NAME + 1];
    GetPlayerName(playerid, name, sizeof(name));

    new msg[128];
    format(msg, sizeof(msg), "%s has joined the server.", name);
    SendClientMessageToAll(0xC4C4C4FF, msg);
    return 1;
}
```

## Opmerkingen

Een naam kan tot 24 tekens lang zijn via [SetPlayerName](SetPlayerName). De client kan alleen joinen met 3–20 tekens; anders wordt de verbinding geweigerd.

## Gerelateerd

- [SetPlayerName](SetPlayerName)
- [IsValidNickName](IsValidNickName)
- [GetPlayerIp](GetPlayerIp)
- [GetPlayerPing](GetPlayerPing)
- [GetPlayerScore](GetPlayerScore)
- [GetPlayerVersion](GetPlayerVersion)


