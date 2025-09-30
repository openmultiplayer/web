---
title: OnPlayerSelectObject
sidebar_label: OnPlayerSelectObject
description: Deze callback wordt aangeroepen wanneer een speler een object selecteert na het gebruik van BeginObjectSelecting.
tags: ["player", "object"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler een object selecteert na het gebruik van [BeginObjectSelecting](../functions/BeginObjectSelecting).

| Naam               | Beschrijving                                             |
| ------------------ | ------------------------------------------------------- |
| playerid           | Het ID van de speler die een object selecteerde         |
| SELECT_OBJECT:type | Het [type](../resources/selectobjecttypes) van selectie |
| objectid           | Het ID van het geselecteerde object                     |
| modelid            | Het model van het geselecteerde object                 |
| Float:fX           | De X-positie van het geselecteerde object              |
| Float:fY           | De Y-positie van het geselecteerde object              |
| Float:fZ           | De Z-positie van het geselecteerde object              |

## Returns

1 - Voorkomt dat andere scripts deze callback ontvangen.

0 - Geeft aan dat deze callback wordt doorgegeven aan het volgende script.

Wordt altijd als eerste aangeroepen in filterscripts.

## Voorbeelden

```c
public OnPlayerSelectObject(playerid, SELECT_OBJECT:type, objectid, modelid, Float:fX, Float:fY, Float:fZ)
{
    printf("Player %d selected object %d", playerid, objectid);

    if (type == SELECT_OBJECT_GLOBAL_OBJECT)
    {
        BeginObjectEditing(playerid, objectid);
    }
    else
    {
        BeginPlayerObjectEditing(playerid, objectid);
    }

    SendClientMessage(playerid, 0xFFFFFFFF, "You now are able to edit your object!");
    return 1;
}
```

## Gerelateerde Functies

- [BeginObjectSelecting](../functions/BeginObjectSelecting): Selecteer een object.

## Gerelateerde Resources

- [Select Object Types](../resources/selectobjecttypes)
