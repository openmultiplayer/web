---
title: GetPlayerVersion
sidebar_label: GetPlayerVersion
description: Haal de SA‑MP/open.mp clientversie van een speler op.
tags: ["player"]
---

## Beschrijving

Haal de clientversie op zoals gemeld door de speler.

| Naam | Beschrijving |
| ---- | ------------ |
| playerid | ID van de speler. |
| version[] | Buffer om de versie in op te slaan (by reference). |
| len = sizeof (version) | Maximale lengte van de versie. |

## Retourneert

De versie wordt in de array opgeslagen.

## Voorbeeld

```c
public OnPlayerConnect(playerid)
{
    new version[24];
    GetPlayerVersion(playerid, version, sizeof(version));
    new s[64];
    format(s, sizeof(s), "Your version of SA-MP: %s", version);
    SendClientMessage(playerid, -1, s);
    return 1;
}
```

## Opmerkingen

- Versie kan tot 24 tekens lang zijn; anders wordt de verbinding geweigerd. Normaal 5–9 tekens.
- De string is leeg voor NPCs.

## Gerelateerd

- [GetPlayerName](GetPlayerName)
- [GetPlayerPing](GetPlayerPing)
- [GetPlayerIp](GetPlayerIp)


