---
title: OnClientCheckResponse
description: Dieses Callback wird ausgeführt wenn ein SendClientCheck Request abgeschlossen ist.
tags: []
---

## Beschreibung

Dieses Callback wird ausgeführt wenn ein SendClientCheck Request abgeschlossen ist.

| Name          | Beschreibung                       |
| ------------- | --------------------------------- |
| playerid      | Die ID des Spielers, der geprüft wurde.     |
| actionid      | Der Check Typ der geprüft wurde.      |
| memaddr       | Die angefragte Adresse.            |
| retndata      | Das Ergebnis des Checks.          |

## Rückgabe (return value)

Wird in Filterscripts immer zuerst aufgerufen.

## Beispiele

```c
public OnPlayerConnect(playerid)
{
    SendClientCheck(playerid, 0x48, 0, 0, 2);
    return 1;
}

public OnClientCheckResponse(playerid, actionid, memaddr, retndata)
{
    if(actionid == 0x48) // or 72
    {
        print("WARNUNG: Der Spieler scheint keinen stanrdmäßigen Computer zu nutzen!");
        Kick(playerid);
    }
    return 1;
}
```

## Anmerkungen

:::warning

Dieses Callback wird nur in Filterscripts aufgerufen.

:::

## Ähnliche Funktionen

- [SendClientCheck](../functions/SendClientCheck): Eine Memory-Überprüfung für einen Spieler durchführen.
