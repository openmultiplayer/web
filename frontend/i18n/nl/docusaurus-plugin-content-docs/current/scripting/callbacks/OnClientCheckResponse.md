---
title: OnClientCheckResponse
sidebar_label: OnClientCheckResponse
description: Deze callback wordt aangeroepen wanneer een SendClientCheck-verzoek voltooid is.
tags: []
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een SendClientCheck-verzoek voltooid is.

| Naam     | Beschrijving                   |
| -------- | ----------------------------- |
| playerid | Het ID van de gecontroleerde speler. |
| actionid | Het type uitgevoerde check.     |
| memaddr  | Het gevraagde adres.           |
| retndata | Het resultaat van de check.    |

## Returns

Wordt altijd als eerste aangeroepen in filterscripts.

## Voorbeelden

```c
public OnPlayerConnect(playerid)
{
    SendClientCheck(playerid, 0x48, 0, 0, 2);
    return 1;
}

public OnClientCheckResponse(playerid, actionid, memaddr, retndata)
{
    if (actionid == 0x48) // of 72
    {
        print("The player is connecting using the PC client.");
    }
    return 1;
}
```

## Notities

:::warning

**SA:MP Server**: Deze callback wordt alleen aangeroepen wanneer het in een filterscript staat.

**Open Multiplayer Server**: Deze callback werkt normaal binnen een gamemode / filterscript.

:::

## Gerelateerde Functies

- [SendClientCheck](../functions/SendClientCheck): Voer een geheugencheck uit op de client.

## Gerelateerde Resources

- [opcodes](../resources/opcodes): Action opcode IDs en hun doel.
