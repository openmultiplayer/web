---
title: OnPlayerEditAttachedObject
sidebar_label: OnPlayerEditAttachedObject
description: Deze callback wordt aangeroepen wanneer een speler de attached object edit-modus beëindigt.
tags: ["player", "object", "attachment"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler de attached object edit-modus beëindigt.

| Naam                   | Beschrijving                                                  |
| ---------------------- | ------------------------------------------------------------ |
| playerid               | Het ID van de speler die de edit-modus beëindigde            |
| EDIT_RESPONSE:response | 0 als ze annuleerden (ESC) of 1 als ze op het opslaan-icoon klikten |
| index                  | De index van het attached object (0-9)                       |
| modelid                | Het model van het attached object dat werd bewerkt           |
| boneid                 | Het bot van het attached object dat werd bewerkt             |
| Float:fOffsetX         | De X-offset voor het attached object dat werd bewerkt        |
| Float:fOffsetY         | De Y-offset voor het attached object dat werd bewerkt        |
| Float:fOffsetZ         | De Z-offset voor het attached object dat werd bewerkt        |
| Float:fRotX            | De X-rotatie voor het attached object dat werd bewerkt       |
| Float:fRotY            | De Y-rotatie voor het attached object dat werd bewerkt       |
| Float:fRotZ            | De Z-rotatie voor het attached object dat werd bewerkt       |
| Float:fScaleX          | De X-schaal voor het attached object dat werd bewerkt        |
| Float:fScaleY          | De Y-schaal voor het attached object dat werd bewerkt        |
| Float:fScaleZ          | De Z-schaal voor het attached object dat werd bewerkt        |

## Returns

1 - Voorkomt dat andere scripts deze callback ontvangen.

0 - Geeft aan dat deze callback wordt doorgegeven aan het volgende script.

Wordt altijd als eerste aangeroepen in filterscripts.

## Voorbeelden

```c
enum attached_object_data
{
    Float:ao_x,
    Float:ao_y,
    Float:ao_z,
    Float:ao_rx,
    Float:ao_ry,
    Float:ao_rz,
    Float:ao_sx,
    Float:ao_sy,
    Float:ao_sz
}

new ao[MAX_PLAYERS][MAX_PLAYER_ATTACHED_OBJECTS][attached_object_data];

// De data moet worden opgeslagen in de bovenstaande array wanneer attached objects worden geattached.

public OnPlayerEditAttachedObject(playerid, EDIT_RESPONSE:response, index, modelid, boneid, Float:fOffsetX, Float:fOffsetY, Float:fOffsetZ, Float:fRotX, Float:fRotY, Float:fRotZ, Float:fScaleX, Float:fScaleY, Float:fScaleZ)
{
    if (response == EDIT_RESPONSE_FINAL)
    {
        SendClientMessage(playerid, COLOR_GREEN, "Attached object edition saved.");

        ao[playerid][index][ao_x] = fOffsetX;
        ao[playerid][index][ao_y] = fOffsetY;
        ao[playerid][index][ao_z] = fOffsetZ;
        ao[playerid][index][ao_rx] = fRotX;
        ao[playerid][index][ao_ry] = fRotY;
        ao[playerid][index][ao_rz] = fRotZ;
        ao[playerid][index][ao_sx] = fScaleX;
        ao[playerid][index][ao_sy] = fScaleY;
        ao[playerid][index][ao_sz] = fScaleZ;
    }
    else if (response == EDIT_RESPONSE_CANCEL)
    {
        SendClientMessage(playerid, COLOR_RED, "Attached object edition not saved.");

        new i = index;
        SetPlayerAttachedObject(playerid, index, modelid, boneid, ao[playerid][i][ao_x], ao[playerid][i][ao_y], ao[playerid][i][ao_z], ao[playerid][i][ao_rx], ao[playerid][i][ao_ry], ao[playerid][i][ao_rz], ao[playerid][i][ao_sx], ao[playerid][i][ao_sy], ao[playerid][i][ao_sz]);
    }
    return 1;
}
```

## Notities

:::warning

Edities moeten worden weggegooid als response '0' was (geannuleerd). Dit moet worden gedaan door de offsets etc. op te slaan in een array VOOR het gebruik van [EditAttachedObject](../functions/EditAttachedObject).

:::

## Gerelateerde Functies

- [EditAttachedObject](../functions/EditAttachedObject): Bewerk een attached object.
- [SetPlayerAttachedObject](../functions/SetPlayerAttachedObject): Attach een object aan een speler
