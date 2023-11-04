---
title: OnPlayerSelectObject
description: Ovaj callback je pozvan kada igrač selektuje objekat nakon što je SelectObject funkcija iskorištena.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3e i ne radi u nižim verzijama!

:::

## Deskripcija

Ovaj callback je pozvan kada igrač selektuje objekat nakon što je SelectObject funkcija iskorištena.

| Ime      | Deskripcija                                     |
| -------- | ----------------------------------------------- |
| playerid | ID igrača koji je selektovao objekat            |
| type     | [Tip](../resources/selectobjecttypes) selekcije |
| objectid | ID odabranog/selektovanog objekta               |
| modelid  | model odabranog/selektovanog objekta            |
| Float:fX | X pozicija odabranog/selektovanog objekta       |
| Float:fY | Y pozicija odabranog/selektovanog objekta       |
| Float:fZ | Z pozicija odabranog/selektovanog objekta       |

## Returns

1 - Spriječiti će da druge skripte primaju ovaj callback.

0 - Govori da će ovaj callback biti proslijeđen do naredne skripte.

Uvijek je pozvan prvi u filterskripti.

## Primjeri

```c
public OnPlayerSelectObject(playerid, type, objectid, modelid, Float:fX, Float:fY, Float:fZ)
{
    printf("Player %d selected object %d", playerid, objectid);
    if (type == SELECT_OBJECT_GLOBAL_OBJECT)
    {
        EditObject(playerid, objectid);
    }
    else
    {
        EditPlayerObject(playerid, objectid);
    }
    SendClientMessage(playerid, 0xFFFFFFFF, "Sada si u mogucnosti da editujes ovaj objekat!");
    return 1;
}
```

## Srodne Funkcije

- [SelectObject](../functions/SelectObject): Odaberi/selektuj objekat.
