---
title: OnPlayerInteriorChange
sidebar_label: OnPlayerInteriorChange
description: Apelat când un jucător schimbă interiorul.
tags: ["player"]
---

## Descriere

Apelat când un jucător schimbă interiorul. Poate fi declanșat de SetPlayerInterior sau atunci când un jucător intră/iese dintr-o clădire.

| Nume          | Descriere                                 |
| ------------- | ----------------------------------------- |
| playerid      | Jucatorul care a schimbat interiorul.     |
| newinteriorid | Interiorul în care se află acum jucătorul.|
| oldinteriorid | Interiorul în care era jucătorul înainte. |

## Returnări

Este întotdeauna numit primul în modul de joc.

## Exemple

```c
public OnPlayerInteriorChange(playerid, newinteriorid, oldinteriorid)
{
    new string[42];
    format(string, sizeof(string), "Ai trecut de la interiorul %d la interiorul %d!", oldinteriorid, newinteriorid);
    SendClientMessage(playerid, COLOR_ORANGE, string);
    return 1;
}
```

## Funcții similare

- [SetPlayerInterior](../functions/SetPlayerInterior): Setați interiorul unui jucător.
- [GetPlayerInterior](../functions/GetPlayerInterior): Obțineți interiorul actual al unui jucător.
- [LinkVehicleToInterior](../functions/LinkVehicleToInterior): Schimbați interiorul în care este văzut un vehicul.
- [OnPlayerStateChange](OnPlayerStateChange): Apelat când un jucător își schimbă starea.