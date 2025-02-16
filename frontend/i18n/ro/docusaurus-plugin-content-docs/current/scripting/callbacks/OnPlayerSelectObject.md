---
title: OnPlayerSelectObject
sidebar_label: OnPlayerSelectObject
description: Acest callback este apelat atunci când un jucător selectează un obiect după ce SelectObject a fost folosit.
tags: ["player"]
---

## Descriere

Acest callback este apelat atunci când un jucător selectează un obiect după ce SelectObject a fost folosit.

| Nume     | Descriere                                                  |
| -------- | ---------------------------------------------------------- |
| playerid | ID-ul jucătorului care a selectat un obiect                |
| type     | [Tipul](../resources/selectobjecttypes) de selecție        |
| objectid | ID-ul obiectului selectat                                  |
| modelid  | Modelul obiectului selectat                                |
| Float:fX | Poziția X a obiectului selectat                            |
| Float:fY | Poziția Y a obiectului selectat                            |
| Float:fZ | Poziția Z a obiectului selectat                            |

## Returnări

1 - Will prevent other scripts from receiving this callback.

0 - Indicates that this callback will be passed to the next script.

It is always called first in filterscripts.

## Exemple

```c
public OnPlayerSelectObject(playerid, type, objectid, modelid, Float:fX, Float:fY, Float:fZ)
{
    printf("Jucătorul %d a selectat obiectul %d", playerid, objectid);
    if (type == SELECT_OBJECT_GLOBAL_OBJECT)
    {
        EditObject(playerid, objectid);
    }
    else
    {
        EditPlayerObject(playerid, objectid);
    }
    SendClientMessage(playerid, 0xFFFFFFFF, "Acum puteți edita obiectul dvs.!");
    return 1;
}
```

## Funcții similare

- [SelectObject](../functions/SelectObject): Selectați un obiect.