---
title: GetPlayerTime
sidebar_label: GetPlayerTime
description: Haal de huidige in‑game tijd van een speler op.
tags: ["player"]
---

## Beschrijving

Haal de huidige in‑game tijd van de speler op. Wordt gezet met [SetWorldTime](SetWorldTime) of automatisch met [TogglePlayerClock](TogglePlayerClock).

| Naam | Beschrijving |
| ---- | ------------ |
| playerid | Speler waarvan je de tijd wilt. |
| &hour | Referentie voor uur |
| &minute | Referentie voor minuten |

## Retourneert

**true** bij succes, **false** als de speler niet bestaat. Tijd wordt in de variabelen opgeslagen.

## Voorbeeld

```c
new hour, minutes;
GetPlayerTime(playerid, hour, minutes);
if (hour == 13 && minutes == 37)
{
    SendClientMessage(playerid, -1, "The time is 13:37!");
}
```

## Gerelateerd

- [SetPlayerTime](SetPlayerTime)
- [SetWorldTime](SetWorldTime)
- [TogglePlayerClock](TogglePlayerClock)


