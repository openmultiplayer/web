---
title: OnPlayerDisconnect
sidebar_label: OnPlayerDisconnect
description: Deze callback wordt aangeroepen wanneer een speler de verbinding met de server verbreekt.
tags: ["player"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler de verbinding met de server verbreekt.

| Naam     | Beschrijving                                        |
| -------- | -------------------------------------------------- |
| playerid | Het ID van de speler die de verbinding verbrak.   |
| reason   | De reden voor de verbreek. Zie tabel hieronder.   |

## Returns

0 - Voorkomt dat andere filterscripts deze callback ontvangen.

1 - Geeft aan dat deze callback wordt doorgegeven aan het volgende filterscript.

Wordt altijd als eerste aangeroepen in filterscripts.

## Redenen

| ID  | Reden        | Details                                                                                         |
| --- | ------------- | ----------------------------------------------------------------------------------------------- |
| 0   | Timeout/Crash | De verbinding van de speler ging verloren. Hun game crashte of hun netwerk had een fout.       |
| 1   | Quit          | De speler stopte opzettelijk, via het /quit (/q) commando of via het pauze-menu.        |
| 2   | Kick/Ban      | De speler werd gekicked of gebanned door de server.                                                  |
| 3   | Custom        | Gebruikt door enkele libraries. Gereserveerd voor private gebruik van modes.                                       |
| 4   | Mode End      | De huidige mode eindigt, dus alle spelers worden eruit gehaald (ze zijn nog steeds op de server). |

:::warning

Reden 3 werd oorspronkelijk toegevoegd in SA:MP door [fixes.inc](https://github.com/pawn-lang/sa-mp-fixes)

Redenen 3 en 4 werden toegevoegd door de Open Multiplayer server.

:::

## Voorbeelden

```c
public OnPlayerDisconnect(playerid, reason)
{
    new
        szString[64],
        playerName[MAX_PLAYER_NAME];

    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);

    new szDisconnectReason[5][] =
    {
        "Timeout/Crash",
        "Quit",
        "Kick/Ban",
        "Custom",
        "Mode End"
    };

    format(szString, sizeof szString, "%s left the server (%s).", playerName, szDisconnectReason[reason]);

    SendClientMessageToAll(0xC4C4C4FF, szString);
    return 1;
}
```

## Notities

:::tip

Sommige functies werken mogelijk niet correct wanneer ze in deze callback worden gebruikt omdat de speler al is verbroken wanneer de callback wordt aangeroepen. Dit betekent dat je geen ondubbelzinnige informatie kunt krijgen van functies zoals [GetPlayerIp](GetPlayerIp) en [GetPlayerPos](GetPlayerPos).

Dit probleem is opgelost in de open.mp server.

:::

## Gerelateerde Callbacks

- [OnPlayerConnect](OnPlayerConnect): Deze callback wordt aangeroepen wanneer een speler verbindt met de server.
- [OnIncomingConnection](OnIncomingConnection): Deze callback wordt aangeroepen wanneer een speler probeert te verbinden met de server.
- [OnPlayerFinishedDownloading](OnPlayerFinishedDownloading): Deze callback wordt aangeroepen wanneer een speler klaar is met het downloaden van aangepaste modellen.