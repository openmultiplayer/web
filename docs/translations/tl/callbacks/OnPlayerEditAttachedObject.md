---
title: OnPlayerEditAttachedObject
description: This callback is called when a player ends attached object edition mode.
tags: ["player"]
---

<VersionWarn name='callback' version='SA-MP 0.3e' />

## Deskripsyon

Ang callback na ito ay natatawag kapag ang player ay tinapos ang pag ayos ng kanyang attached object.

| Pangala        | Deskripsyon                                                          |
| -------------- | -------------------------------------------------------------------- |
| playerid       | Ang ID ng player na tumapos ng pag aayos ng Attached Object          |
| response       | 0 kapag nag kansela (ESC) o 1 kapag pinindot ang save icon.          |
| modelid        | Ang model id ng Attached Object na inayos.                           |
| boneid         | Ang 'bone' kung saan naka lagay ang object na inayos.                |
| Float:fOffsetX | Ang X na offset para sa nakalagay na object na inayos ng player      |
| Float:fOffsetY | Ang Y na offset para sa nakalagay na object na inayos ng player      |
| Float:fOffsetZ | Ang Z na offset para sa nakalagay na object na inayos ng player      |
| Float:fRotX    | Ang X na rotasyon para sa nakalagay na object na inayos ng player    |
| Float:fRotY    | Ang Y na rotasyon para sa nakalagay na object na inayos ng player    |
| Float:fRotZ    | Ang Z na rotasyon para sa nakalagay na object na inayos ng player    |
| Float:fScaleX  | Ang X scale for para nakalagay na object na inayos ng player         |
| Float:fScaleY  | Ang Y scale for para nakalagay na object na inayos ng player         |
| Float:fScaleZ  | Ang Z scale for para nakalagay na object na inayos ng player         |

## Returns

0 - Ay hindi hahayaan ang ibang filterscript na ma gamit ang callback na ito.

1 - Iniindika na ang callback na ito ay pwedeng ma-ipasa o magamit sa susunod the filterscript.

It is always called first in filterscripts.

## Mga Halimbawa

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

// The data should be stored in the above array when attached objects are attached.

public OnPlayerEditAttachedObject(playerid, response, index, modelid, boneid, Float:fOffsetX, Float:fOffsetY, Float:fOffsetZ, Float:fRotX, Float:fRotY, Float:fRotZ, Float:fScaleX, Float:fScaleY, Float:fScaleZ)
{
    if (response)
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
    else
    {
        SendClientMessage(playerid, COLOR_RED, "Attached object edition not saved.");

        new i = index;
        SetPlayerAttachedObject(playerid, index, modelid, boneid, ao[playerid][i][ao_x], ao[playerid][i][ao_y], ao[playerid][i][ao_z], ao[playerid][i][ao_rx], ao[playerid][i][ao_ry], ao[playerid][i][ao_rz], ao[playerid][i][ao_sx], ao[playerid][i][ao_sy], ao[playerid][i][ao_sz]);
    }
    return 1;
}
```

## Notes

:::warning

Ang mga inayos ay maiisasawalang bisa kapag ang response ay '0' (kinansela). Eto ay dapat gawin gamit ang pag naglalagay ng offset at etc. sa mga array BAGO gamitin ang EditAttachedObject.

:::

## Mga Kaugnay na Functions

- [EditAttachedObject](../functions/EditAttachedObject): Edit an attached object.
- [SetPlayerAttachedObject](../functions/SetPlayerAttachedObject): Attach an object to a player
