---
title: OnPlayerCommandText
sidebar_label: OnPlayerCommandText
description: Deze callback wordt aangeroepen wanneer een speler een command invoert in het client chat venster.
tags: ["player"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler een command invoert in het client chat venster. Commands zijn alles wat begint met een forward slash, bijv. /help.

| Naam      | Beschrijving                                                 |
| --------- | ----------------------------------------------------------- |
| playerid  | Het ID van de speler die een command invoerde.             |
| cmdtext[] | Het command dat werd ingevoerd (inclusief de forward slash). |

## Returns

Wordt altijd als eerste aangeroepen in filterscripts, dus return 1 blokkeert andere scripts om het te verwerken.

## Voorbeelden

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/help", true))
    {
        SendClientMessage(playerid, -1, "SERVER: This is the /help command!");
        return 1;
        // Return 1 informeert de server dat het command is verwerkt.
        // OnPlayerCommandText wordt niet aangeroepen in andere scripts.
    }
    return 0;
    // Return 0 informeert de server dat het command niet is verwerkt door dit script.
    // OnPlayerCommandText wordt aangeroepen in andere scripts totdat één return 1.
    // Als geen scripts return 1, wordt het 'SERVER: Unknown Command' bericht getoond aan de speler.
}
```

## Notities

<TipNPCCallbacks />

## Gerelateerde Callbacks

De volgende callbacks kunnen nuttig zijn, omdat ze gerelateerd zijn aan deze callback.

- [OnPlayerText](OnPlayerText): Deze callback wordt aangeroepen wanneer een speler een chatbericht verstuurt.
- [OnRconCommand](OnRconCommand): Deze callback wordt aangeroepen wanneer een command wordt verstuurd via de server console, remote RCON, of via de in-game "/rcon command".

## Gerelateerde Functies

De volgende functies kunnen nuttig zijn, omdat ze gerelateerd zijn aan deze callback.

- [SendRconCommand](../functions/SendRconCommand): Verstuurt een RCON command via het script.
