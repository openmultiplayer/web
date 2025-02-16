---
title: OnPlayerEditAttachedObject
sidebar_label: OnPlayerEditAttachedObject
description: Ovaj callback je pozvan kada igrač napusti mod uređivanja prikvačenih objekata (attached object edition mode).
tags: ["player"]
---

## Deskripcija

Ovaj callback je pozvan kada igrač napusti mod uređivanja prikvačenih objekata (attached object edition mode).

| Ime                    | Deskripcija                                                   |
|------------------------|---------------------------------------------------------------|
| playerid               | ID igrača koji je napustio mod uređivanja                     |
| EDIT_RESPONSE:response | 0 ako su prekinuli (ESC) ili 1 ako su kliknuli na save ikonu. |
| index                  | The index of the attached object (0-9)                        |
| modelid                | Model prikvačenog objekta koji je uređen                      |
| boneid                 | Kost na kojoj se nalazi uređeni prikvačeni objekat            |
| Float:fOffsetX         | Ofset X prikvačenog objekta koji je editovan                  |
| Float:fOffsetY         | Ofset Y prikvačenog objekta koji je editovan                  |
| Float:fOffsetZ         | Ofset Z prikvačenog objekta koji je editovan                  |
| Float:fRotX            | Rotacija X prikvačenog objekta koji je editovan               |
| Float:fRotY            | Rotacija Y prikvačenog objekta koji je editovan               |
| Float:fRotZ            | Rotacija Z prikvačenog objekta koji je editovan               |
| Float:fScaleX          | Skala X prikvačenog objekta koji je editovan                  |
| Float:fScaleY          | Skala X prikvačenog objekta koji je editovan                  |
| Float:fScaleZ          | Skala X prikvačenog objekta koji je editovan                  |

## Returns

1 - Spriječiti će da druge skripte primaju ovaj callback.

0 - Označava da će ovaj callback biti proslijeđen narednoj skripti.

Uvijek je pozvana prva u filterskripti.

## Primjeri

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

// Podaci bi se trebali pohraniti u gornji niz kada su pridruženi priloženi objekti.

public OnPlayerEditAttachedObject(playerid, EDIT_RESPONSE:response, index, modelid, boneid, Float:fOffsetX, Float:fOffsetY, Float:fOffsetZ, Float:fRotX, Float:fRotY, Float:fRotZ, Float:fScaleX, Float:fScaleY, Float:fScaleZ)
{
    if (response)
    {
        SendClientMessage(playerid, COLOR_GREEN, "Uredjivanje zakacenog objekta sacuvano!");

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
        SendClientMessage(playerid, COLOR_RED, "Uredjivanje zakacenog objekta nije sacuvano!");

        new i = index;
        SetPlayerAttachedObject(playerid, index, modelid, boneid, ao[playerid][i][ao_x], ao[playerid][i][ao_y], ao[playerid][i][ao_z], ao[playerid][i][ao_rx], ao[playerid][i][ao_ry], ao[playerid][i][ao_rz], ao[playerid][i][ao_sx], ao[playerid][i][ao_sy], ao[playerid][i][ao_sz]);
    }
    return 1;
}
```

## Zabilješke

:::warning

Izdanja treba odbaciti ako je odgovor bio '0' (otkazan). To se mora učiniti spremanjem ofseta itd. U niz PRIJE korištenja EditAttachedObject.

:::

## Srodne Funkcije

- [EditAttachedObject](../functions/EditAttachedObject): Uredi prikvačeni objekat.
- [SetPlayerAttachedObject](../functions/SetPlayerAttachedObject): Prikvači objekat za igrača.
