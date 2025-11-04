---
title: GetPlayerIp
sidebar_label: GetPlayerIp
description: Haal het IP‑adres van een speler op.
tags: ["player", "ip address"]
---

## Beschrijving

Haal het IP‑adres van de opgegeven speler op en sla het op in een string.

| Naam | Beschrijving |
| ---- | ------------ |
| playerid | ID van de speler. |
| ip[] | Buffer om het IP in op te slaan (by reference). |
| len = sizeof (ip) | Maximale lengte (aanbevolen 16). |

## Retourneert

Het IP wordt in de array opgeslagen.

## Voorbeeld

```c
public OnPlayerConnect(playerid)
{
    new ipAddress[16];
    GetPlayerIp(playerid, ipAddress, sizeof(ipAddress));
    if (!strcmp(ipAddress, "127.0.0.1"))
    {
        SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to your server, master :)");
    }
    return 1;
}
```

## Opmerkingen

- PAWN is case‑sensitive: `GetPlayerIP` werkt niet.
- SA‑MP server: werkt niet in [OnPlayerDisconnect](../callbacks/OnPlayerDisconnect); gebruik [OnPlayerConnect](../callbacks/OnPlayerConnect). In open.mp werkt dit wél in `OnPlayerDisconnect`.

## Gerelateerd

- [NetStats_GetIpPort](NetStats_GetIpPort)
- [GetPlayerRawIp](GetPlayerRawIp)
- [GetPlayerName](GetPlayerName)
- [GetPlayerPing](GetPlayerPing)
- [GetPlayerVersion](GetPlayerVersion)


