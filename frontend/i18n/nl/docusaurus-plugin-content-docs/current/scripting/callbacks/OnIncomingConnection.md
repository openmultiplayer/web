---
title: OnIncomingConnection
sidebar_label: OnIncomingConnection
description: Deze callback wordt aangeroepen wanneer een IP-adres een verbinding met de server probeert te maken.
tags: []
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een IP-adres een verbinding met de server probeert te maken. Gebruik BlockIpAddress om inkomende verbindingen te blokkeren.

| Naam         | Beschrijving                                        |
| ------------ | -------------------------------------------------- |
| playerid     | Het ID van de speler die probeert te verbinden.     |
| ip_address[] | Het IP-adres van de speler die probeert te verbinden |
| port         | De poort van de poging tot verbinding               |

## Returns

1 - Voorkomt dat andere filterscripts deze callback ontvangen.

0 - Geeft aan dat deze callback wordt doorgegeven aan het volgende filterscript.

Wordt altijd als eerste aangeroepen in filterscripts.

## Voorbeelden

```c
public OnIncomingConnection(playerid, ip_address[], port)
{
    printf("Incoming connection for player ID %i [IP/port: %s:%i]", playerid, ip_address, port);
    return 1;
}
```

## Gerelateerde Callbacks

De volgende callbacks kunnen nuttig zijn, omdat ze gerelateerd zijn aan deze callback.

- [OnPlayerConnect](OnPlayerConnect): Deze callback wordt aangeroepen wanneer een speler met de server verbindt.
- [OnPlayerDisconnect](OnPlayerDisconnect): Deze callback wordt aangeroepen wanneer een speler de verbinding verbreekt.
- [OnPlayerFinishedDownloading](OnPlayerFinishedDownloading): Deze callback wordt aangeroepen wanneer een speler klaar is met het downloaden van custom modellen.

## Gerelateerde Functies

De volgende functies kunnen nuttig zijn, omdat ze gerelateerd zijn aan deze callback.

- [BlockIpAddress](../functions/BlockIpAddress): Blokkeer een IP-adres voor een bepaalde tijd van verbinden met de server.
- [UnBlockIpAddress](../functions/UnBlockIpAddress): Deblokkeer een eerder geblokkeerd IP-adres.
