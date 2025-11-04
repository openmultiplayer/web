---
title: OnPlayerConnect
sidebar_label: OnPlayerConnect
description: Deze callback wordt aangeroepen wanneer een speler verbindt met de server.
tags: ["player"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler verbindt met de server.

| Naam     | Beschrijving                                    |
| -------- | ----------------------------------------------- |
| playerid | Het ID van de speler die verbonden is.          |

## Returns

0 - Voorkomt dat andere filterscripts deze callback ontvangen.

1 - Geeft aan dat deze callback wordt doorgegeven aan het volgende filterscript.

Wordt altijd als eerste aangeroepen in filterscripts.

## Voorbeelden

```c
public OnPlayerConnect(playerid)
{
    new
        string[64],
        playerName[MAX_PLAYER_NAME];

    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);
    format(string, sizeof string, "%s has joined the server. Welcome!", playerName);
    SendClientMessageToAll(0xFFFFFFAA, string);
    return 1;
}
```

## Notities

<TipNPCCallbacks />

## Gerelateerde Callbacks

De volgende callbacks kunnen nuttig zijn, omdat ze gerelateerd zijn aan deze callback.

- [OnPlayerDisconnect](OnPlayerDisconnect): Deze callback wordt aangeroepen wanneer een speler de server verlaat.
- [OnIncomingConnection](OnIncomingConnection): Deze callback wordt aangeroepen wanneer een speler probeert te verbinden met de server.
- [OnPlayerFinishedDownloading](OnPlayerFinishedDownloading): Deze callback wordt aangeroepen wanneer een speler klaar is met het downloaden van custom modellen.
