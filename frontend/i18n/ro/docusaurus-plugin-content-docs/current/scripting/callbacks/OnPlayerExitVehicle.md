---
title: OnPlayerExitVehicle
sidebar_label: OnPlayerExitVehicle
description: Acest callback este apelat atunci când un jucător începe să părăsească un vehicul.
tags: ["player", "vehicle"]
---

## Descriere

Acest callback este apelat atunci când un jucător începe să părăsească un vehicul.

| Nume      | Descriere                                       |
| --------- | ----------------------------------------------- |
| playerid  | ID-ul jucătorului care iese dintr-un vehicul.   |
| vehicleid | ID-ul vehiculului din care iese jucătorul.      |

## Returnări

Este întotdeauna numit primul în filterscript-uri.

## Exemple

```c
public OnPlayerExitVehicle(playerid, vehicleid)
{
    new string[35];
    format(string, sizeof(string), "INFO: Ieși din vehiculul %i", vehicleid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Note

:::warning

Nu este apelat dacă jucătorul cade de pe bicicletă sau este scos dintr-un vehicul prin alte mijloace, cum ar fi utilizarea SetPlayerPos. Trebuie să utilizați OnPlayerStateChange și să verificați dacă starea lor veche este PLAYER_STATE_DRIVER sau PLAYER_STATE_PASSENGER și dacă noua lor stare este PLAYER_STATE_ONFOOT.

:::

## Funcții similare

- [RemovePlayerFromVehicle](../functions/RemovePlayerFromVehicle): Aruncă un jucător din vehiculul lor.
- [GetPlayerVehicleSeat](../functions/GetPlayerVehicleSeat): Verificați pe ce loc se află un jucător.