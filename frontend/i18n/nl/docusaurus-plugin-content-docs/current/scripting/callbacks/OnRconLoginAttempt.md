---
title: OnRconLoginAttempt
sidebar_label: OnRconLoginAttempt
description: Deze callback wordt aangeroepen wanneer iemand in-game probeert in te loggen op RCON, ongeacht of dat lukt of niet.
tags: ["rcon", "administration"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer iemand in-game probeert in te loggen op RCON, ongeacht of die poging slaagt of niet.

| Naam       | Beschrijving                                                    |
| ---------- | -------------------------------------------------------------- |
| ip[]       | Het IP-adres van de speler die probeerde in te loggen op RCON. |
| password[] | Het wachtwoord dat bij de poging is gebruikt.                  |
| success    | 0 als het wachtwoord onjuist was, 1 als het correct was.       |

## Returns

Wordt altijd als eerste aangeroepen in filterscripts.

## Voorbeelden

```c
public OnRconLoginAttempt(ip[], password[], success)
{
    if (!success) // Wachtwoord onjuist
    {
        printf("FAILED RCON LOGIN BY IP %s USING PASSWORD %s", ip, password);

        new ipAddress[16];

        for (new i = 0; i < MAX_PLAYERS; i++)
        {
            if (!IsPlayerConnected(i))
            {
                continue;
            }

            GetPlayerIp(i, ipAddress, sizeof(ipAddress));

            if (!strcmp(ip, ipAddress, true))
            {
                SendClientMessage(i, 0xFFFFFFFF, "Wrong Password. Bye!");
                Kick(i);
                break;
            }
        }
    }
    return 1;
}
```

## Notities

:::tip

Deze callback wordt alleen aangeroepen wanneer /rcon login in-game wordt gebruikt. Deze callback wordt alleen aangeroepen wanneer de speler nog niet is ingelogd. Zodra de speler is ingelogd, wordt [OnRconCommand](OnRconCommand) aangeroepen in plaats daarvan.

:::

## Gerelateerde Callbacks

- [OnRconCommand](OnRconCommand): Deze callback wordt aangeroepen wanneer een RCON-command wordt verstuurd.

## Gerelateerde Functies

- [IsPlayerAdmin](../functions/IsPlayerAdmin): Controleert of een speler is ingelogd op RCON.
- [SetPlayerAdmin](../functions/SetPlayerAdmin): Zet de speler als RCON admin.
- [SendRconCommand](../functions/SendRconCommand): Stuurt een RCON-command via het script.


