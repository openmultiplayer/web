---
title: GetPlayerKeys
sidebar_label: GetPlayerKeys
description: Controleer welke functietoetsen een speler indrukt.
tags: ["player"]
---

## Beschrijving

Lees de huidige key‑states van een speler.

| Naam | Beschrijving |
| ---- | ------------ |
| playerid | ID van de speler. |
| &KEY:keys | Bitmask met key‑states (zie [Keys](../resources/keys)). |
| updown | Up/down‑state. |
| leftright | Left/right‑state. |

## Retourneert

Keys worden in de opgegeven variabelen opgeslagen.

## Voorbeeld

```c
public OnPlayerUpdate(playerid)
{
    new KEY:keys, updown, leftright;
    GetPlayerKeys(playerid, keys, updown, leftright);
    if (updown == KEY_UP) SendClientMessage(playerid, -1, "UP");
    else if (updown == KEY_DOWN) SendClientMessage(playerid, -1, "DOWN");
    if (leftright == KEY_LEFT) SendClientMessage(playerid, -1, "LEFT");
    else if (leftright == KEY_RIGHT) SendClientMessage(playerid, -1, "RIGHT");
    return 1;
}
```

## Opmerkingen

Alleen de FUNCTIE van toetsen wordt gedetecteerd; niet de fysieke toets. Bijvoorbeeld SPRINT i.p.v. SPATIE. In voertuigen worden A en D niet herkend; W en S wel via `keys`.

## Gerelateerd

- [Keys](../resources/keys)


