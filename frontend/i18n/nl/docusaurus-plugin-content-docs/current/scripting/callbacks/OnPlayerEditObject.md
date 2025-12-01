---
title: OnPlayerEditObject
sidebar_label: OnPlayerEditObject
description: Deze callback wordt aangeroepen wanneer een speler klaar is met het bewerken van een object (BeginObjectEditing/BeginPlayerObjectEditing).
tags: ["player", "object"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler klaar is met het bewerken van een object ([BeginObjectEditing](../functions/BeginObjectEditing)/[BeginPlayerObjectEditing](../functions/BeginPlayerObjectEditing)).

| Naam                   | Beschrijving                                                     |
| ---------------------- | --------------------------------------------------------------- |
| playerid               | Het ID van de speler die een object bewerkte                    |
| playerobject           | 0 als het een globaal object is, 1 als het een playerobject is. |
| objectid               | Het ID van het bewerkte object                                   |
| EDIT_RESPONSE:response | Het [type response](../resources/objecteditionresponsetypes)     |
| Float:fX               | X-offset voor het bewerkte object                                |
| Float:fY               | Y-offset voor het bewerkte object                                |
| Float:fZ               | Z-offset voor het bewerkte object                                |
| Float:fRotX            | X-rotatie voor het bewerkte object                               |
| Float:fRotY            | Y-rotatie voor het bewerkte object                               |
| Float:fRotZ            | Z-rotatie voor het bewerkte object                               |

## Returns

1 - Voorkomt dat andere scripts deze callback ontvangen.

0 - Geeft aan dat deze callback wordt doorgegeven aan het volgende script.

Wordt altijd als eerste aangeroepen in filterscripts.

## Voorbeelden

```c
public OnPlayerEditObject(playerid, playerobject, objectid, EDIT_RESPONSE:response, Float:fX, Float:fY, Float:fZ, Float:fRotX, Float:fRotY, Float:fRotZ)
{
    new
        Float: oldX,
        Float: oldY,
        Float: oldZ,
        Float: oldRotX,
        Float: oldRotY,
        Float: oldRotZ;

    GetObjectPos(objectid, oldX, oldY, oldZ);
    GetObjectRot(objectid, oldRotX, oldRotY, oldRotZ);

    if (!playerobject) // Globaal object: sync positie
    {
        if (!IsValidObject(objectid))
        {
            return 1;
        }
        SetObjectPos(objectid, fX, fY, fZ);
        SetObjectRot(objectid, fRotX, fRotY, fRotZ);
    }

    switch (response)
    {
        case EDIT_RESPONSE_FINAL:
        {
            // Opslaan van de nieuwe positie/rotatie
        }

        case EDIT_RESPONSE_CANCEL:
        {
            // Terugzetten naar oude positie
            if (!playerobject)
            {
                SetObjectPos(objectid, oldX, oldY, oldZ);
                SetObjectRot(objectid, oldRotX, oldRotY, oldRotZ);
            }
            else
            {
                SetPlayerObjectPos(playerid, objectid, oldX, oldY, oldZ);
                SetPlayerObjectRot(playerid, objectid, oldRotX, oldRotY, oldRotZ);
            }
        }
    }
    return 1;
}
```

## Notities

:::warning

Bij gebruik van 'EDIT_RESPONSE_UPDATE' wordt deze callback niet aangeroepen bij het loslaten van een lopende edit; de laatste update kan daarom uit sync zijn met de daadwerkelijke positie.

:::

## Gerelateerde Functies

- [BeginPlayerObjectEditing](../functions/BeginPlayerObjectEditing): Bewerk een player-object.
- [BeginObjectEditing](../functions/BeginObjectEditing): Bewerk een object.
- [CreateObject](../functions/CreateObject): Maak een object.
- [DestroyObject](../functions/DestroyObject): Vernietig een object.
- [MoveObject](../functions/MoveObject): Verplaats een object.

## Gerelateerde Resources

- [Object Edition Response Types](../resources/objecteditionresponsetypes)
