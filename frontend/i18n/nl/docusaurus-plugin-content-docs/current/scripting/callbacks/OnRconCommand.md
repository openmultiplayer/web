---
title: OnRconCommand
sidebar_label: OnRconCommand
description: Deze callback wordt aangeroepen wanneer een command wordt verstuurd via de serverconsole, RCON of via de in-game "/rcon command".
tags: ["rcon", "administration"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een command wordt verstuurd via de serverconsole, RCON (Remote Console), of via de in-game "/rcon command".

| Naam  | Beschrijving                                                                        |
| ----- | ----------------------------------------------------------------------------------- |
| cmd[] | Een string met het ingevoerde command, inclusief eventuele meegegeven parameters.   |

## Returns

Wordt altijd als eerste aangeroepen in filterscripts; return 1 blokkeert het hoofdscript.

## Voorbeelden

```c
public OnRconCommand(cmd[])
{
    printf("[RCON]: You typed '/rcon %s'!", cmd);
    return 0;
}

public OnRconCommand(cmd[])
{
    if (!strcmp(cmd, "hello", true))
    {
        SendClientMessageToAll(0xFFFFFFAA, "Hello World!");
        print("You said hello to the world.");
        return 1;
    }
    return 0;
}
```

## Notities

:::warning

De /rcon prefix zit niet in de `cmd` parameter wanneer een speler een command typt. Als je hier `print` gebruikt, gaat het bericht naar zowel de speler die het command intypte als de serverlog.

Deze callback wordt niet aangeroepen als de speler niet is ingelogd als RCON admin. Wanneer een speler /rcon login gebruikt om in te loggen, wordt deze callback niet aangeroepen; in plaats daarvan wordt OnRconLoginAttempt aangeroepen. Zodra je bent ingelogd als RCON admin, triggert elk volgend command deze callback.

:::

:::warning

In SA-MP moet je deze callback in een geladen filterscript hebben voor het werkt.

Dit probleem is opgelost in open.mp.

:::

## Gerelateerde Callbacks

- [OnRconLoginAttempt](OnRconLoginAttempt): Deze callback wordt aangeroepen wanneer er een poging tot RCON-login wordt gedaan.

## Gerelateerde Functies

- [IsPlayerAdmin](../functions/IsPlayerAdmin): Controleert of een speler is ingelogd op RCON.
- [SetPlayerAdmin](../functions/SetPlayerAdmin): Zet de speler als RCON admin.

