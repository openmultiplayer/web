---
title: OnPlayerEnterVehicle
description: Acest callback este apelat atunci când un jucător începe să intre într-un vehicul, ceea ce înseamnă că jucătorul nu se află încă în vehicul în momentul în care este apelat.
tags: ["player", "vehicle"]
---

## Descriere

Acest callback este apelat atunci când un jucător începe să intre într-un vehicul, ceea ce înseamnă că jucătorul nu se află încă în vehicul în momentul în care este apelat.

| Nume        | Descriere                                                    |
| ----------- | ------------------------------------------------------------ |
| playerid    | ID-ul jucătorului care încearcă să intre într-un vehicul.    |
| vehicleid   | ID-ul vehiculului în care jucătorul încearcă să intre.       |
| ispassenger | 0 dacă introduceți ca șofer. 1 dacă intri ca pasager.        |

## Returnări

Este întotdeauna numit primul în filterscript-uri.

## Exemple

```c
public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)
{
    new string[128];
    format(string, sizeof(string), "Intri in vehicul %i", vehicleid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Note

:::tip

Acest apel invers este apelat atunci când un jucător ÎNCEPE să intre într-un vehicul, nu când a intrat în el. Consultați OnPlayerStateChange. Acest apel invers este în continuare apelat dacă jucătorului i se interzice intrarea în vehicul (de exemplu, acesta este blocat sau plin).

:::

## Funcții similare

- [PutPlayerInVehicle](../functions/PutPlayerInVehicle): Pune un jucător într-un vehicul.
- [GetPlayerVehicleSeat](../functions/GetPlayerVehicleSeat): Verificați pe ce loc se află un jucător.